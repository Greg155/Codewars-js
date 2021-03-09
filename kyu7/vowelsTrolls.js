// Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//Note: for this kata y isn't considered a vowel.

// My solution
function disemvowel(str) {
  let vowels = "aeiou";
  let arrayStr = str.split("");

  let strFinal = arrayStr.map((l) => {
    if (!vowels.includes(l.toLowerCase())) {
      return l;
    }
  });

  for (let i = 0; i < strFinal.length; i++) {
    if (strFinal[i] === undefined) {
      strFinal.splice(i, 1);
    }
  }

  strFinal = strFinal.join("").toString();

  return strFinal;
}

// Test
// Should be "Ths wbst s fr lsrs LL!"
console.log(disemvowel("This website is for losers LOL!"));
