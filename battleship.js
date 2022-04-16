export { ship, gameboard };

const setOrientation = function generateCoordsAndDamageObj(start, length, position){
    let newCoords = [];

    let h = 0;
    let v = 0;

    for (let i = 0; i < length; i += 1){
        newCoords.push({coords: [start[0] + v, start[1] + h], damaged: false});

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
        recieveAttack: function (coords) {
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
            };

            const index = checkIndexes();
            if (index === false){
                this.board.misses.push(coords);
                return;
            } else {
                ships[index[0]].hit(index[1]);
            }

            // check if ship is dead
            ships[index[0]].isSunk();
        }
    }
}