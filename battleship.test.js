import { ship, gameboard, player } from './battleship.js';
const { test, expect } = require('@jest/globals');

test('properly applies a length to a new ship', () => {
    const newShip = ship([1, 1], 2);

    expect(newShip.length).toBe(2);
});

test('new ships can be rotated', () => {
    const newShip = ship([1, 1], 3);
    newShip.rotate()

    expect(newShip.damage[2].coords).toStrictEqual([3, 1]);
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

test('gameboard is able to keep track of misses', () => {
    const board = gameboard();
    board.placeship([1, 1], 1);
    board.receiveAttack([5, 5]);

    expect(board.board.misses[0]).toStrictEqual([5, 5]);
});

test('gameboard is able to damage ships', () => {
    const board = gameboard();
    board.placeship([1, 1], 1);
    board.receiveAttack([1, 1]);

    expect(board.board.placed[0].damage[0].damaged).toStrictEqual(true);
});

test('gameboard is able to precisely damage ships', () => {
    const board = gameboard();
    board.placeship([1, 1], 2);
    board.receiveAttack([1, 2]);

    expect(board.board.placed[0].damage[1].damaged).toStrictEqual(true);
});

test('gameboard is able to sink completely damaged ships', () => {
    const board = gameboard();
    board.placeship([1, 1], 2);
    board.receiveAttack([1, 1]);
    board.receiveAttack([1, 2]);

    expect(board.board.placed[0].sunk).toStrictEqual(true);
});

test('gameboard is able to report if all ships are sunk', () => {
    const board = gameboard();
    board.placeship([1, 1], 2);
    board.board.placed[0].sunk = true;
    const status = board.areAllShipsSunk();

    expect(status).toStrictEqual(true);
});

test('player is able to attack', () => {
    const player1 = player();
    const board = gameboard();
    board.placeship([1, 1], 1);
    player1.attack(board, [1, 1]);

    expect(board.board.placed[0].damage[0].damaged).toStrictEqual(true);
});
