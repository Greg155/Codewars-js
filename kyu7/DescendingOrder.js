//

//My solution
function descendingOrder(n) {
  let array = n.toString(10).split("");

  for (let i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }

  return parseInt(array.sort().reverse().join(""));
}

// Test
// Should return 0
console.log(descendingOrder(0));

// Should return 1
console.log(descendingOrder(1));

// Should return 987654321
console.log(descendingOrder(123456789));

// other solutions
// function descendingOrder(n) {
//   return parseInt(String(n).split("").sort().reverse().join(""));
// }

// function descendingOrder(n) {
//   return +(n + "")
//     .split("")
//     .sort(function (a, b) {
//       return b - a;
//     })
//     .join("");
// }

// function descendingOrder(n) {
//   return parseInt(n.toString().split("").sort().reverse().join(""));
// }
