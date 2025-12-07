const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    const input = chunk.toString().trim();

    if (!input) {
      this.emit('error', new Error('Empty input is not allowed'));
      return callback();
    }

    try {
      const data = JSON.parse(input);
      this.characterData.push(data);
      callback();
    } catch (err) {
      this.emit('error', new Error('Invalid JSON input'));
      callback(err);
    }
  }

  _read(size) {
    // TODO: Implement your _read method here
     if (this.characterData.length === 0) {
      this.push(null);
      return;
    }

    const { classType, gender, funFact } = this.characterData.shift();
    const description = `A brave ${gender} ${classType} enters the realm. Fun fact: ${funFact}`;
    this.push(description);
  }
}

module.exports = CharacterCreator;