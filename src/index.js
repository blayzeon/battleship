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

    function createPopup() {
        const container = document.createElement('div');
        container.classList.add('popup');
        
        // lets the user select the direction
        const directContainer = document.createElement('div');
        const directLabel = document.createElement('label');
        directLabel.innerText = "Direction: ";
        const directInput = document.createElement('select');
        const option1 = document.createElement('option');
        option1.innerText = "Horizontal";
        const option2 = document.createElement('option');
        option2.innerText = "Vertical";

        directInput.appendChild(option1);
        directInput.appendChild(option2);
        directContainer.appendChild(directLabel);
        directContainer.appendChild(directInput);

        // lets the user select the coords
        const coordsContainer = document.createElement('div');
        const coordsLabel = document.createElement('label');
        coordsLabel.innerText = "Coordinates: ";
        const coordsInput1 = document.createElement('select');
        const coordsInput2 = document.createElement('select');

        for (let i = 1; i <= 10; i += 1) {
            const option1 = document.createElement('option');
            const option2 = document.createElement('option');
            option1.innerText = i;
            option2.innerText = i;

            coordsInput1.appendChild(option1);
            coordsInput2.appendChild(option2);
        }

        coordsContainer.appendChild(coordsLabel);
        coordsContainer.appendChild(coordsInput1);
        coordsContainer.appendChild(coordsInput2);

        // submit and cancel buttons
        const buttonContainer = document.createElement('div');
        const submit = document.createElement('button');
        submit.innerText = "Submit";
        const cancel = document.createElement('button');
        cancel.innerText = "Cancel";
        buttonContainer.appendChild(submit);
        buttonContainer.appendChild(cancel);

        cancel.addEventListener('click', ()=> {
            container.remove();
        });
        
        container.appendChild(directContainer);
        container.appendChild(coordsContainer);
        container.appendChild(buttonContainer);
        return {
            container,
            submit: submit,
            direction: directInput,
            coordsH: coordsInput2,
            coordsV: coordsInput1,
        };
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

    function styleEntireShip(shipSet, coords, style, ui, add=true) {
        shipSet.forEach((ship)=>{ // array of arrays that contain ships
            for (let i = 0; i < ship.length; i += 1){  // array of ships associated with a single ship
                if (ship[i].coords === coords) {
                    ship.forEach((colorMe)=>{
                        const elm = getDomSquare(colorMe.coords, ui)
                        if (add === true) {
                            elm.classList.add(style);
                        } else {
                            elm.classList.remove(style);
                        }
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
    const userShips = placeShips(userBoard, userUi, true);

    const cpuPlayer = player();
    const cpuBoard = gameboard();
    const cpuShips = placeShips(cpuBoard, cpuUi);

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

    let gameStarted = false;

    // let the player attack or move pieces
    document.getElementById('game-container').addEventListener('click', (e)=>{   
        if (isGameOver === true) {
            gameOver();
            return;
        }
        const board = e.target.closest('.game-table');
        const square = e.target.closest('.grid');
    
        if (!square) {
            return // didn't click a square
        }
    
        const coords = square.getAttribute('data');
        if (gameStarted === false) {
            if (userUi.querySelector('.game-table') === board) {
                // get ship
                const squareCoords = square.getAttribute('data');
                const boardSlot = userBoard.board.find(index => index.coords === squareCoords);
                const ship = boardSlot.ship;
                const shipIndexes = userBoard.board.filter(index => index.ship === ship);

                // user didn't click a ship
                if (ship === false) {
                    return;
                }

                if (document.querySelector('.popup')) {
                    // we already have a popup, so we don't want another one
                    return;
                }
                const popObj = createPopup();
                document.body.appendChild(popObj.container);
                popObj.submit.addEventListener('click', () => {
                    if (gameStarted === true) {
                        // can't move ships once the game has started
                        return
                    }
                    
                    styleEntireShip(userShips, squareCoords, 'ship', userUi, false);
                    const hCoords = popObj.coordsH.value;
                    const vCoords = popObj.coordsV.value;
                    const direction = popObj.direction.value === 'Horizontal' ? 'h' : 'v';
                    const length = ship.length;
                    const coords = `${vCoords},${hCoords}`;
                    const newShip = userBoard.placeShip(coords, length, direction);
                    console.log(userBoard);
                    userShips.push(newShip);
                    console.log(newShip);
                    styleEntireShip(userShips, coords, 'ship', userUi);

                    shipIndexes.forEach((shipSection) => {
                        delete shipSection.ship;
                    });

                    popObj.container.remove();
                })
            }
        }

        // attack
        if (cpuUi.querySelector('.game-table') === board) {
            gameStarted = true;
            
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