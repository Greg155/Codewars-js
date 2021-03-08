// Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take
//a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

// My solution
var min = function (list) {
  let minValue = list[0];
  for (let value of list) {
    if (value < minValue) {
      minValue = value;
    }
  }
  return minValue;
};

var max = function (list) {
  let maxValue = list[0];
  for (let value of list) {
    if (value > maxValue) {
      maxValue = value;
    }
  }
  return maxValue;
};

// test
// Test should return -110
console.log(min([-52, 56, 30, 29, -54, 0, -110]));
// Test should return 0
console.log(min([42, 54, 65, 87, 0]));
// Test should return 566
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
// Test should return 5
console.log(max([5]));

// Other solutions
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// var min = function(list){
//     return Math.min.apply(null,list);
// }
// var max = function(list){
//     return Math.max.apply(null,list);
// }

// var min = function(list){
//     list.sort((a, b) => (a - b));
//     return list[0];
// }
// var max = function(list){
//     list.sort((a, b) => (b - a));
//     return list[0];
// }
