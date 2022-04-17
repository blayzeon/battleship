import { gameboard, player } from './battleship.js';

const human = player();
const humanBoard = gameboard();

const cpu = player();
const cpuBoard = gameboard();

console.log(human, humanBoard, cpu, cpuBoard);