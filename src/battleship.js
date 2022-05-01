export { ship, gameboard, player };

const boardSize = 10;

function getRandomCoords(max) {
    function random(max) {
        const min = 1;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return [random(max), random(max)];
}

const setOrientation = function generateCoordsAndDamageObj(start, length, position){
    const coords = [];
    const index = position === "h" ? 1 : 0;
    const newCoords = [];

    let reduced = start[index] || 1;
    let v = 0;
    let h = 0;

    while ( reduced + length > 10 ) {
        reduced -= 1;
    }

    if (index === 0) {
        coords.push(reduced);
        coords.push(start[1] || 1);
    } else {
        coords.push(start[0] || 1);
        coords.push(reduced);
    }

    for (let i = 0; i < length; i += 1){
        newCoords.push({coords: [coords[0] + v, coords[1] + h], damaged: false});

        if (position === "h"){
            h += 1;
        } else {
            v += 1;
        }
    }

    return newCoords;
}

const ship = function createBattleship (coords=[1, 1], length=1, position='h', sunk=false) {
    return {
        length,
        damage: setOrientation(coords, length, position),
        position,
        sunk,
        coords,
        hit: function (index) {
            this.damage[index].damaged = true;
        },
        isSunk: function () {
            for (let i = 1; i < this.damage.length; i += 1 ){
                if ( this.damage[i].damaged === false ) {
                    return
                }
            }

            this.sunk = true;
        },
        rotate: function() {
            let newPosition = 'h';
            if (this.position === 'h'){
                newPosition = 'v';
            }

            this.damage = setOrientation(this.damage[0].coords, this.length, newPosition);
            this.position = newPosition;
        }
    }
}

const gameboard = function createPlayerGameboard () {
    return {
        board: {
            placed: [],
            misses: []
        },
        placeship: function (coords, length) {
            const newShip = ship(coords, length);
            this.board.placed.push(newShip);
            
        },
        randomize: function (units, maxSize=5) {
            // sets  max to 5 if the max is too big
            let max = maxSize;

            function returnCoords(ship) {
                const coords = [];

                for (let i = 0; i < ship.damage.length; i += 1) {
                    coords.push(ship.damage[i].coords);
                }

                return coords;
            }

            function checkDupes(array1, array2) {
                const combined = [];
                array1.forEach((item)=>{combined.push(item)});
                array2.forEach((item)=>{combined.push(item)});

                const unique = [...new Set(combined)];
                    
                if (unique.length === combined.length) {
                    return unique;
                } 

                return false;
            }

            function createShips() {
                const newShip = ship(getRandomCoords(boardSize), max);
                const tempCoords = returnCoords(newShip);
                if (tempCoords[0] > boardSize) { createShips(); }
                if (tempCoords[1] > boardSize) { createShips(); }

                const result = checkDupes(allCoords, tempCoords);

                if (!result) {
                    createShips();
                }

                return { ship: newShip, coords: tempCoords };
            }

            const ships = [];
            const allCoords = [];

            while (ships.length < units) { 
                const newShip = createShips(allCoords);
                if (newShip) {
                    ships.push(newShip.ship);
                    newShip.coords.forEach((item) => { allCoords.push(item) });
                    max -= 1;
                }
            }

            const boardShips = this.board.placed;
            ships.forEach((item) => { boardShips.push(item) });
        },
        receiveAttack: function (coords) {
            // attack ship based on coords provided
            const ships = this.board.placed;
            function checkIndexes(){
                
                let result = false;
                ships.forEach(x => x.damage.forEach((y)=> {
                    if (y.coords.toString() === coords.toString()){
                        result = [ships.indexOf(x), x.damage.indexOf(y)];
                    }
                }))

                return result;
            }

            const index = checkIndexes();

            // recording hits under misses as well for easier tracking
            this.board.misses.push(coords);

            if (index){
                ships[index[0]].hit(index[1]);
                // check if ship is dead
                ships[index[0]].isSunk();
                return ships[index[0]].coords;
            }             
        },
        areAllShipsSunk: function(){
            const ships = this.board.placed;
            for (let i = 0; i < ships.length; i += 1){
                if (ships[i].sunk !== true){
                    return false;
                }
            }

            return true;
        }
    }
}

const player = function createPlayer () {
    return {
        attack: function(opponent, coords) {
            // can't check if we have an invalid board
            if (!opponent) { return false }
            
            // prevents an error if there are no other attacks attempts
            const misses = opponent.board.misses[0] ? opponent.board.misses : [[]];

            for (let i = 0; i < misses.length; i += 1){
                if (misses[i].toString() === coords.toString()){
                    return false;  
                }
            }

            return opponent.receiveAttack(coords);
        }, 
        randomAttack: function(opponent) {
            const coords = getRandomCoords(boardSize);
            const attempt = this.attack(opponent, coords);

            if (attempt === false){
                this.randomAttack(opponent);
            }

            return attempt;
            
        }
    }
}