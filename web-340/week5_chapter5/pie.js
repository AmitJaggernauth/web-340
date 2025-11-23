/**
 * Author:Amit Jaggernauth
 * Date:11/22/2025
 * File Name:week5_chapter5
 * Description:
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Your code here
  function bakePie(type, ingredients) {
  const essentials = ['flour', 'sugar', 'butter'];
  const missing = essentials.filter(item => !ingredients.includes(item));

  if (missing.length > 0) {
    console.warn(`Missing essential ingredient(s): ${missing.join(', ')}`);
    process.exit(1);
  }

  return `Successfully baked an ${type} pie!`;
}

module.exports = bakePie;
}

module.exports = { bakePie };