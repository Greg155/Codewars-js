//Write a function that reverses the bits in an integer.
//For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
//You can assume that the number is not negative.

// My solution
function reverseBits(n) {
  // n.toString(2) -> convert in bit,
  // split('').reverse().join('') -> bit to array + reverse + join back to string
  // parseInt(num, base) -> convert the string (num) to a int
  return parseInt(n.toString(2).split("").reverse().join(""), 2);
}

// Test
// should retrun 267
console.log(reverseBits(417));
// should return 417
console.log(reverseBits(267));
// shoudl return 0
console.log(reverseBits(0));
// should return 1087
console.log(reverseBits(2017));
// should return 1023
console.log(reverseBits(1023));
// should return 1
console.log(reverseBits(1024));

// other solutions
//const reverseBits = (n) =>  parseInt([...n.toString(2)].reverse().join(''), 2)
