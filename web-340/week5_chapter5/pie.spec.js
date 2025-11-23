/**
 * Author:Amit Jaggernauth
 * Date:11/22/2025
 * File Name:week5_chapter5
 * Description:pie maker
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
const bakePie = require('../src/pie');

describe('bakePie function', () => {
  test('should bake a pie successfully when all essential ingredients are present', () => {
    const result = bakePie('apple', ['flour', 'sugar', 'butter', 'apples']);
    expect(result).toBe('Successfully baked an apple pie!');
  });

  test('should exit process when flour is missing', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const mockWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    bakePie('cherry', ['sugar', 'butter', 'cherries']);

    expect(mockWarn).toHaveBeenCalledWith('Missing essential ingredient(s): flour');
    expect(mockExit).toHaveBeenCalledWith(1);

    mockExit.mockRestore();
    mockWarn.mockRestore();
  });

  test('should exit process when multiple essential ingredients are missing', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const mockWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    bakePie('pumpkin', ['butter', 'pumpkin']);

    expect(mockWarn).toHaveBeenCalledWith('Missing essential ingredient(s): flour, sugar');
    expect(mockExit).toHaveBeenCalledWith(1);

    mockExit.mockRestore();
    mockWarn.mockRestore();
  });
});