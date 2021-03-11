// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity,
//are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning
// that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced
//e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the error rate of the printer
//as a string representing a rational whose numerator is the number of errors and the denominator the length of
//the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.

// My 1st solution
function printerError(s) {
  let colors = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
  ];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (!colors.includes(s[i])) count++;
  }

  let result = [count, "/", s.length];
  return result.join("");
}

// My solution with Regex
function printerError(s) {
  let c = /[^a-m]/g;
  let result = "";

  let count = s.match(c);
  if (count === null) {
    result = ["0/", s.length];
    return result.join("");
  } else {
    count = count.length;
  }

  result = [count, "/", s.length];
  return result.join("");
}

// Test
// Should return "3/56"
console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);

// Other solutions
// function printerError(s) {
//     return s.match(/[^a-m]/g).length + "/" + s.length;
// }

// function printerError(s) {
//   var count = 0;
//   for (var i = 0; i < s.length; i++) {
//     if (s[i] > "m") {
//       count++;
//     }
//   }
//   return count + "/" + s.length;
// }

//const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

//var printerError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length;

// function printerError(s) {
//   var m = 0;
//   for (var i = 0; i < s.length; i++) {
//     if (s[i].charCodeAt() > 109 || s[i].charCodeAt() < 97) {
//       m++;
//     }
//   }
//   return m + "/" + s.length;
// }
