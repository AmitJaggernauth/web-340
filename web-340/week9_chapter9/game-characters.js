// game-characters.js
const { spawn } = require("child_process");
const path = require("path");

class GameCharacters {
  constructor(scriptFile) {
    // TODO: Set the script file path
    this.scriptPath = path.join(__dirname, scriptFile);
  }

  getCharacters(callback) {
    // TODO: Implement this method
    let output = "";
    let errorOutput = "";

    let child;

    try {
      child = spawn("node", [this.scriptPath]);
    } catch (err) {
      console.error("Error spawning child process:", err);
      return callback(err, null);
    }

    child.stdout.on("data", (data) => {
      output += data.toString();
    });

    child.stderr.on("data", (data) => {
      const errMsg = data.toString();
      console.error("Child process error:", errMsg);
      errorOutput += errMsg;
    });

    child.on("close", (code) => {
      if (code !== 0) {
        return callback(new Error(errorOutput || "Script failed"), null);
      }
      try {
        const parsed = JSON.parse(output);
        callback(null, parsed);
      } catch (err) {
        callback(err, null);
      }
    });
  }
 }


module.exports = { GameCharacters };