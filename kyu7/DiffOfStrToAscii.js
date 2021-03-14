//Given a string, turn each character into its ASCII character code and join them together to create a number = total1
// If that number contain the number 7 , create a another number (total2) where the 7 of total1 are 1
// make the difference of total1 and total2

// My solution
function calc(x) {
  let total1 = x.split("");
  for (let i = 0; i < total1.length; i++) {
    total1[i] = total1[i].charCodeAt(0);
  }

  total1 = total1.join("").split("");
  let total2 = [];

  for (let value of total1) {
    value !== "7" ? total2.push(value) : total2.push("1");
  }

  let reducer = (acc, cur) => parseInt(acc) + parseInt(cur);

  return total1.reduce(reducer) - total2.reduce(reducer);
}

// Test
// Should return 6
console.log(calc("ABC"));
// Should return 30
console.log(calc("aaaaaddddr"));
// Should return 96
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));

// Other solutions
// const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6

// function calc(x) {
//   let sum = (n) => [...n].reduce((a, b) => +a + +b);
//   let total1 = x.replace(/./g, (x) => x.charCodeAt(0));
//   let total2 = total1.replace(/7/g, "1");
//   return sum(total1) - sum(total2);
// }
