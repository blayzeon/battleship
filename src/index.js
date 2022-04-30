import { gameboard, player } from './battleship.js';

const buildGrid = function(tiles) {
    const table = document.createElement("table");
    table.classList.add('game-table');
    table.classList.add('full-screen');
    
    // limited by letters of the alphabet
    const boardSize = tiles < 27 ? tiles : 26

    // top row of columns for the game board
    const column = document.createElement('tr');
    for (let i = 0; i <= boardSize; i += 1 ) {
        const header = document.createElement('th');
        if (i !== 0) { header.innerText = i; }
        column.appendChild(header);
    }

    table.appendChild(column);

    // side rows for the gameboard
    const ascii = 65; // use String.fromCharCode(code);
    for (let j = 0; j < boardSize; j += 1 ) {
        const row = document.createElement('tr');

        const header = document.createElement('th');
        header.innerText = (String.fromCharCode(j+ascii));
        row.appendChild(header);

        for (let k = 0; k < boardSize; k += 1 ) {
            const data = document.createElement('td');
            data.setAttribute('data', `${j+1},${k+1}`);
            data.classList.add('grid')
            row.appendChild(data);
        }

        table.appendChild(row);
    }

    return table;
}

const returnSquare = function (board, coords) {
    const square = board.querySelector(`[data="${coords}"]`);
    if (square) { return square }

    return false;
}

const placePeg = function() {
    const peg = document.createElement('div');
    peg.classList.add('peg');
    return peg;
}

const placeShip = function (board, coords) {
    const unit = returnSquare(board, coords);
    unit.classList.add('ship');
};

const placeShips = function (boardObj, boardUi) {
    for (let i = 0; i < boardObj.length; i += 1 ) {
        placeShip(boardUi, boardObj[i].coords.toString());
    }
}

const boardSize = 10;

const computerUi = document.querySelector('#top-center');
const playerUi = document.querySelector('#bottom-center');

computerUi.appendChild(buildGrid(boardSize));
playerUi.appendChild(buildGrid(boardSize));

const userPlayer = player();
const playerBoard = gameboard();
playerBoard.randomize(5);

const cpuPlayer = player();
const cpuBoard = gameboard();
cpuBoard.randomize(5);

// create the game state
placeShips(playerBoard.board.placed, playerUi);

document.addEventListener('click', (e)=>{
    function renderDamage(ui, obj, result) {
        const missed = obj.misses[obj.misses.length-1];
        
        const coords = missed.toString();
        const square = returnSquare(ui, coords);
        
        const peg = placePeg();
        square.appendChild(peg);

        if (result) {
            peg.classList.add('damaged');
        }
    }

    // checks which board
    const board = e.target.closest('table');

    // checks which grid square
    const td = e.target.closest('td');
    
    if (!td) { return } // end if user didn't click a square
    if (td.innerHTML != '') { return } // end if user clicked a title that has already been clicked

    if (computerUi.querySelector('table') === board) {
        const result1 = userPlayer.attack(cpuBoard, td.getAttribute('data'));
        renderDamage(computerUi, cpuBoard.board, result1);


        const result2 = cpuPlayer.randomAttack(playerBoard);
        renderDamage(playerUi, playerBoard.board, result2);
    }

});