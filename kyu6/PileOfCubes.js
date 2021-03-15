// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3,
//the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
// The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer
//n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// My solutions
function findNb(m) {
  let value = 0;
  let cpt = 0;
  while (value < m) {
    cpt++;
    value += cpt ** 3;
  }
  let diff = value - m;
  if (diff === 0) {
    return cpt;
  } else {
    return -1;
  }
}

// Test

// Should be 2022
console.log(findNb(4183059834009));
// Should be -1
console.log(findNb(24723578342962));
// Shoulde 4824
console.log(findNb(40539911473216));

// Other solutions
// function findNb(m) {
//     var n = 0
//     while (m > 0) m -= ++n**3
//     return m ? -1 : n
//   }

//function findNb(m) {
//   let n = 0;
//   let sum = 0;
//   while (sum < m) {
//     n++;
//     sum += Math.pow(n, 3);
//   }
//   return sum === m ? n : -1;
// }

// function findNb(m) {
//   // your code
//   var n = 0;

//   while (m > 0) m -= Math.pow(++n, 3);

//   return m ? -1 : n;
// }
