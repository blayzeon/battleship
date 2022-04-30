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

const placeShip = function (board, coords) {
    const unit = board.querySelector(`[data="${coords}"]`);
    unit.classList.add('ship');

    const peg = document.createElement('div');
    peg.classList.add('peg');
    unit.appendChild(peg);
};

const placeShips = function (boardObj, boardUi) {
    for (let i = 0; i < boardObj.length; i += 1 ) {
        console.log(boardObj[i].coords.toString());
        placeShip(boardUi, boardObj[i].coords.toString())
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
console.log(playerBoard.board.placed);

const cpuPlayer = player();
const cpuBoard = gameboard();
cpuBoard.randomize(5);

// create the boards
console.log(playerBoard);
placeShips(playerBoard.board.placed, playerUi);

// listens to where the user clicks
document.addEventListener('click', (e)=>{
    // checks which board
    const board = e.target.closest('table');

    // checks which grid square
    const td = e.target.closest('td');
    
    if (!td) { return }

    // placeUnit(board, td.getAttribute('data'));
})