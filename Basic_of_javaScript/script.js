alert("Hello, welcome to the JavaScript basics!,Open the console to see the output of the code examples.");


//1 variable example using var
var name = "Alice"; // var is function-scoped and can be reassigned

// 2 let examples: block-scoped variables
let age = 30; // use let when the value can change later
let isStudent = false; // use let for mutable boolean flags

// 3 constant examples: const values cannot be reassigned
const country = "Nepal"; // use const for fixed values
const pi = 3.14159; // constant numeric value
const maxItems = 10; // constant configuration value

// 3 object examples: grouped values in a single structure
const user = {
  firstName: "Alice",
  lastName: "Sharma",
  age: 30,
}; // object to store related user data

const product = {
  name: "Book",
  price: 15.99,
  inStock: true,
}; // object to describe a product

const address = {
  city: "Kathmandu",
  country: "Nepal",
  zipCode: "44600",
}; // object for location details

// 5 datatype examples
const stringValue = "Hello"; // string datatype
const numberValue = 42; // number datatype
const booleanValue = true; // boolean datatype
const objectValue = { sample: "data" }; // object datatype
const undefinedValue = undefined; // undefined datatype

// Use of these values in code
console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);
console.log("User object:", user);
console.log("Product object:", product);
console.log("Address object:", address);
console.log("Data types:", stringValue, numberValue, booleanValue, objectValue, undefinedValue);


