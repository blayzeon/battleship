const ship = function createBattleship (length=1, sunk=false) {
    return {
        length,
        damage: Array(length).fill(false),
        sunk,
        hit: function (index) {
            this.damage[index] = true;
        },
        isSunk: function () {
            for (let i = 1; i < this.damage.length; i += 1 ){
                if ( this.damage[i] === false ) {
                    return
                }
            }

            this.sunk = true;
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
            const newShip = ship(length);
            this.board.placed.push({
                ship: newShip,
                coords,
            });
            
        },
        recieveAttack: function (coords) {
            const target = this.board.placed.filter(place => place === coords);
            if (target){
                target.hit(coords);
            } else {
                this.board.misses.push(coords);
            }
        }
    }
}

export { ship, gameboard };