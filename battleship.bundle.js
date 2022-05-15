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
                if (hCoords + length > BOARD_SIZE) {
                    const tempSize = BOARD_SIZE % 2 === 0 ? BOARD_SIZE : BOARD_SIZE - 1;
                    hCoords = tempSize / 2;
                }
            } else {
                if (vCoords + length > BOARD_SIZE) {
                    const tempSize = BOARD_SIZE % 2 === 0 ? BOARD_SIZE : BOARD_SIZE - 1;
                    vCoords = tempSize / 2;
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

/*
            randomAttack: function(opponent) {
            let attack = false;
            const previousHits = opponent.getDamagedShips();

            let mod = 1;
            while (attack === false) {
                // attack based on previous attacks
                if (previousHits[0]) {
                    console.log(`the previous target was ${previousHits[0]}`);
                    const currentIndex = opponent.returnIndex(previousHits[0]);
                    const targetIndex = currentIndex + mod;
                    const targetCoords = opponent.board[targetIndex].coords;
                    console.log(`the current target is ${targetCoords}`)
                    attack = this.attack(opponent, targetCoords);
                } else {
                    // completely random attack
                    attack = this.attack(opponent, opponent.getRandomCoords(1, BOARD_SIZE+1));
                    console.log(attack);
                }
            }

            return attack;
        }

*/
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsZ0JBQWdCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxhQUFhO0FBQ3RFO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYmF0dGxlc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7IHNoaXAsIGdhbWVib2FyZCwgcGxheWVyLCBnZXRSYW5kb21OdW1iZXIsIEJPQVJEX1NJWkUsIE1BWF9TSElQX1NJWkUgfTtcblxuY29uc3QgQk9BUkRfU0laRSA9IDEwO1xuY29uc3QgTUFYX1NISVBfU0laRSA9IDU7XG5cbmZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihtaW4sIG1heCkge1xuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG4vLyBzaGlwcyB0b2tlbiBmb3IgdGhlIGdhbWUgYm9hcmRcbmNvbnN0IHNoaXAgPSBmdW5jdGlvbihsZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGhpdHM6IFtdLFxuICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgaGl0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaGl0cy5wdXNoKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5pc1N1bmsoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwgXG4gICAgICAgIGlzU3VuazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oaXRzLmxlbmd0aCA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBnYW1lYm9hcmQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcGxheWVyJ3Mgc2hpcHNcbmNvbnN0IGdhbWVib2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkOiAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gQk9BUkRfU0laRTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gQk9BUkRfU0laRTsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkczogYCR7aX0sJHtqfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja2VkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSgpLFxuICAgICAgICBnZXREYW1hZ2VkU2hpcHM6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIHVzZWQgdG8gaGVscCBwbGF5ZXIucmFuZG9tQXR0YWNrKCkga25vdyB3aGVyZSB0byBzdHJpa2VcbiAgICAgICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5ib2FyZDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgICAgICBib2FyZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5hdHRhY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtLnNoaXAuc3Vuaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0uY29vcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBjbGVhckJvYXJkOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gY2xlYXJzIHRoZSBib2FyZCBmb3IgYSBuZXcgZ2FtZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXS5zaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXS5hdHRhY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRSYW5kb21Db29yZHM6IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgICAgICAgICAvLyBmb3IgcGxheWVyLlJhbmRvbUF0dGFjaygpIGFuZCBib2FyZC5yYW5kb21pemVTaGlwUGxhY2VtZW50KClcbiAgICAgICAgICAgIHJldHVybiBgJHtnZXRSYW5kb21OdW1iZXIobWluLCBtYXgpfSwke2dldFJhbmRvbU51bWJlcihtaW4sIG1heCl9YDtcbiAgICAgICAgfSxcbiAgICAgICAgcmV0dXJuSW5kZXg6IGZ1bmN0aW9uKGNvb3Jkcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV0uY29vcmRzID09PSBjb29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwbGFjZVNoaXA6IGZ1bmN0aW9uKGNvb3JkcywgbGVuZ3RoLCBkaXJlY3Rpb249XCJoXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoaXAgPSBzaGlwKGxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBuZXdQbGFjZW1lbnQgPSBbXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gc3BsaXQgdGhlIGNvb3JkcyB1cCBzbyB0aGF0IHdlIGNhbiBtb2RpZnkgdGhlbSBhbmQgYWRkIGFsbCBwYXJ0cyBvZiB0aGUgc2hpcCB0byB0aGUgYm9hcmRcbiAgICAgICAgICAgIGNvbnN0IGNvb3Jkc0FycmF5ID0gY29vcmRzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBsZXQgdkNvb3JkcyA9IHBhcnNlSW50KGNvb3Jkc0FycmF5WzBdKTtcbiAgICAgICAgICAgIGxldCBoQ29vcmRzID0gcGFyc2VJbnQoY29vcmRzQXJyYXlbMV0pO1xuXG4gICAgICAgICAgICAvLyBhdm9pZCBvdmVyZmxvd1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaENvb3JkcyArIGxlbmd0aCA+IEJPQVJEX1NJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcFNpemUgPSBCT0FSRF9TSVpFICUgMiA9PT0gMCA/IEJPQVJEX1NJWkUgOiBCT0FSRF9TSVpFIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgaENvb3JkcyA9IHRlbXBTaXplIC8gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh2Q29vcmRzICsgbGVuZ3RoID4gQk9BUkRfU0laRSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wU2l6ZSA9IEJPQVJEX1NJWkUgJSAyID09PSAwID8gQk9BUkRfU0laRSA6IEJPQVJEX1NJWkUgLSAxO1xuICAgICAgICAgICAgICAgICAgICB2Q29vcmRzID0gdGVtcFNpemUgLyAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2tzIHRvIHNlZSBpZiB0aGUgYm9hcmQgY29vcmRzIHdlIHdhbnQgdG8gcGxhY2UgdGhlIHNoaXAgaW4gYXJlIGluIHVzZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmUgb3ZlciBvbmUgc3BhY2UgdG8gcGxhY2UgbW9yZSBvZiB0aGUgYm9keVxuICAgICAgICAgICAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoQ29vcmRzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2Q29vcmRzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZENvb3JkcyA9IGAke3ZDb29yZHN9LCR7aENvb3Jkc31gOyBcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmV0dXJuSW5kZXgoY29tYmluZWRDb29yZHMpO1xuXG4gICAgICAgICAgICAgICAgLy8gYWRkcyB0aGVtIHRvIGFuIGFycmF5IHRvIGJlIGFkZGVkIHRvIHRoZSBib2FyZCBpZiB0aGUgc3BvdCBpcyBmcmVlXG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRTbG90ID0gdGhpcy5ib2FyZFtpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKCFib2FyZFNsb3Quc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQucHVzaChib2FyZFNsb3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNhZmVseSBwbGFjZXMgc2hpcHMgb24gdGhlIGdyaWRcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3UGxhY2VtZW50Lmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgbmV3UGxhY2VtZW50W2pdLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3UGxhY2VtZW50O1xuICAgICAgICB9LFxuICAgICAgICByYW5kb21pemVTaGlwUGxhY2VtZW50KGFtb3VudD1NQVhfU0hJUF9TSVpFLCBib2FyZHNpemU9Qk9BUkRfU0laRSkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcHMgPSBbXTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbW91bnQ7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZXMgc2hpcHMgdW50aWwgd2UgZ2V0IHRvIHRoZSBkZXNpcmVkIGFtb3VudFxuICAgICAgICAgICAgd2hpbGUgKHNoaXBzLmxlbmd0aCA8IGFtb3VudCkge1xuICAgICAgICAgICAgICAgIC8vIHRyaWVzIGFnYWluIGlmIHRoZSBjcmVhdGVkIHNoaXAgaXNuJ3QgdmFsaWRcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2hpcCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5ld1NoaXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMuZ2V0UmFuZG9tQ29vcmRzKDEsIGJvYXJkc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gbGVuZ3RoICUgMiA9PT0gMCA/IFwiaFwiIDogXCJ2XCI7XG4gICAgICAgICAgICAgICAgICAgIG5ld1NoaXAgPSB0aGlzLnBsYWNlU2hpcChjb29yZHMsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgICAgICAgICAgbGVuZ3RoIC09IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzaGlwcztcbiAgICAgICAgfSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjazogZnVuY3Rpb24oY29vcmRzKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmV0dXJuSW5kZXgoY29vcmRzKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLmF0dGFja2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaW5kZXhdLnNoaXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5ib2FyZFtpbmRleF0uc2hpcDtcbiAgICAgICAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtpbmRleF07XG4gICAgICAgIH0sXG4gICAgICAgIGlzR2FtZU92ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV0uc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYm9hcmRbaV0uc2hpcC5zdW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuLy8gcGxheWVyIHRva2VuIHRoYXQgYWxsb3dzIHRoZSBwbGF5ZXIgdG8gYXR0YWNrXG5jb25zdCBwbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhdHRhY2s6IGZ1bmN0aW9uKG9wcG9uZW50LCBjb29yZHMpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBhdHRhY2sgdGhlIHNhbWUgcGxhY2UgdHdpY2VcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gb3Bwb25lbnQucmV0dXJuSW5kZXgoY29vcmRzKTtcblxuICAgICAgICAgICAgaWYgKCFvcHBvbmVudC5ib2FyZFtpbmRleF0uYXR0YWNrZWQpIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5zIG9wcG9uZW50LmJvYXJkW2luZGV4XVxuICAgICAgICAgICAgICAgIHJldHVybiBvcHBvbmVudC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgcmFuZG9tQXR0YWNrOiBmdW5jdGlvbihvcHBvbmVudCkge1xuICAgICAgICAgICAgbGV0IGF0dGFjayA9IGZhbHNlO1xuXG4gICAgICAgICAgICB3aGlsZSAoYXR0YWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybnMgYSBsaXN0IG9mIGNvb3JkcyBmb3IgZGFtYWdlZCBzaGlwc1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzSGl0cyA9IG9wcG9uZW50LmdldERhbWFnZWRTaGlwcygpO1xuICAgICAgICAgICAgICAgIGxldCBjb29yZHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNIaXRzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrQ291cnNlKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCgtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKC0xMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBzaGlwIHdlJ3JlIHRhcmdldGluZyBoYXMgYmVlbiBoaXQgYmVmb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmRbaW5kZXhdLnNoaXAuaGl0cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgaGFzbid0LCBzbyB3ZSdyZSBnb2luZyB0byBhdHRhY2sgc29tZXdoYXQgcmFuZG9tbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBpbmRleCArIG9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLmF0dGFja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdGFyZ2V0IHNwb3QgaGFzbid0IGJlZW4gYXR0YWNrZWQgeWV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uY29vcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uY29vcmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCBoYXMgYmVlbiBoaXQgYmVmb3JlLCBzbyB3ZSBjYW4gY2hlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0luZGV4ID0gaW5kZXggKyBvcHRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG91ciB0YXJnZXQgaXMgYSBzaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5hdHRhY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0IGhhc24ndCBiZWVuIGF0dGFja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5jb29yZHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0IGhhcyBiZWVuIGF0dGFja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDA7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgcHJldmlvdXMgYXR0ZW1wdCB3YXMgYSBtaXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggKz0gb3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLmF0dGFja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5jb29yZHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0IGRvZXNudCwgc28gd2UgbmVlZCB0byBjaGFuZ2UgZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0luZGV4ID0gb3Bwb25lbnQucmV0dXJuSW5kZXgocHJldmlvdXNIaXRzWzBdKTsgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQncyB0cnkgYXR0YWNraW5nXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkcyA9IGNoZWNrQ291cnNlKHByZXZpb3VzSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2sgPSB0aGlzLmF0dGFjayhvcHBvbmVudCwgY29vcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrID0gdGhpcy5hdHRhY2sob3Bwb25lbnQsIG9wcG9uZW50LmdldFJhbmRvbUNvb3JkcygxLCBCT0FSRF9TSVpFKzEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuICAgICAgICAgICAgcmFuZG9tQXR0YWNrOiBmdW5jdGlvbihvcHBvbmVudCkge1xuICAgICAgICAgICAgbGV0IGF0dGFjayA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNIaXRzID0gb3Bwb25lbnQuZ2V0RGFtYWdlZFNoaXBzKCk7XG5cbiAgICAgICAgICAgIGxldCBtb2QgPSAxO1xuICAgICAgICAgICAgd2hpbGUgKGF0dGFjayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBhdHRhY2sgYmFzZWQgb24gcHJldmlvdXMgYXR0YWNrc1xuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c0hpdHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHRoZSBwcmV2aW91cyB0YXJnZXQgd2FzICR7cHJldmlvdXNIaXRzWzBdfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBvcHBvbmVudC5yZXR1cm5JbmRleChwcmV2aW91c0hpdHNbMF0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IGN1cnJlbnRJbmRleCArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Q29vcmRzID0gb3Bwb25lbnQuYm9hcmRbdGFyZ2V0SW5kZXhdLmNvb3JkcztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHRoZSBjdXJyZW50IHRhcmdldCBpcyAke3RhcmdldENvb3Jkc31gKVxuICAgICAgICAgICAgICAgICAgICBhdHRhY2sgPSB0aGlzLmF0dGFjayhvcHBvbmVudCwgdGFyZ2V0Q29vcmRzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb21wbGV0ZWx5IHJhbmRvbSBhdHRhY2tcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrID0gdGhpcy5hdHRhY2sob3Bwb25lbnQsIG9wcG9uZW50LmdldFJhbmRvbUNvb3JkcygxLCBCT0FSRF9TSVpFKzEpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXR0YWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhdHRhY2s7XG4gICAgICAgIH1cblxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=