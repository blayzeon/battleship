import { ship, gameboard } from './battleship.js';
const { test, expect } = require('@jest/globals');

test('properly applies a length to a new ship', () => {
    const newShip = ship([1, 1,], 2);

    expect(newShip.length).toBe(2);
});

test('new ships aren\'t sunk', () => {
    const newShip = ship();

    expect(newShip.sunk).toBe(false);
});

test('completely damaged ships are sunk', () => {
    const newShip = ship();
    newShip.hit(0)
    newShip.isSunk()

    expect(newShip.sunk).toStrictEqual(true);
});

test('gameboard is able to add new ships', () => {
    const board = gameboard();
    board.placeship([1, 1], 1);

    expect(board.placed).not.toStrictEqual([]);
});

test('gameboard is able to damage ships', () => {
    const board = gameboard();
    board.placeship([1, 1], 1);
    board.recieveAttack([1, 1]);

    expect(board.board.placed[0].damage[0].damaged).toStrictEqual(true);
});

test('gameboard is able to precisely damage ships', () => {
    const board = gameboard();
    board.placeship([1, 1], 2);
    board.recieveAttack([1, 2]);

    expect(board.board.placed[0].damage[1].damaged).toStrictEqual(true);
});