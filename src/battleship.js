export { ship, gameboard, player, getRandomNumber, BOARD_SIZE, MAX_SHIP_SIZE };

const BOARD_SIZE = 10;
const MAX_SHIP_SIZE = 5;

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// ships token for the game board
const ship = function(length) {
    return {
        length,
        hits: [],
        sunk: false,
        hit: function() {
            this.hits.push(true);
            const result = this.isSunk();

            return result;
        }, 
        isSunk: function() {
            if (this.hits.length === this.length) {
                this.sunk = true;
                return true;
            }

            return false;
        }
    }
};

// gameboard to keep track of the player's ships
const gameboard = function() {
    return {
        board: (function(){
            const result = [];
            for (let i = 1; i <= BOARD_SIZE; i += 1) {
                for (let j = 1; j <= BOARD_SIZE; j += 1) {
                    result.push({
                        coords: `${i},${j}`,
                        ship: false,
                        attacked: false
                    });
                }
            }
            return result;
        })(),
        getDamagedShips: function(){
            // this is used to help player.randomAttack() know where to strike
            const board = this.board;
            const result = [];

            board.forEach((item) => {
                if (item.ship) {
                    if (item.attacked) {
                        if (!item.ship.sunk) {
                            result.push(item.coords);
                        }
                    }
                }
            });

            return result;
        },
        clearBoard: function(){
            // clears the board for a new game
            for (let i = 0; i < this.board.length; i += 1) {
                this.board[i].ship = false;
                this.board[i].attacked = false;
            }
        },
        getRandomCoords: function(min, max) {
            // for player.RandomAttack() and board.randomizeShipPlacement()
            return `${getRandomNumber(min, max)},${getRandomNumber(min, max)}`;
        },
        returnIndex: function(coords) {
            for (let i = 0; i < this.board.length; i += 1) {
                if (this.board[i].coords === coords) {
                    return i;
                }
            }
        },
        placeShip: function(coords, length, direction="h") {
            const newShip = ship(length);
            const newPlacement = [];
            
            // split the coords up so that we can modify them and add all parts of the ship to the board
            const coordsArray = coords.split(',');
            let vCoords = parseInt(coordsArray[0]);
            let hCoords = parseInt(coordsArray[1]);

            // avoid overflow
            if (direction === "h") {
                if (hCoords + length - 1 > BOARD_SIZE) {
                    console.log(hCoords)
                    console.log(hCoords + length)
                    console.log(BOARD_SIZE);
                    return false;
                }
            } else {
                if (vCoords + length - 1 > BOARD_SIZE) {
                    console.log('v was too long')
                    return false;
                }
            }

            // checks to see if the board coords we want to place the ship in are in use
            for (let i = 0; i < length; i += 1) {
                // move over one space to place more of the body
                if (i !== 0) {
                    if (direction === "h") {
                        hCoords += 1;
                    } else {
                        vCoords += 1;
                    }
                }

                const combinedCoords = `${vCoords},${hCoords}`; 
                const index = this.returnIndex(combinedCoords);

                // adds them to an array to be added to the board if the spot is free
                const boardSlot = this.board[index];
                if (!boardSlot.ship) {
                    newPlacement.push(boardSlot);
                } else {
                    console.log('board slot was taken')
                    return false;
                }
                
            }

            // safely places ships on the grid
            for (let j = 0; j < newPlacement.length; j += 1) {
                newPlacement[j].ship = newShip;
            }

            return newPlacement;
        },
        randomizeShipPlacement(amount=MAX_SHIP_SIZE, boardsize=BOARD_SIZE) {
            const ships = [];            
            let length = amount;

            // creates ships until we get to the desired amount
            while (ships.length < amount) {
                // tries again if the created ship isn't valid
                let newShip = false;

                while (newShip === false) {
                    const coords = this.getRandomCoords(1, boardsize);
                    const orientation = length % 2 === 0 ? "h" : "v";
                    newShip = this.placeShip(coords, length, orientation);
                }

                ships.push(newShip);
                length -= 1;
            }

            return ships;
        },
        receiveAttack: function(coords) {
            const index = this.returnIndex(coords);
            this.board[index].attacked = true;

            if (this.board[index].ship) {
                const ship = this.board[index].ship;
                ship.hit();
            }

            return this.board[index];
        },
        isGameOver: function() {
            for (let i = 0; i < this.board.length; i += 1) {
                if (this.board[i].ship) {
                    if (!this.board[i].ship.sunk) {
                        return false;
                    }
                }
            }
            
            return true;
        },
    }
}

// player token that allows the player to attack
const player = function() {
    return {
        attack: function(opponent, coords) {
            // make sure we don't attack the same place twice
            const index = opponent.returnIndex(coords);

            if (!opponent.board[index].attacked) {
                // returns opponent.board[index]
                return opponent.receiveAttack(coords);
            }
            
            return false;            
        },
        randomAttack: function(opponent) {
            let attack = false;

            while (attack === false) {
                // returns a list of coords for damaged ships
                const previousHits = opponent.getDamagedShips();
                let coords = false;
                
                if (previousHits[0]) {
                    function checkCourse(index) {
                        const options = []
                        options.push(1);
                        options.push(-1);
                        options.push(10);
                        options.push(-10);

                        // check if the ship we're targeting has been hit before
                        if (opponent.board[index].ship.hits.length < 1) {
                            // it hasn't, so we're going to attack somewhat randomly
                            for (let i = 0; i < options.length; i += 1) {
                                const newIndex = index + options[i];
                                if (!opponent.board[newIndex].attacked) {
                                    // the target spot hasn't been attacked yet
                                    console.log(opponent.board[newIndex].coords);
                                    return opponent.board[newIndex].coords;
                                }
                            }
                        } else {
                            // it has been hit before, so we can cheat
                            for (let i = 0; i < options.length; i += 1) {
                                let newIndex = index + options[i];
                                if (opponent.board[newIndex].ship) {
                                    // our target is a ship
                                    if (!opponent.board[newIndex].attacked) {
                                        // it hasn't been attacked
                                        return opponent.board[newIndex].coords;
                                    } else {
                                        // it has been attacked
                                        for (let j = 0; j < 100; j += 1) {
                                            // check if the previous attempt was a miss
                                            if (!opponent.board[newIndex].ship) {
                                                continue;
                                            }

                                            newIndex += options[i];
                                            // check if it exists
                                            if (opponent.board[newIndex]) {
                                                if (!opponent.board[newIndex].attacked) {
                                                    return opponent.board[newIndex].coords;
                                                } else {
                                                    // it doesnt, so we need to change direction
                                                    continue;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    const previousIndex = opponent.returnIndex(previousHits[0]); 
                    
                    // let's try attacking
                    coords = checkCourse(previousIndex);
                    attack = this.attack(opponent, coords);
                    
                } else {
                    attack = this.attack(opponent, opponent.getRandomCoords(1, BOARD_SIZE+1));
                }
            }
            return attack;
        }
    }
}
