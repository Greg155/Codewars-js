// Write a function that takes in a string and convert that string to Pig Latin.
// Definition of Pig Latin for the purposes of this program:
//     Take the first letter of each word and put it at the end
//     Add 'ay' at the end of each word

// My solution
function pigLatin(phrase) {
  let words = phrase.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i].split("");
    word.push(word[0]);
    word.shift();
    word.push("ay");
    word = word.join("");
    words[i] = word;
  }
  return words.join(" ");
}

// other solution
//const pigLatin = s => s.split` `.map(e => e.slice(1) + e[0].toLowerCase() + 'ay').join` `;

//let pigLatin = phrase => phrase.replace(/(\S)(\S*)/g, '$2$1ay').toLowerCase();

// function pigLatin(s) {
//   return s.toLowerCase().replace(/\w+/g, (m) => m.slice(1) + m[0] + "ay");
// }

// function pigLatin(phrase) {
//   return phrase
//     .split(" ")
//     .map((w) => w.slice(1) + w[0] + "ay")
//     .join(" ")
//     .toLowerCase();
// }
