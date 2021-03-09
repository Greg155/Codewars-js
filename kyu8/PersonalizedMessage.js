//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//Use conditionals to return the proper message: if name = ower => "Hello boss" // name != ower => "hello guest"

// My solution
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

// Test
console.log(greet("Daniel", "Daniel"));
console.log(greet("Greg", "Daniel"));

// Others solutions
// function greet (name, owner) {
//     return `Hello ${name==owner?'boss':'guest'}`
//   }
