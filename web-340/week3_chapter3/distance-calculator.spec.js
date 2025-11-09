const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testFunctionDescription() {
  // TODO: Implement this function
  'use strict';

const assert = require('assert');
const { calculateDistance } = require('../src/distance-calculator.js');

function roundToTwo(value) {
  return Math.round(value * 100) / 100;
}

function testEarthToMars() {
  try {
    const result = calculateDistance('Earth', 'Mars');
    const rounded = roundToTwo(result);
    const expected = 0.52;
    assert.strictEqual(rounded, expected);
    console.log('Passed testEarthToMars');
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

function testVenusToJupiter() {
  try {
    const result = calculateDistance('Venus', 'Jupiter');
    const rounded = roundToTwo(result);
    const expected = 4.48;
    assert.strictEqual(rounded, expected);
    console.log('Passed testVenusToJupiter');
    return true;
  } catch (error) {
    console.error(`Failed testVenusToJupiter: ${error.message}`);
    return false;
  }
}

function testMercuryToSaturn() {
  try {
    const result = calculateDistance('Mercury', 'Saturn');
    const rounded = roundToTwo(result);
    const expected = 9.19;
    assert.strictEqual(rounded, expected);
    console.log('Passed testMercuryToSaturn');
    return true;
  } catch (error) {
    console.error(`Failed testMercuryToSaturn: ${error.message}`);
    return false;
  }
}

// Run tests and set exit code to non-zero if any fail
const results = [
  testEarthToMars(),
  testVenusToJupiter(),
  testMercuryToSaturn()
];

if (results.every(Boolean)) {
  process.exitCode = 0;
} else {
  process.exitCode = 1;
}
}

// Call your test functions here