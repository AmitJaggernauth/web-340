function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
  'use strict';

const PLANET_AU = {
  Mercury: 0.39,
  Venus: 0.72,
  Earth: 1.00,
  Mars: 1.52,
  Jupiter: 5.20,
  Saturn: 9.58,
  Uranus: 19.20,
  Neptune: 30.05,
  Pluto: 39.48
};

function calculateDistance(planetA, planetB) {
  const a = PLANET_AU[planetA];
  const b = PLANET_AU[planetB];
  if (a === undefined) {
    throw new Error(`Unknown planet: ${planetA}`);
  }
  if (b === undefined) {
    throw new Error(`Unknown planet: ${planetB}`);
  }
  return Math.abs(a - b);
}

module.exports = {
  calculateDistance
};
}

module.exports = calculateDistance;