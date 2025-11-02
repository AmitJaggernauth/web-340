/**
 * Author:Amit Jaggernauth
 * Date:11/2/2025
 * File Name: Week2_Chapter2
 * Description: Recipe app
*/

// TODO: Import your module using require
// index.js

const { createRecipe, setTimer, quit } = require('./recipes');

// TODO: Implement your CLI program here
console.log(createRecipe(['flour', 'sugar', 'eggs']));
console.log(setTimer(15));
console.log(quit());