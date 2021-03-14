// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

// My solution
function partsSums(ls) {
  let sum = ls.reduce((acc, cur) => acc + cur, 0);
  let result = [];
  let value = 0;
  let i = 0;
  let isFinish = false;
  while (isFinish !== true) {
    result.push(sum);
    if (i == ls.length) isFinish = true;
    value = ls[i] || 0;
    sum -= value;
    i++;
  }
  return result;
}

// Other solutions
// function partsSums(ls) {
//   ls.unshift(0);
//   let sum = ls.reduce((p, c) => p + c, 0);
//   return ls.map((v) => (sum = sum - v));
// }

// function partsSums(ls) {
//     let res = new Array(ls.length + 1);
//     res[ls.length] = 0;
//     for (let i = ls.length - 1; i >= 0; i--)
//       res[i] = res[i + 1] + ls[i];
//     return res;
//   }

// function partsSums(ls) {
//     let r = [0];
//     for(let i in ls.reverse()){
//      r.push(ls[i]+r[i]);
//     }
//     return r.reverse();
// }

//const partsSums = ls => ls.reduceRight((res, el) => (res.push(res[res.length - 1] + el), res), [0]).reverse();

// const partsSums = ls =>
//   (sum => [sum, ...ls.map(val => sum = sum - val)])
//   (ls.reduce((pre, val) => pre + val, 0));
