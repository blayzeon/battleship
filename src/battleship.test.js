import { ship, gameboard, player, getRandomNumber } from './battleship.js';
const { test, expect } = require('@jest/globals');

test('gameboard.board contains information about each square', () => {
    const newBoard = gameboard();

    expect(newBoard.board[0]).toEqual(expect.objectContaining({attacked: false, coords: "1,1", ship: false}));
});

test('gameboard.board is the correct length', () => {
    const newBoard = gameboard();

    expect(newBoard.board.length).toEqual(100);
});

test('gameboard.placeShip can place ships', () => {
    const newBoard = gameboard();
    const newShip = newBoard.placeShip("1,1", 1, "h");


    expect(newBoard.board[0]).toEqual(expect.objectContaining(newShip[0]));
});

test('gameboard.placeShip can handle ship length', () => {
    const newBoard = gameboard();
    const newShip = newBoard.placeShip("1,1", 5, "h");


    expect(newBoard.board[4]).toEqual(expect.objectContaining(newShip[4]));
});

test('gameboard.placeShip can handle vertical ships', () => {
    const newBoard = gameboard();
    const newShip = newBoard.placeShip("1,1", 5, "v");


    expect(newBoard.board[10]).toEqual(expect.objectContaining(newShip[1]));
});

test('gameboard.placeShip does not allow multiple ships to be placed in the same spot', () => {
    const newBoard = gameboard();
    newBoard.placeShip("1,1", 3, "h");
    const ship2 = newBoard.placeShip("1,3", 5, "h");


    expect(ship2).toEqual(false);
});

test('gameboard.receiveAttack will remember where the board was attacked', () => {
    const newBoard = gameboard()
    const result = newBoard.receiveAttack("5,5");


    expect(result.attacked).toEqual(true);
});

test('gameboard.receiveAttack can sink ships', () => {
    const newBoard = gameboard();
    newBoard.placeShip("1,1", 1, "h");
    const result = newBoard.receiveAttack("1,1");


    expect(result.ship.sunk).toEqual(true);
});

test('gameboard.isGameOver can report if the game is over', () => {
    const newBoard = gameboard();
    const result = newBoard.isGameOver();

    expect(result).toEqual(true);
});

test('gameboard.isGameOver does not report false positives', () => {
    const newBoard = gameboard();
    newBoard.placeShip("1,1", 5, "h");
    newBoard.receiveAttack("1,1");
    const result = newBoard.isGameOver();


    expect(result).toEqual(false);
});

test('gameboard.randomizeShipPlacement will add the correct number of ships', () => {
    const newBoard = gameboard();
    const result = newBoard.randomizeShipPlacement(5);

    expect(result.length).toEqual(5);
});

test('player.attack can damage the opponent\'s board', () => {
    const newBoard = gameboard();
    const newPlayer = player();

    const result = newPlayer.attack(newBoard, "1,1");

    expect(result.attacked).toEqual(true);
});

test('player.randomAttack can damage the opponent\'s board', () => {
    const newBoard = gameboard();
    const newPlayer = player();

    const result = newPlayer.randomAttack(newBoard);

    expect(result.attacked).toEqual(true);
});

test('player.clearBoard will clear the whole board', () => {
    const newBoard = gameboard();
    const oldBoard = newBoard.board.toString()
    newBoard.randomizeShipPlacement();
    newBoard.clearBoard
    const clearedBoard = newBoard.board.toString();

    expect(oldBoard).toEqual(clearedBoard);
});

test('gameboard.getDamagedShips will return a list of damaged ships', () => {
    const newBoard = gameboard();
    newBoard.placeShip('1,1', 5);
    newBoard.placeShip('3,3', 3);
    newBoard.receiveAttack('1,1');
    newBoard.receiveAttack('3,3');
    const result = newBoard.getDamagedShips();

    expect(result[0]).toEqual('1,1');
});

test('gameboard.getDamagedShips will not return sunken ships', () => {
    const newBoard = gameboard();
    newBoard.placeShip('1,1', 1);
    newBoard.placeShip('3,3', 3);
    newBoard.receiveAttack('1,1');
    newBoard.receiveAttack('3,3');
    const result = newBoard.getDamagedShips();

    expect(result[0]).toEqual('3,3');
});

test('player.randomAttack will target damaged ships', () => {
    const newBoard = gameboard();
    newBoard.placeShip('1,1', 2);
    newBoard.receiveAttack('1,1');

    const newPlayer = player();

    // Placing a ship at 1,1 means it should be destroyed within 2 attacks
    newPlayer.randomAttack(newBoard);
    newPlayer.randomAttack(newBoard);

    const result = newBoard.isGameOver();

    expect(result).toEqual(true);
});
