const CharacterCreator = require('../src/character-creator.js');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    const input = JSON.stringify({
      classType: 'Warrior',
      gender: 'Male',
      funFact: 'Loves dragons'
  });
  creator.write(input);
    creator.on('data', (chunk) => {
      expect(chunk.toString()).toContain('Warrior');
      expect(chunk.toString()).toContain('Male');
      expect(chunk.toString()).toContain('Loves dragons');
      done();
    });
    creator.read();
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    creator.on('error', (err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe('Empty input is not allowed');
      done();
    });
    creator.write('');

  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    const input = JSON.stringify({
      classType: 'Mage',
      gender: 'Female',
      funFact: 'Can summon lightning'
    });

    creator.write(input);
    creator.on('data', (chunk) => {
      const output = chunk.toString();
      expect(output).toBe(
        'A brave Female Mage enters the realm. Fun fact: Can summon lightning'
      );
      done();
    });
    creator.read();
  });
});
