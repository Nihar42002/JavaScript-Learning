// Loop examples with comments

// For loop: iterate a known number of times (1 to 5)
for (let i = 1; i <= 5; i++) {
  console.log("for loop i = " + i);
}

// While loop: repeat while condition is true
let j = 1;
while (j <= 5) {
  console.log("while loop j = " + j);
  j++;
}

// Do...while loop: executes body once before testing condition
let k = 1;
do {
  console.log("do...while loop k = " + k);
  k++;
} while (k <= 5);

// for...in loop: iterate over object keys (useful for objects)
const person = { name: "Alice", age: 25, city: "New York" };
for (const key in person) {
  if (Object.prototype.hasOwnProperty.call(person, key)) {
    console.log("for...in key = " + key + ", value = " + person[key]);
  }
}

// for...of loop: iterate over iterable values (arrays, strings, maps, sets)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log("for...of value = " + fruit);
}

// Example: for...of over a string iterates characters
for (const ch of "hello") {
  console.log("char: " + ch);
}

// Note: for...in gives indexes for arrays, but it's not recommended for arrays
const letters = ["x", "y", "z"];
for (const index in letters) {
  console.log("for...in index = " + index + ", value = " + letters[index]);
}

// End of examples
