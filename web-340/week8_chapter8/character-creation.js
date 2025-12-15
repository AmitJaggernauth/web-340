"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:

const fs = require('fs');
const path = require('path');


function createCharacter(character, callback) {
  // TODO: Implement this function
}

function getCharacters(callback) {
  // TODO: Implement this function
  return {
    class: characterClass,
    gender: gender,
    funFact: funFact
  };

}


// For promises:

const fs = require('fs').promises;

async function createCharacter(character) {
  // TODO: Implement this function
  const data = JSON.stringify(character, null, 2);
  await fs.writeFile(fileName, data, 'utf-8');
}

async function getCharacters() {
  // TODO: Implement this function
   const data = await fs.readFile(fileName, 'utf-8');
  return JSON.parse(data);

}

module.exports = {
  createCharacter,
  writeCharacterToFile,
  readCharacterFromFile,
  DEFAULT_FILE
};


// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
module.exports = { createCharacter, getCharacters }; // For promises