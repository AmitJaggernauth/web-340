/**
 * Author:Amit Jaggernauth
 * Date:11/2/2025
 * File Name: week2_chapter2
 * Description: Recipe App
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // TODO: Implement this function
  return `Recipe created with ingredients: ${ingredients.join(', ')}`;
}

// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  return `Timer set for ${minutes} minutes.`;

}

// Define the quit function
function quit() {
  // TODO: Implement this function
  return 'Program exited';
}

// TODO: Export the functions
module.exports = {
  createRecipe,
  setTimer,
  quit
};
