/**
 * Author: Amit Jaggernauth
 * Date: 10/25/2025
 * File Name:week1_chapter1
 * Description: weight converter
*/

"use strict";

// TODO: Implement the weight conversion logic here
// weight-converter.js

// Access the command line argument (excluding node and script name)
const args = process.argv.slice(2);

// Check if no argument is provided
if (args.length === 0) {
  console.error('Usage: node weight-converter.js <pounds>');
  process.exit(1);
}

const pounds = args[0];
const poundsNumber = parseFloat(pounds);

// Check if the argument is not a valid number
if (isNaN(poundsNumber)) {
  console.error('Input must be a number.');
  process.exit(1);
}

// Conversion: 1 pound = 0.453592 kilograms
const kilograms = poundsNumber * 0.453592;
const roundedKg = kilograms.toFixed(2);

console.log(roundedKg);