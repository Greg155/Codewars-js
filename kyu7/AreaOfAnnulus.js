//When given the length of the arrow as a, where a is an integer and ≥ 1, calculate the area of the annulus (the grey ring).
//Round the answer to two decimal places. In case you need pi, you can use the standard Math.PI/M_PI.

// My solution
function annulusArea(a) {
  let radius = a / 2;
  let area = Math.PI * radius ** 2;
  return parseFloat(area.toFixed(2));
}

// Test
// Should be 38.48
console.log(annulusArea(7));

// Should be 132.73
console.log(annulusArea(13));

// Others solutions
// function annulusArea(a) {
//   return Math.round(Math.PI * a * a * 25) / 100;
// }

//annulusArea=(a)=>+(Math.PI*a*a/4).toFixed(2)
