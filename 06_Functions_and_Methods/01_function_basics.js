// 1) Basic function
function greet() {
  console.log("Hello, JavaScript!");
}

greet();

// 2) Function with parameters
function greetUser(name) {
  return "Hello, " + name + "!";
}

console.log(greetUser("Alex"));

// 3) Function that adds two numbers
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log(addNumbers(5, 3));

// 4) Function with a default parameter
function introduce(name = "Guest") {
  console.log("Welcome, " + name);
}

introduce();
introduce("Sam");

// 5) Compact arrow function with one statement
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
console.log(multiply(4, 6));

// 6) Compact arrow function with one parameter
const square = (number) => number * number;
console.log(square(5));

// 7) Arrow function with multiple statements
const checkNumber = (number) => {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
};

console.log(checkNumber(7));
