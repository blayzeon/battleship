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
        getRandomCoords(min, max) {
            return `${getRandomNumber(min, max)},${getRandomNumber(min, max)}`;
        },
        returnIndex(coords) {
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
            const coords = opponent.getRandomCoords(1, BOARD_SIZE);
            let attack = false;
            while (attack === false) {
                attack = this.attack(opponent, coords);
            }

            return attack;
        }
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGxlc2hpcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmdFOztBQUVoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0MsZ0NBQWdDLGlCQUFpQjtBQUNqRDtBQUNBLG1DQUFtQyxFQUFFLEdBQUcsRUFBRTtBQUMxQztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHNCQUFzQiwwQkFBMEIsR0FBRywwQkFBMEI7QUFDN0UsU0FBUztBQUNUO0FBQ0EsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxRQUFRLEdBQUcsUUFBUTtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYmF0dGxlc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7IHNoaXAsIGdhbWVib2FyZCwgcGxheWVyLCBnZXRSYW5kb21OdW1iZXIsIEJPQVJEX1NJWkUgfTtcblxuY29uc3QgQk9BUkRfU0laRSA9IDEwO1xuY29uc3QgTUFYX1NISVBfU0laRSA9IDU7XG5cbmZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihtaW4sIG1heCkge1xuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG4vLyBzaGlwcyB0b2tlbiBmb3IgdGhlIGdhbWUgYm9hcmRcbmNvbnN0IHNoaXAgPSBmdW5jdGlvbihsZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGhpdHM6IFtdLFxuICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgaGl0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaGl0cy5wdXNoKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5pc1N1bmsoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwgXG4gICAgICAgIGlzU3VuazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oaXRzLmxlbmd0aCA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBnYW1lYm9hcmQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcGxheWVyJ3Mgc2hpcHNcbmNvbnN0IGdhbWVib2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkOiAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gQk9BUkRfU0laRTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gQk9BUkRfU0laRTsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkczogYCR7aX0sJHtqfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja2VkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSgpLFxuICAgICAgICBnZXRSYW5kb21Db29yZHMobWluLCBtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtnZXRSYW5kb21OdW1iZXIobWluLCBtYXgpfSwke2dldFJhbmRvbU51bWJlcihtaW4sIG1heCl9YDtcbiAgICAgICAgfSxcbiAgICAgICAgcmV0dXJuSW5kZXgoY29vcmRzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXS5jb29yZHMgPT09IGNvb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlU2hpcDogZnVuY3Rpb24oY29vcmRzLCBsZW5ndGgsIGRpcmVjdGlvbj1cImhcIikge1xuICAgICAgICAgICAgY29uc3QgbmV3U2hpcCA9IHNoaXAobGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BsYWNlbWVudCA9IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBzcGxpdCB0aGUgY29vcmRzIHVwIHNvIHRoYXQgd2UgY2FuIG1vZGlmeSB0aGVtIGFuZCBhZGQgYWxsIHBhcnRzIG9mIHRoZSBzaGlwIHRvIHRoZSBib2FyZFxuICAgICAgICAgICAgY29uc3QgY29vcmRzQXJyYXkgPSBjb29yZHMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGxldCB2Q29vcmRzID0gcGFyc2VJbnQoY29vcmRzQXJyYXlbMF0pO1xuICAgICAgICAgICAgbGV0IGhDb29yZHMgPSBwYXJzZUludChjb29yZHNBcnJheVsxXSk7XG5cbiAgICAgICAgICAgIC8vIGF2b2lkIG92ZXJmbG93XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhcIikge1xuICAgICAgICAgICAgICAgIGlmIChoQ29vcmRzICsgbGVuZ3RoID4gQk9BUkRfU0laRSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wU2l6ZSA9IEJPQVJEX1NJWkUgJSAyID09PSAwID8gQk9BUkRfU0laRSA6IEJPQVJEX1NJWkUgLSAxO1xuICAgICAgICAgICAgICAgICAgICBoQ29vcmRzID0gdGVtcFNpemUgLyAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZDb29yZHMgKyBsZW5ndGggPiBCT0FSRF9TSVpFKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBTaXplID0gQk9BUkRfU0laRSAlIDIgPT09IDAgPyBCT0FSRF9TSVpFIDogQk9BUkRfU0laRSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHZDb29yZHMgPSB0ZW1wU2l6ZSAvIDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVja3MgdG8gc2VlIGlmIHRoZSBib2FyZCBjb29yZHMgd2Ugd2FudCB0byBwbGFjZSB0aGUgc2hpcCBpbiBhcmUgaW4gdXNlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92ZSBvdmVyIG9uZSBzcGFjZSB0byBwbGFjZSBtb3JlIG9mIHRoZSBib2R5XG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhDb29yZHMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZDb29yZHMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkQ29vcmRzID0gYCR7dkNvb3Jkc30sJHtoQ29vcmRzfWA7IFxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZXR1cm5JbmRleChjb21iaW5lZENvb3Jkcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGRzIHRoZW0gdG8gYW4gYXJyYXkgdG8gYmUgYWRkZWQgdG8gdGhlIGJvYXJkIGlmIHRoZSBzcG90IGlzIGZyZWVcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZFNsb3QgPSB0aGlzLmJvYXJkW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoIWJvYXJkU2xvdC5zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BsYWNlbWVudC5wdXNoKGJvYXJkU2xvdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2FmZWx5IHBsYWNlcyBzaGlwcyBvbiB0aGUgZ3JpZFxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdQbGFjZW1lbnQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBuZXdQbGFjZW1lbnRbal0uc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdQbGFjZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHJhbmRvbWl6ZVNoaXBQbGFjZW1lbnQoYW1vdW50PU1BWF9TSElQX1NJWkUsIGJvYXJkc2l6ZT1CT0FSRF9TSVpFKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwcyA9IFtdOyAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IGFtb3VudDtcblxuICAgICAgICAgICAgLy8gY3JlYXRlcyBzaGlwcyB1bnRpbCB3ZSBnZXQgdG8gdGhlIGRlc2lyZWQgYW1vdW50XG4gICAgICAgICAgICB3aGlsZSAoc2hpcHMubGVuZ3RoIDwgYW1vdW50KSB7XG4gICAgICAgICAgICAgICAgLy8gdHJpZXMgYWdhaW4gaWYgdGhlIGNyZWF0ZWQgc2hpcCBpc24ndCB2YWxpZFxuICAgICAgICAgICAgICAgIGxldCBuZXdTaGlwID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3U2hpcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5nZXRSYW5kb21Db29yZHMoMSwgYm9hcmRzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBsZW5ndGggJSAyID09PSAwID8gXCJoXCIgOiBcInZcIjtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hpcCA9IHRoaXMucGxhY2VTaGlwKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgICAgICBsZW5ndGggLT0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgICAgICB9LFxuICAgICAgICByZWNlaXZlQXR0YWNrOiBmdW5jdGlvbihjb29yZHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZXR1cm5JbmRleChjb29yZHMpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0uYXR0YWNrZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpbmRleF0uc2hpcCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLmJvYXJkW2luZGV4XS5zaGlwO1xuICAgICAgICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2luZGV4XTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNHYW1lT3ZlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXS5zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtpXS5zaGlwLnN1bmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG4vLyBwbGF5ZXIgdG9rZW4gdGhhdCBhbGxvd3MgdGhlIHBsYXllciB0byBhdHRhY2tcbmNvbnN0IHBsYXllciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF0dGFjazogZnVuY3Rpb24ob3Bwb25lbnQsIGNvb3Jkcykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IGF0dGFjayB0aGUgc2FtZSBwbGFjZSB0d2ljZVxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBvcHBvbmVudC5yZXR1cm5JbmRleChjb29yZHMpO1xuXG4gICAgICAgICAgICBpZiAoIW9wcG9uZW50LmJvYXJkW2luZGV4XS5hdHRhY2tlZCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybnMgb3Bwb25lbnQuYm9hcmRbaW5kZXhdXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wcG9uZW50LnJlY2VpdmVBdHRhY2soY29vcmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICByYW5kb21BdHRhY2s6IGZ1bmN0aW9uKG9wcG9uZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBvcHBvbmVudC5nZXRSYW5kb21Db29yZHMoMSwgQk9BUkRfU0laRSk7XG4gICAgICAgICAgICBsZXQgYXR0YWNrID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoYXR0YWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGF0dGFjayA9IHRoaXMuYXR0YWNrKG9wcG9uZW50LCBjb29yZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==