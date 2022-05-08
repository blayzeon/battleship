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
        clearBoard(){
            for (let i = 0; i < this.board.length; i += 1) {
                this.board[i].ship = false;
                this.board[i].attacked = false;
            }
        },
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
            let attack = false;
            while (attack === false) {
                attack = this.attack(opponent, opponent.getRandomCoords(1, BOARD_SIZE+1));
            }

            return attack;
        }
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGxlc2hpcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ04rRTs7QUFFL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQSxtQ0FBbUMsRUFBRSxHQUFHLEVBQUU7QUFDMUM7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHNCQUFzQiwwQkFBMEIsR0FBRywwQkFBMEI7QUFDN0UsU0FBUztBQUNUO0FBQ0EsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxRQUFRLEdBQUcsUUFBUTtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVzaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgc2hpcCwgZ2FtZWJvYXJkLCBwbGF5ZXIsIGdldFJhbmRvbU51bWJlciwgQk9BUkRfU0laRSwgTUFYX1NISVBfU0laRSB9O1xuXG5jb25zdCBCT0FSRF9TSVpFID0gMTA7XG5jb25zdCBNQVhfU0hJUF9TSVpFID0gNTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59XG5cbi8vIHNoaXBzIHRva2VuIGZvciB0aGUgZ2FtZSBib2FyZFxuY29uc3Qgc2hpcCA9IGZ1bmN0aW9uKGxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgaGl0czogW10sXG4gICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICBoaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzLnB1c2godHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmlzU3VuaygpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCBcbiAgICAgICAgaXNTdW5rOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhpdHMubGVuZ3RoID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIGdhbWVib2FyZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwbGF5ZXIncyBzaGlwc1xuY29uc3QgZ2FtZWJvYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQ6IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBCT0FSRF9TSVpFOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBCT0FSRF9TSVpFOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzOiBgJHtpfSwke2p9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pKCksXG4gICAgICAgIGNsZWFyQm9hcmQoKXtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0uc2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0uYXR0YWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmFuZG9tQ29vcmRzKG1pbiwgbWF4KSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7Z2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KX0sJHtnZXRSYW5kb21OdW1iZXIobWluLCBtYXgpfWA7XG4gICAgICAgIH0sXG4gICAgICAgIHJldHVybkluZGV4KGNvb3Jkcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV0uY29vcmRzID09PSBjb29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwbGFjZVNoaXA6IGZ1bmN0aW9uKGNvb3JkcywgbGVuZ3RoLCBkaXJlY3Rpb249XCJoXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoaXAgPSBzaGlwKGxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBuZXdQbGFjZW1lbnQgPSBbXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gc3BsaXQgdGhlIGNvb3JkcyB1cCBzbyB0aGF0IHdlIGNhbiBtb2RpZnkgdGhlbSBhbmQgYWRkIGFsbCBwYXJ0cyBvZiB0aGUgc2hpcCB0byB0aGUgYm9hcmRcbiAgICAgICAgICAgIGNvbnN0IGNvb3Jkc0FycmF5ID0gY29vcmRzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBsZXQgdkNvb3JkcyA9IHBhcnNlSW50KGNvb3Jkc0FycmF5WzBdKTtcbiAgICAgICAgICAgIGxldCBoQ29vcmRzID0gcGFyc2VJbnQoY29vcmRzQXJyYXlbMV0pO1xuXG4gICAgICAgICAgICAvLyBhdm9pZCBvdmVyZmxvd1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaENvb3JkcyArIGxlbmd0aCA+IEJPQVJEX1NJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcFNpemUgPSBCT0FSRF9TSVpFICUgMiA9PT0gMCA/IEJPQVJEX1NJWkUgOiBCT0FSRF9TSVpFIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgaENvb3JkcyA9IHRlbXBTaXplIC8gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh2Q29vcmRzICsgbGVuZ3RoID4gQk9BUkRfU0laRSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wU2l6ZSA9IEJPQVJEX1NJWkUgJSAyID09PSAwID8gQk9BUkRfU0laRSA6IEJPQVJEX1NJWkUgLSAxO1xuICAgICAgICAgICAgICAgICAgICB2Q29vcmRzID0gdGVtcFNpemUgLyAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2tzIHRvIHNlZSBpZiB0aGUgYm9hcmQgY29vcmRzIHdlIHdhbnQgdG8gcGxhY2UgdGhlIHNoaXAgaW4gYXJlIGluIHVzZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmUgb3ZlciBvbmUgc3BhY2UgdG8gcGxhY2UgbW9yZSBvZiB0aGUgYm9keVxuICAgICAgICAgICAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoQ29vcmRzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2Q29vcmRzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZENvb3JkcyA9IGAke3ZDb29yZHN9LCR7aENvb3Jkc31gOyBcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmV0dXJuSW5kZXgoY29tYmluZWRDb29yZHMpO1xuXG4gICAgICAgICAgICAgICAgLy8gYWRkcyB0aGVtIHRvIGFuIGFycmF5IHRvIGJlIGFkZGVkIHRvIHRoZSBib2FyZCBpZiB0aGUgc3BvdCBpcyBmcmVlXG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRTbG90ID0gdGhpcy5ib2FyZFtpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKCFib2FyZFNsb3Quc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQucHVzaChib2FyZFNsb3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNhZmVseSBwbGFjZXMgc2hpcHMgb24gdGhlIGdyaWRcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3UGxhY2VtZW50Lmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgbmV3UGxhY2VtZW50W2pdLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3UGxhY2VtZW50O1xuICAgICAgICB9LFxuICAgICAgICByYW5kb21pemVTaGlwUGxhY2VtZW50KGFtb3VudD1NQVhfU0hJUF9TSVpFLCBib2FyZHNpemU9Qk9BUkRfU0laRSkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcHMgPSBbXTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSBhbW91bnQ7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZXMgc2hpcHMgdW50aWwgd2UgZ2V0IHRvIHRoZSBkZXNpcmVkIGFtb3VudFxuICAgICAgICAgICAgd2hpbGUgKHNoaXBzLmxlbmd0aCA8IGFtb3VudCkge1xuICAgICAgICAgICAgICAgIC8vIHRyaWVzIGFnYWluIGlmIHRoZSBjcmVhdGVkIHNoaXAgaXNuJ3QgdmFsaWRcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2hpcCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5ld1NoaXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMuZ2V0UmFuZG9tQ29vcmRzKDEsIGJvYXJkc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gbGVuZ3RoICUgMiA9PT0gMCA/IFwiaFwiIDogXCJ2XCI7XG4gICAgICAgICAgICAgICAgICAgIG5ld1NoaXAgPSB0aGlzLnBsYWNlU2hpcChjb29yZHMsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgICAgICAgICAgbGVuZ3RoIC09IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzaGlwcztcbiAgICAgICAgfSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjazogZnVuY3Rpb24oY29vcmRzKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmV0dXJuSW5kZXgoY29vcmRzKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLmF0dGFja2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaW5kZXhdLnNoaXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5ib2FyZFtpbmRleF0uc2hpcDtcbiAgICAgICAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtpbmRleF07XG4gICAgICAgIH0sXG4gICAgICAgIGlzR2FtZU92ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV0uc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYm9hcmRbaV0uc2hpcC5zdW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuLy8gcGxheWVyIHRva2VuIHRoYXQgYWxsb3dzIHRoZSBwbGF5ZXIgdG8gYXR0YWNrXG5jb25zdCBwbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhdHRhY2s6IGZ1bmN0aW9uKG9wcG9uZW50LCBjb29yZHMpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBhdHRhY2sgdGhlIHNhbWUgcGxhY2UgdHdpY2VcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gb3Bwb25lbnQucmV0dXJuSW5kZXgoY29vcmRzKTtcblxuICAgICAgICAgICAgaWYgKCFvcHBvbmVudC5ib2FyZFtpbmRleF0uYXR0YWNrZWQpIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5zIG9wcG9uZW50LmJvYXJkW2luZGV4XVxuICAgICAgICAgICAgICAgIHJldHVybiBvcHBvbmVudC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgcmFuZG9tQXR0YWNrOiBmdW5jdGlvbihvcHBvbmVudCkge1xuICAgICAgICAgICAgbGV0IGF0dGFjayA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKGF0dGFjayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2sgPSB0aGlzLmF0dGFjayhvcHBvbmVudCwgb3Bwb25lbnQuZ2V0UmFuZG9tQ29vcmRzKDEsIEJPQVJEX1NJWkUrMSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==