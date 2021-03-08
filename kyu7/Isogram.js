// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only
// letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// My solution
function isIsogram(str) {
  if (!str.length) {
    return true;
  }
  let arrayOfLetters = str.toUpperCase().split("");
  for (let letter of arrayOfLetters) {
    for (let i = 0; i < arrayOfLetters.length; i++) {
      if (i !== arrayOfLetters.indexOf(letter)) {
        if (letter === arrayOfLetters[i]) {
          return false;
        }
      }
    }
  }
  return true;
}

// Test
// Should be true
console.log("1 -", isIsogram("Dermatoglyphics"));
// Should be true
console.log("2 -", isIsogram("isogram"));
// Should be false, "same chars may not be adjacent"
console.log("3 -", isIsogram("aba"));
// Should be false, "same chars may not be same case"
console.log("4 -", isIsogram("moOse"));
//  Should be false
console.log("5 -", isIsogram("isIsogram"));
// Should be true, "an empty string is a valid isogram"
console.log("6 -", isIsogram(""));

/// One solution

// function isIsogram(str){
//     return !str.match(/([a-z]).*\1/i);
// }
