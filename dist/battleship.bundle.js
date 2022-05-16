/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOARD_SIZE": () => (/* binding */ BOARD_SIZE),
/* harmony export */   "MAX_SHIP_SIZE": () => (/* binding */ MAX_SHIP_SIZE),
/* harmony export */   "gameboard": () => (/* binding */ gameboard),
/* harmony export */   "getRandomNumber": () => (/* binding */ getRandomNumber),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });


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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVzaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgc2hpcCwgZ2FtZWJvYXJkLCBwbGF5ZXIsIGdldFJhbmRvbU51bWJlciwgQk9BUkRfU0laRSwgTUFYX1NISVBfU0laRSB9O1xuXG5jb25zdCBCT0FSRF9TSVpFID0gMTA7XG5jb25zdCBNQVhfU0hJUF9TSVpFID0gNTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59XG5cbi8vIHNoaXBzIHRva2VuIGZvciB0aGUgZ2FtZSBib2FyZFxuY29uc3Qgc2hpcCA9IGZ1bmN0aW9uKGxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgaGl0czogW10sXG4gICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICBoaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzLnB1c2godHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmlzU3VuaygpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCBcbiAgICAgICAgaXNTdW5rOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhpdHMubGVuZ3RoID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIGdhbWVib2FyZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwbGF5ZXIncyBzaGlwc1xuY29uc3QgZ2FtZWJvYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQ6IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBCT0FSRF9TSVpFOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBCT0FSRF9TSVpFOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzOiBgJHtpfSwke2p9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pKCksXG4gICAgICAgIGdldERhbWFnZWRTaGlwczogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgdXNlZCB0byBoZWxwIHBsYXllci5yYW5kb21BdHRhY2soKSBrbm93IHdoZXJlIHRvIHN0cmlrZVxuICAgICAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLmJvYXJkO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgIGJvYXJkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmF0dGFja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uc2hpcC5zdW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbS5jb29yZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyQm9hcmQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBjbGVhcnMgdGhlIGJvYXJkIGZvciBhIG5ldyBnYW1lXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldLnNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldLmF0dGFja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldFJhbmRvbUNvb3JkczogZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICAgICAgICAgIC8vIGZvciBwbGF5ZXIuUmFuZG9tQXR0YWNrKCkgYW5kIGJvYXJkLnJhbmRvbWl6ZVNoaXBQbGFjZW1lbnQoKVxuICAgICAgICAgICAgcmV0dXJuIGAke2dldFJhbmRvbU51bWJlcihtaW4sIG1heCl9LCR7Z2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KX1gO1xuICAgICAgICB9LFxuICAgICAgICByZXR1cm5JbmRleDogZnVuY3Rpb24oY29vcmRzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXS5jb29yZHMgPT09IGNvb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlU2hpcDogZnVuY3Rpb24oY29vcmRzLCBsZW5ndGgsIGRpcmVjdGlvbj1cImhcIikge1xuICAgICAgICAgICAgY29uc3QgbmV3U2hpcCA9IHNoaXAobGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BsYWNlbWVudCA9IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBzcGxpdCB0aGUgY29vcmRzIHVwIHNvIHRoYXQgd2UgY2FuIG1vZGlmeSB0aGVtIGFuZCBhZGQgYWxsIHBhcnRzIG9mIHRoZSBzaGlwIHRvIHRoZSBib2FyZFxuICAgICAgICAgICAgY29uc3QgY29vcmRzQXJyYXkgPSBjb29yZHMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGxldCB2Q29vcmRzID0gcGFyc2VJbnQoY29vcmRzQXJyYXlbMF0pO1xuICAgICAgICAgICAgbGV0IGhDb29yZHMgPSBwYXJzZUludChjb29yZHNBcnJheVsxXSk7XG5cbiAgICAgICAgICAgIC8vIGF2b2lkIG92ZXJmbG93XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhcIikge1xuICAgICAgICAgICAgICAgIGlmIChoQ29vcmRzICsgbGVuZ3RoIC0gMSA+IEJPQVJEX1NJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaENvb3JkcylcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaENvb3JkcyArIGxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coQk9BUkRfU0laRSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh2Q29vcmRzICsgbGVuZ3RoIC0gMSA+IEJPQVJEX1NJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Ygd2FzIHRvbyBsb25nJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2tzIHRvIHNlZSBpZiB0aGUgYm9hcmQgY29vcmRzIHdlIHdhbnQgdG8gcGxhY2UgdGhlIHNoaXAgaW4gYXJlIGluIHVzZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmUgb3ZlciBvbmUgc3BhY2UgdG8gcGxhY2UgbW9yZSBvZiB0aGUgYm9keVxuICAgICAgICAgICAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoQ29vcmRzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2Q29vcmRzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZENvb3JkcyA9IGAke3ZDb29yZHN9LCR7aENvb3Jkc31gOyBcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmV0dXJuSW5kZXgoY29tYmluZWRDb29yZHMpO1xuXG4gICAgICAgICAgICAgICAgLy8gYWRkcyB0aGVtIHRvIGFuIGFycmF5IHRvIGJlIGFkZGVkIHRvIHRoZSBib2FyZCBpZiB0aGUgc3BvdCBpcyBmcmVlXG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRTbG90ID0gdGhpcy5ib2FyZFtpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKCFib2FyZFNsb3Quc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQucHVzaChib2FyZFNsb3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdib2FyZCBzbG90IHdhcyB0YWtlbicpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNhZmVseSBwbGFjZXMgc2hpcHMgb24gdGhlIGdyaWRcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3UGxhY2VtZW50Lmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgbmV3UGxhY2VtZW50W2pdLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3UGxhY2VtZW50O1xuICAgICAgICB9LFxuICAgICAgICByYW5kb21pemVTaGlwUGxhY2VtZW50KGFtb3VudD1NQVhfU0hJUF9TSVpFLCBib2FyZHNpemU9Qk9BUkRfU0laRSkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcHMgPSBbXTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbW91bnQ7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZXMgc2hpcHMgdW50aWwgd2UgZ2V0IHRvIHRoZSBkZXNpcmVkIGFtb3VudFxuICAgICAgICAgICAgd2hpbGUgKHNoaXBzLmxlbmd0aCA8IGFtb3VudCkge1xuICAgICAgICAgICAgICAgIC8vIHRyaWVzIGFnYWluIGlmIHRoZSBjcmVhdGVkIHNoaXAgaXNuJ3QgdmFsaWRcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2hpcCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5ld1NoaXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMuZ2V0UmFuZG9tQ29vcmRzKDEsIGJvYXJkc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gbGVuZ3RoICUgMiA9PT0gMCA/IFwiaFwiIDogXCJ2XCI7XG4gICAgICAgICAgICAgICAgICAgIG5ld1NoaXAgPSB0aGlzLnBsYWNlU2hpcChjb29yZHMsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgICAgICAgICAgbGVuZ3RoIC09IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzaGlwcztcbiAgICAgICAgfSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjazogZnVuY3Rpb24oY29vcmRzKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmV0dXJuSW5kZXgoY29vcmRzKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLmF0dGFja2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaW5kZXhdLnNoaXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5ib2FyZFtpbmRleF0uc2hpcDtcbiAgICAgICAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtpbmRleF07XG4gICAgICAgIH0sXG4gICAgICAgIGlzR2FtZU92ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV0uc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYm9hcmRbaV0uc2hpcC5zdW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuLy8gcGxheWVyIHRva2VuIHRoYXQgYWxsb3dzIHRoZSBwbGF5ZXIgdG8gYXR0YWNrXG5jb25zdCBwbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhdHRhY2s6IGZ1bmN0aW9uKG9wcG9uZW50LCBjb29yZHMpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBhdHRhY2sgdGhlIHNhbWUgcGxhY2UgdHdpY2VcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gb3Bwb25lbnQucmV0dXJuSW5kZXgoY29vcmRzKTtcblxuICAgICAgICAgICAgaWYgKCFvcHBvbmVudC5ib2FyZFtpbmRleF0uYXR0YWNrZWQpIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5zIG9wcG9uZW50LmJvYXJkW2luZGV4XVxuICAgICAgICAgICAgICAgIHJldHVybiBvcHBvbmVudC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgcmFuZG9tQXR0YWNrOiBmdW5jdGlvbihvcHBvbmVudCkge1xuICAgICAgICAgICAgbGV0IGF0dGFjayA9IGZhbHNlO1xuXG4gICAgICAgICAgICB3aGlsZSAoYXR0YWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybnMgYSBsaXN0IG9mIGNvb3JkcyBmb3IgZGFtYWdlZCBzaGlwc1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzSGl0cyA9IG9wcG9uZW50LmdldERhbWFnZWRTaGlwcygpO1xuICAgICAgICAgICAgICAgIGxldCBjb29yZHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNIaXRzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrQ291cnNlKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCgtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKC0xMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBzaGlwIHdlJ3JlIHRhcmdldGluZyBoYXMgYmVlbiBoaXQgYmVmb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmRbaW5kZXhdLnNoaXAuaGl0cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgaGFzbid0LCBzbyB3ZSdyZSBnb2luZyB0byBhdHRhY2sgc29tZXdoYXQgcmFuZG9tbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBpbmRleCArIG9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLmF0dGFja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdGFyZ2V0IHNwb3QgaGFzbid0IGJlZW4gYXR0YWNrZWQgeWV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uY29vcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uY29vcmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCBoYXMgYmVlbiBoaXQgYmVmb3JlLCBzbyB3ZSBjYW4gY2hlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0luZGV4ID0gaW5kZXggKyBvcHRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG91ciB0YXJnZXQgaXMgYSBzaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5hdHRhY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0IGhhc24ndCBiZWVuIGF0dGFja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5jb29yZHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0IGhhcyBiZWVuIGF0dGFja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDA7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgcHJldmlvdXMgYXR0ZW1wdCB3YXMgYSBtaXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggKz0gb3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLmF0dGFja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5jb29yZHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0IGRvZXNudCwgc28gd2UgbmVlZCB0byBjaGFuZ2UgZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0luZGV4ID0gb3Bwb25lbnQucmV0dXJuSW5kZXgocHJldmlvdXNIaXRzWzBdKTsgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQncyB0cnkgYXR0YWNraW5nXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkcyA9IGNoZWNrQ291cnNlKHByZXZpb3VzSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2sgPSB0aGlzLmF0dGFjayhvcHBvbmVudCwgY29vcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrID0gdGhpcy5hdHRhY2sob3Bwb25lbnQsIG9wcG9uZW50LmdldFJhbmRvbUNvb3JkcygxLCBCT0FSRF9TSVpFKzEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9