alert("Hello, welcome to the JavaScript basics!,Open the console to see the output of the code examples.");


// Arithmetic operations
const a = 10; // first number
const b = 3; // second number

const sum = a + b; // addition: useful for totals, scores, or counts
const difference = a - b; // subtraction: useful for calculating change or remainder
const product = a * b; // multiplication: useful for area, scaling, or repeated addition
const quotient = a / b; // division: useful for splitting values evenly
const remainder = a % b; // modulus: useful for checking even/odd or cycling values
const power = a ** b; // exponentiation: useful for growth, squares, cubes

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Power:", power);

// Unary operations
let counter = 5; // a mutable value for incrementing/decrementing

const positive = +counter; // unary plus converts to number
const negative = -counter; // unary minus changes sign
counter++; // increment: useful for loops or step-by-step counting
const nextValue = counter; // after increment
counter--; // decrement: useful for countdowns or reverse steps
const previousValue = counter; // after decrement

console.log("Unary positive:", positive);
console.log("Unary negative:", negative);
console.log("After increment:", nextValue);
console.log("After decrement:", previousValue);
console.log("Type of counter:", typeof counter); // typeof is also a unary operator

// Assignment operations
let score = 50; // current score in a game
score += 10; // add 10 points to score
score -= 5; // subtract penalty or damage
score *= 2; // double the score for a bonus
score /= 5; // divide score when splitting reward
score %= 3; // keep only the remainder for modulo-based rules

console.log("Score after assignment operations:", score);

// Comparison operations
const x = 7;
const y = "7";

console.log("x == y (loose equality):", x == y); // compare values only
console.log("x === y (strict equality):", x === y); // compare value and type
console.log("x != y (loose inequality):", x != y); // not equal value
console.log("x !== y (strict inequality):", x !== y); // not equal type or value
console.log("x > 5:", x > 5); // greater than check
console.log("x < 9:", x < 9); // less than check
console.log("x >= 7:", x >= 7); // greater than or equal check
console.log("x <= 7:", x <= 7); // less than or equal check

// Logical operations
const isLoggedIn = true; // user login status
const hasPermission = false; // access permission flag

console.log("Logged in AND has permission:", isLoggedIn && hasPermission); // both must be true
console.log("Logged in OR has permission:", isLoggedIn || hasPermission); // at least one must be true
console.log("NOT logged in:", !isLoggedIn); // reverse the boolean value

// Ternary operation
const accessMessage = isLoggedIn ? hasPermission ? "User can access the page.": "User is logged in but needs permission.": "User must log in first."; // choose text based on conditions

console.log("Access message:", accessMessage);

// Switch operation
const userRole = "editor"; // example role from user data
let dashboardMessage;

switch (userRole) {
  case "admin":
    dashboardMessage = "Show admin dashboard and settings.";
    break;
  case "editor":
    dashboardMessage = "Show editor dashboard with publish tools.";
    break;
  case "viewer":
    dashboardMessage = "Show viewer dashboard with read-only access.";
    break;
  default:
    dashboardMessage = "Show guest dashboard with limited features.";
}

console.log("Dashboard message:", dashboardMessage);

// Use cases in conditions
if (isLoggedIn && !hasPermission) {
  console.log("Access denied: user must have permission even when logged in.");
}
if (x === 7 || score === 1) {
  console.log("Condition matched: either x is 7 or score is 1.");
}
