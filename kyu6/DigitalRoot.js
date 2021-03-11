//Digital root is the recursive sum of all the digits in a number.
//Given n, take the sum of the digits of n. If that value has more than one digit,
//continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// my solution
function digital_root(n) {
  let sum = 0;
  String(n)
    .split("")
    .map((num) => {
      sum += Number(num);
    });
  return sum >= 10 ? digital_root(sum) : sum;
}

// Test

// Should return 7
console.log(digital_root(16));
// Should return 6
console.log(digital_root(456));

// Other solutions
//  Nice one
//  function digital_root(n) {
//     return (n - 1) % 9 + 1;
//   }

// function digital_root(n) {
//   if (n < 10) return n;

//   return digital_root(
//     n
//       .toString()
//       .split("")
//       .reduce(function (acc, d) {
//         return acc + +d;
//       }, 0)
//   );
// }

// function digital_root(n) {
//   n = eval(n.toString().split("").join("+"));

//   if (n > 9) {
//     return digital_root(n);
//   }

//   return n;
// }
