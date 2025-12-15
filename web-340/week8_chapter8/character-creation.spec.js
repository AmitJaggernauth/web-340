"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
const fs = require('fs');

// For promises:
const fs = require('fs').promises;
const fs = require('fs').promises;
const path = require('path');
const { createCharacter, writeCharacterToFile, readCharacterFromFile } = require('../src/character-creation');


describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    // TODO: Set up your mocks here
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  describe('Fantasy Character Creation System', () => {
  afterEach(() => {
    if (fs.existsSync(FILE_NAME)) {
      fs.unlinkSync(FILE_NAME); // cleanup after each test
    }
  });

  test('should write character data to a file', async () => {
    const character = createCharacter('Warrior', 'Male', 'Has a pet dragon');
    await writeCharacterToFile(FILE_NAME, character);

    const data = fs.readFileSync(FILE_NAME, 'utf-8');
    expect(JSON.parse(data)).toEqual(character);
  });

  test('should read character data from a file', async () => {
    const character = createCharacter('Mage', 'Female', 'Collects magical artifacts');
    fs.writeFileSync(FILE_NAME, JSON.stringify(character));

    const data = await readCharacterFromFile(FILE_NAME);
    expect(data).toEqual(character);
  });

  test('should handle errors when reading from a non-existent file', async () => {
    await expect(readCharacterFromFile('nonexistent.json')).rejects.toThrow();
  });
});


  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  // 2. Test that getCharacters reads characters from the file
  // 3. Test that createCharacter handles errors when writing to the file
});