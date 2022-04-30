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
        header.innerHTML = (String.fromCharCode(j+ascii));
        row.appendChild(header);

        for (let k = 0; k < boardSize; k += 1 ) {
            const data = document.createElement('td');
            data.setAttribute('data', 'grid');
            row.appendChild(data);
        }

        table.appendChild(row);
    }

    return table;
}

document.querySelector('#top-center').appendChild(buildGrid(10));
document.querySelector('#bottom-center').appendChild(buildGrid(10));

const human = player();
const humanBoard = gameboard();

const cpu = player();
const cpuBoard = gameboard();

console.log(human, humanBoard, cpu, cpuBoard);