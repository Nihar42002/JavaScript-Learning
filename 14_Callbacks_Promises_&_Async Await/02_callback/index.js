// A callback is a function passed to another function to be called later.
// Callbacks let us provide behavior to reuse, handle events, or respond when async work finishes.
function divide(a, b) {
    console.log("Dividing", a, "by", b);
    console.log("Result:", a / b);
}

// divideCallback lets calculate choose which operation to run.
function calculate(a, b, divideCallback) {
    divideCallback(a, b);
}

calculate(10, 2, divide);

// We can also use a callback to delay work. setTimeout() is an example of a function that takes a callback.
console.log("Waiting for 3 seconds...");
setTimeout(() => calculate(10, 2, divide), 3000);

// Output:
// Dividing 10 by 2
// Result: 5
// Waiting for 3 seconds...
// (3 seconds later)
// Dividing 10 by 2
// Result: 5