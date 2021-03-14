// In this simple exercise, you will create a program that will take two lists of integers, a and b.
// Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b.
// You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20.
// Therefore, the fct should return 8

// my solution

function findDifference(a, b) {
  let reducer = (acc, cur) => acc * cur;
  return Math.abs(a.reduce(reducer) - b.reduce(reducer));
}

// Test
// Should return 14
console.log(findDifference([3, 2, 5], [1, 4, 4]));
// Should return 106
console.log(findDifference([9, 7, 2], [5, 2, 2]));
// Should return 0
console.log(findDifference([15, 20, 25], [10, 30, 25]));

// Other solutions
// function find_difference(a, b) {
//     return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
//   }

//function find_difference(a, b) {
//     return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
// }

// function volume(c) {
//   return c.reduce((x, y) => x * y);
// }

// function find_difference(a, b) {
//   return Math.abs(volume(a) - volume(b));
// }

//const times = (a, b) => a * b;
// const find_difference = (a, b) => Math.abs(a.reduce(times) - b.reduce(times));
