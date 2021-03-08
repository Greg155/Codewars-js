// Implement a function which convert the given boolean value into its string representation.

// My solutions
function booleanToString(b) {
  return b ? "true" : "false";
}

// Test
// Should be true
console.log(booleanToString(true));
// should be false
console.log(booleanToString(false));

// Others solutions
// function booleanToString(b){
//     return b.toString();
//  }

// function booleanToString(b) {
//   return String(b);
// }

// function booleanToString(b) {
//   return `${b}`;
// }

//const booleanToString = b => b ? 'true' : 'false';
