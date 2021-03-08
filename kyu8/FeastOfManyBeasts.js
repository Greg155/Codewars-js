// All of the animals are having a feast! Each animal is bringing one dish.
//There is just one rule: the dish must start and end with the same letters as the animal's name.
//For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to
//indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters.
// beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// My solution
function feast(beast, dish) {
  let arrayBeast = beast.split("");
  let arrayDish = dish.split("");

  if (
    arrayBeast.pop() === arrayDish.pop() &&
    arrayBeast.shift() === arrayDish.shift()
  ) {
    return true;
  } else {
    return false;
  }
}

// Test
// Should be true
console.log(feast("great blue heron", "garlic naan"));
// Should be true
console.log(feast("chickadee", "chocolate cake"));
// Should be false
console.log(feast("brown bear", "bear claw"));

// Other solutions
// function feast(beast, dish) {
//   let arrayBeast = beast.split("");
//   let arrayDish = dish.split("");

//   if (
//     arrayBeast[0] === arrayDish[0] &&
//     arrayBeast[beast.length - 1] === arrayDish[dish.length - 1]
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

//function feast(beast, dish) {
// return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
//}

// function feast(beast, dish) {
//     return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
//   }
