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
                    return false;
                }
            } else {
                if (vCoords + length - 1 > BOARD_SIZE) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JhdHRsZXNoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgeyBzaGlwLCBnYW1lYm9hcmQsIHBsYXllciwgZ2V0UmFuZG9tTnVtYmVyLCBCT0FSRF9TSVpFLCBNQVhfU0hJUF9TSVpFIH07XG5cbmNvbnN0IEJPQVJEX1NJWkUgPSAxMDtcbmNvbnN0IE1BWF9TSElQX1NJWkUgPSA1O1xuXG5mdW5jdGlvbiBnZXRSYW5kb21OdW1iZXIobWluLCBtYXgpIHtcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbn1cblxuLy8gc2hpcHMgdG9rZW4gZm9yIHRoZSBnYW1lIGJvYXJkXG5jb25zdCBzaGlwID0gZnVuY3Rpb24obGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBoaXRzOiBbXSxcbiAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgIGhpdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMucHVzaCh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaXNTdW5rKCk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIFxuICAgICAgICBpc1N1bms6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGl0cy5sZW5ndGggPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gZ2FtZWJvYXJkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBsYXllcidzIHNoaXBzXG5jb25zdCBnYW1lYm9hcmQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZDogKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IEJPQVJEX1NJWkU7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IEJPQVJEX1NJWkU7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZHM6IGAke2l9LCR7an1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSkoKSxcbiAgICAgICAgZ2V0RGFtYWdlZFNoaXBzOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gdGhpcyBpcyB1c2VkIHRvIGhlbHAgcGxheWVyLnJhbmRvbUF0dGFjaygpIGtub3cgd2hlcmUgdG8gc3RyaWtlXG4gICAgICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuYm9hcmQ7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgYm9hcmQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYXR0YWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXRlbS5zaGlwLnN1bmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtLmNvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJCb2FyZDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIGNsZWFycyB0aGUgYm9hcmQgZm9yIGEgbmV3IGdhbWVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0uc2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0uYXR0YWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmFuZG9tQ29vcmRzOiBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgICAgICAgICAgLy8gZm9yIHBsYXllci5SYW5kb21BdHRhY2soKSBhbmQgYm9hcmQucmFuZG9taXplU2hpcFBsYWNlbWVudCgpXG4gICAgICAgICAgICByZXR1cm4gYCR7Z2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KX0sJHtnZXRSYW5kb21OdW1iZXIobWluLCBtYXgpfWA7XG4gICAgICAgIH0sXG4gICAgICAgIHJldHVybkluZGV4OiBmdW5jdGlvbihjb29yZHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldLmNvb3JkcyA9PT0gY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2VTaGlwOiBmdW5jdGlvbihjb29yZHMsIGxlbmd0aCwgZGlyZWN0aW9uPVwiaFwiKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTaGlwID0gc2hpcChsZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgbmV3UGxhY2VtZW50ID0gW107XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHNwbGl0IHRoZSBjb29yZHMgdXAgc28gdGhhdCB3ZSBjYW4gbW9kaWZ5IHRoZW0gYW5kIGFkZCBhbGwgcGFydHMgb2YgdGhlIHNoaXAgdG8gdGhlIGJvYXJkXG4gICAgICAgICAgICBjb25zdCBjb29yZHNBcnJheSA9IGNvb3Jkcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IHZDb29yZHMgPSBwYXJzZUludChjb29yZHNBcnJheVswXSk7XG4gICAgICAgICAgICBsZXQgaENvb3JkcyA9IHBhcnNlSW50KGNvb3Jkc0FycmF5WzFdKTtcblxuICAgICAgICAgICAgLy8gYXZvaWQgb3ZlcmZsb3dcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhDb29yZHMgKyBsZW5ndGggLSAxID4gQk9BUkRfU0laRSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodkNvb3JkcyArIGxlbmd0aCAtIDEgPiBCT0FSRF9TSVpFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrcyB0byBzZWUgaWYgdGhlIGJvYXJkIGNvb3JkcyB3ZSB3YW50IHRvIHBsYWNlIHRoZSBzaGlwIGluIGFyZSBpbiB1c2VcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBtb3ZlIG92ZXIgb25lIHNwYWNlIHRvIHBsYWNlIG1vcmUgb2YgdGhlIGJvZHlcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaENvb3JkcyArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdkNvb3JkcyArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWRDb29yZHMgPSBgJHt2Q29vcmRzfSwke2hDb29yZHN9YDsgXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnJldHVybkluZGV4KGNvbWJpbmVkQ29vcmRzKTtcblxuICAgICAgICAgICAgICAgIC8vIGFkZHMgdGhlbSB0byBhbiBhcnJheSB0byBiZSBhZGRlZCB0byB0aGUgYm9hcmQgaWYgdGhlIHNwb3QgaXMgZnJlZVxuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkU2xvdCA9IHRoaXMuYm9hcmRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmICghYm9hcmRTbG90LnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UGxhY2VtZW50LnB1c2goYm9hcmRTbG90KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzYWZlbHkgcGxhY2VzIHNoaXBzIG9uIHRoZSBncmlkXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld1BsYWNlbWVudC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIG5ld1BsYWNlbWVudFtqXS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ld1BsYWNlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgcmFuZG9taXplU2hpcFBsYWNlbWVudChhbW91bnQ9TUFYX1NISVBfU0laRSwgYm9hcmRzaXplPUJPQVJEX1NJWkUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBzID0gW107ICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gYW1vdW50O1xuXG4gICAgICAgICAgICAvLyBjcmVhdGVzIHNoaXBzIHVudGlsIHdlIGdldCB0byB0aGUgZGVzaXJlZCBhbW91bnRcbiAgICAgICAgICAgIHdoaWxlIChzaGlwcy5sZW5ndGggPCBhbW91bnQpIHtcbiAgICAgICAgICAgICAgICAvLyB0cmllcyBhZ2FpbiBpZiB0aGUgY3JlYXRlZCBzaGlwIGlzbid0IHZhbGlkXG4gICAgICAgICAgICAgICAgbGV0IG5ld1NoaXAgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChuZXdTaGlwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZHMgPSB0aGlzLmdldFJhbmRvbUNvb3JkcygxLCBib2FyZHNpemUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IGxlbmd0aCAlIDIgPT09IDAgPyBcImhcIiA6IFwidlwiO1xuICAgICAgICAgICAgICAgICAgICBuZXdTaGlwID0gdGhpcy5wbGFjZVNoaXAoY29vcmRzLCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICAgICAgICAgIGxlbmd0aCAtPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2s6IGZ1bmN0aW9uKGNvb3Jkcykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnJldHVybkluZGV4KGNvb3Jkcyk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4XS5hdHRhY2tlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2luZGV4XS5zaGlwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuYm9hcmRbaW5kZXhdLnNoaXA7XG4gICAgICAgICAgICAgICAgc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbaW5kZXhdO1xuICAgICAgICB9LFxuICAgICAgICBpc0dhbWVPdmVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldLnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJvYXJkW2ldLnNoaXAuc3Vuaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbi8vIHBsYXllciB0b2tlbiB0aGF0IGFsbG93cyB0aGUgcGxheWVyIHRvIGF0dGFja1xuY29uc3QgcGxheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXR0YWNrOiBmdW5jdGlvbihvcHBvbmVudCwgY29vcmRzKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgd2UgZG9uJ3QgYXR0YWNrIHRoZSBzYW1lIHBsYWNlIHR3aWNlXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IG9wcG9uZW50LnJldHVybkluZGV4KGNvb3Jkcyk7XG5cbiAgICAgICAgICAgIGlmICghb3Bwb25lbnQuYm9hcmRbaW5kZXhdLmF0dGFja2VkKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJucyBvcHBvbmVudC5ib2FyZFtpbmRleF1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3Bwb25lbnQucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHJhbmRvbUF0dGFjazogZnVuY3Rpb24ob3Bwb25lbnQpIHtcbiAgICAgICAgICAgIGxldCBhdHRhY2sgPSBmYWxzZTtcblxuICAgICAgICAgICAgd2hpbGUgKGF0dGFjayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5zIGEgbGlzdCBvZiBjb29yZHMgZm9yIGRhbWFnZWQgc2hpcHNcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0hpdHMgPSBvcHBvbmVudC5nZXREYW1hZ2VkU2hpcHMoKTtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzSGl0c1swXSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja0NvdXJzZShpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCgtMTApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgc2hpcCB3ZSdyZSB0YXJnZXRpbmcgaGFzIGJlZW4gaGl0IGJlZm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkW2luZGV4XS5zaGlwLmhpdHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0IGhhc24ndCwgc28gd2UncmUgZ29pbmcgdG8gYXR0YWNrIHNvbWV3aGF0IHJhbmRvbWx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXggKyBvcHRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5hdHRhY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHRhcmdldCBzcG90IGhhc24ndCBiZWVuIGF0dGFja2VkIHlldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLmNvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLmNvb3JkcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgaGFzIGJlZW4gaGl0IGJlZm9yZSwgc28gd2UgY2FuIGNoZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdJbmRleCA9IGluZGV4ICsgb3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvdXIgdGFyZ2V0IGlzIGEgc2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uYXR0YWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCBoYXNuJ3QgYmVlbiBhdHRhY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uY29vcmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCBoYXMgYmVlbiBhdHRhY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTAwOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHByZXZpb3VzIGF0dGVtcHQgd2FzIGEgbWlzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ICs9IG9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5hdHRhY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uY29vcmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCBkb2VzbnQsIHNvIHdlIG5lZWQgdG8gY2hhbmdlIGRpcmVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNJbmRleCA9IG9wcG9uZW50LnJldHVybkluZGV4KHByZXZpb3VzSGl0c1swXSk7IFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgdHJ5IGF0dGFja2luZ1xuICAgICAgICAgICAgICAgICAgICBjb29yZHMgPSBjaGVja0NvdXJzZShwcmV2aW91c0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrID0gdGhpcy5hdHRhY2sob3Bwb25lbnQsIGNvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjayA9IHRoaXMuYXR0YWNrKG9wcG9uZW50LCBvcHBvbmVudC5nZXRSYW5kb21Db29yZHMoMSwgQk9BUkRfU0laRSsxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGF0dGFjaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==