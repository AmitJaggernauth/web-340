/**
 * Author: Amit Jaggernauth
 * Date: 11/16/2025
 * File Name: Week4_Chapter4
 * Description: 
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
const tacoStand = new TacoStandEmitter();

tacoStand.on('serve', (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on('prepare', (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on('rush', (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter command: ', (input) => {
  const [command, arg] = input.split(' ');
  switch (command) {
    case 'serve':
      tacoStand.serveCustomer(arg);
      break;
    case 'prepare':
      tacoStand.prepareTaco(arg);
      break;
    case 'rush':
      tacoStand.handleRush(arg);
      break;
    default:
      console.log('Unknown command');
  }
  rl.close();
});
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);