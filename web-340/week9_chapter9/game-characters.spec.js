// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");
const path = require("path");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    // TODO: Implement this test
    const gc = new GameCharacters("game-characters-data.js");

    gc.getCharacters((err, data) => {
      expect(err).toBeNull();
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
      expect(data[0]).toHaveProperty("class");
      expect(data[0]).toHaveProperty("gender");
      expect(data[0]).toHaveProperty("funFact");
      done();
    });

  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // TODO: Implement this test
    const gc = new GameCharacters("nonexistent.js");

    gc.getCharacters((err, data) => {
      expect(err).not.toBeNull();
      expect(data).toBeNull();
      done();
    });

  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test
    const gc = new GameCharacters("failing-script.js");

    gc.getCharacters((err, data) => {
      expect(err).not.toBeNull();
      expect(data).toBeNull();
      done();
    });
  });

});
