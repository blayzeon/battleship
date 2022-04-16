const { test, expect } = require('@jest/globals');
import { ship, gameboard } from './battleship.js';

test('properly applies a length to a new ship', () => {
    const newShip = ship(2);

    expect(newShip.length).toBe(2);
});

test('new ships aren\'t damaged', () => {
    const newShip = ship();

    expect(newShip.damage).toStrictEqual([ false ]);
});

test('new ships aren\'t sunk', () => {
    const newShip = ship();

    expect(newShip.sunk).toBe(false);
});

test('damaged ships are damaged', () => {
    const newShip = ship(2);
    newShip.hit(1)

    expect(newShip.damage).toStrictEqual([ false, true ]);
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

    expect(board.board.placed[0].damage).toStrictEqual([true]);
});