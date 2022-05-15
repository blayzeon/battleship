import { gameboard, player, BOARD_SIZE, MAX_SHIP_SIZE } from './battleship.js';
import './style.css';



function startGame() {
// tracking game state
let isGameOver = false
let userScore = MAX_SHIP_SIZE;
let cpuScore = MAX_SHIP_SIZE;

function gameOver() {
    function clearBoard() {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.lastChild);
        }

        document.body.innerHTML = `
            <div id="game-container" class="full-screen">
            <div id="top-center">
            <div>
                <div>CPU's board</div>
                <div id="top-score"></div>
            </div></div>
            <div id="bottom-center">
                <div>
                    <div>User's board</div>
                    <div id="bottom-score"></div>
                </div>
            </div>
        </div>
    `
    }

    const a = confirm('Game over! Would you like to play again?');
    if (a) {
        clearBoard();
        startGame();
    }       
}

function getScoreMessage(newScore, maxScore) {
    return `Ships: ${newScore} out of ${maxScore}`;
}

function updateScoreMessages() {
    const uScoreElm = document.querySelector('#top-score');
    const cScoreElm = document.querySelector('#bottom-score');

    uScoreElm.innerText = getScoreMessage(userScore, MAX_SHIP_SIZE);
    cScoreElm.innerText = getScoreMessage(cpuScore, MAX_SHIP_SIZE);
}

// creates the user board so players can attack
const buildGrid = function(tiles) {
    const table = document.createElement("div");
    table.classList.add('game-table');
    table.classList.add('full-screen');
    
    // limited by letters of the alphabet
    const boardSize = tiles < 27 ? tiles : 26

    // top row of columns for the game board
    const topNums = document.createElement('div');
    topNums.classList.add('game-numbers');
    for (let i = 0; i <= boardSize; i += 1 ) {
        if (i === 0) { continue }
        const item = document.createElement('div');
        item.innerText = i;
        topNums.appendChild(item);
    }

    table.appendChild(topNums);

    // side rows for the gameboard
    const ascii = 65; // use String.fromCharCode(code);
    const centerContent = document.createElement('div');
    centerContent.classList.add('game-rows');
    const squares = document.createElement('div');
    squares.classList.add('game-squares');
    const sideLetters = document.createElement('div');
    sideLetters.classList.add('game-letters');
    for (let j = 0; j < boardSize; j += 1 ) {
        const letter = document.createElement('div');

        letter.innerText = (String.fromCharCode(j+ascii));
        sideLetters.appendChild(letter);

        for (let k = 0; k < boardSize; k += 1 ) {
            const square = document.createElement('div');
            square.setAttribute('data', `${j+1},${k+1}`);
            square.classList.add('grid');
            squares.appendChild(square);
        }
    }
    
    centerContent.appendChild(sideLetters);
    centerContent.appendChild(squares);
    table.appendChild(centerContent);

    return table;
}

updateScoreMessages();


    // functions for manipulating the UI
    function getDomSquare(coords, ui) {
        return ui.querySelector(`[data='${coords}']`);
    }

    function getAttackToken() {
        const token = document.createElement('div');
        token.classList.add('token');

        return token;
    }

    function placeShips(board, ui, showShips=false) {
        const ships = board.randomizeShipPlacement(5);
        ships.forEach((ship) => {
            if (showShips) {
                for (let i = 0; i < ship.length; i += 1) {
                    const square = getDomSquare(ship[i].coords, ui);
                    square.classList.add('ship');
                }
            }
        });

        return ships;
    }

    function styleEntireShip(shipSet, coords, style, ui) {
        shipSet.forEach((ship)=>{ // array of arrays that contain ships
            for (let i = 0; i < ship.length; i += 1){  // array of ships associated with a single ship
                if (ship[i].coords === coords) {
                    ship.forEach((colorMe)=>{
                        const elm = getDomSquare(colorMe.coords, ui)
                        elm.classList.add(style);
                    })
                }
            }
        });
    }

    // gameboard and players
    const cpuUi = document.querySelector('#top-center');
    const userUi = document.querySelector('#bottom-center');

    cpuUi.appendChild(buildGrid(BOARD_SIZE));
    userUi.appendChild(buildGrid(BOARD_SIZE));

    const userPlayer = player();
    const userBoard = gameboard();
    let userShips = placeShips(userBoard, userUi, true);

    const cpuPlayer = player();
    const cpuBoard = gameboard();
    let cpuShips = placeShips(cpuBoard, cpuUi);

    // control the gameplay
    function takeTurn(square, attack, targetBoard, targetShips, targetUi) {
        square.appendChild(getAttackToken());

        if (attack.ship) {
            square.classList.add('ship');
            if (attack.ship.sunk) {
                // let the user know the ship is dead
                styleEntireShip(targetShips, attack.coords, 'damaged', targetUi);

                if (targetUi === cpuUi) {
                    userScore -= 1;
                } else {
                    cpuScore -= 1;
                }

                updateScoreMessages();

                // check if the game is over
                const result = targetBoard.isGameOver();
                if (result) {
                    isGameOver = true;
                    gameOver();
                }
                
            }

            return true;  // so we know if the user should take another turn
        } 

        return false;
    }

    document.getElementById('game-container').addEventListener('click', (e)=>{   
        if (isGameOver === true) {
            gameOver();
        }
        const board = e.target.closest('.game-table');
        const square = e.target.closest('.grid');
    
        if (!square) {
            return // didn't click a square
        }
    
        const coords = square.getAttribute('data');
    
        if (cpuUi.querySelector('.game-table') === board) {
            // the user clicked the enemy's board
            const attack = userPlayer.attack(cpuBoard, coords);
            if (attack) {
                 const userTurn = takeTurn(square, attack, cpuBoard, cpuShips, cpuUi);
    
                 if (!userTurn){
                    let cpuTurn = true;
                    while (cpuTurn) {
                        const cpuAttack = cpuPlayer.randomAttack(userBoard);
                        const cpuTarget = getDomSquare(cpuAttack.coords, userUi);
                        cpuTurn = takeTurn(cpuTarget, cpuAttack, userBoard, userShips, userUi);
                    }
                 }
            }
        }
    });
}

startGame();