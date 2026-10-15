// 1. map(): creates a new array by changing every element

// Example 1: square every number
let numbers = [1, 2, 3, 4];
let squares = numbers.map(function (number) {
  return number * number;
});
console.log(squares); // [1, 4, 9, 16]

// Example 2: convert every name to uppercase
let names = ["alice", "bob", "charlie"];
let upperCaseNames = names.map((name) => {
  return name.toUpperCase();
});
console.log(upperCaseNames); // ["ALICE", "BOB", "CHARLIE"]

// 2. filter(): creates a new array with elements that pass a condition

// Example 1: get even numbers
let values = [10, 15, 20, 25, 30];
let evenValues = values.filter(function (value) {
  return value % 2 === 0;
});
console.log(evenValues); // [10, 20, 30]

// Example 2: get long names
let students = ["Aman", "Priya", "Christopher", "Neha"];
let longNames = students.filter((student) => {
  return student.length > 4;
});
console.log(longNames); // ["Priya", "Christopher"]

// 3. reduce(): combines all elements into one final value

// Example 1: calculate the total
let prices = [100, 250, 50, 300];
let total = prices.reduce(function (sum, price) {
  return sum + price;
}, 0);
console.log(total); // 700

// Example 2: find the largest number
let scores = [78, 92, 85, 96, 88];
let highestScore = scores.reduce((highest, score) => {
  return score > highest ? score : highest;
}, 0);
console.log(highestScore); // 96
