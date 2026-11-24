/*
try and catch are used to handle errors without stopping the whole program.

- The try block contains code that might cause an error.
- If an error occurs, JavaScript jumps to the catch block.
- The catch block receives an error object and lets us handle the problem.

Run this file in a browser or with Node.js to see the output.
*/


// Program 1: Handling invalid JSON
// JSON.parse() throws an error when the text is not valid JSON.
function readJson(jsonText) {
    try {
        const data = JSON.parse(jsonText);
        console.log("Valid JSON:", data);
    } catch (error) {
        // error.message describes why parsing failed.
        console.log("Invalid JSON:", error.message);
    }
}

readJson('{"name":"Alex","age":20}');
readJson("{name:Alex}");

// Output:
// Valid JSON: { name: 'Alex', age: 20 }
// Invalid JSON: Unexpected token 'n', "{name:Alex}" is not valid JSON


// Program 2: Throwing and catching a custom error
// throw creates an error manually. A catch block can handle it.
function divide(firstNumber, secondNumber) {
    try {
        if (secondNumber === 0) {
            throw new Error("Cannot divide by zero.");
        }

        console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
    } catch (error) {
        console.log("Division error:", error.message);
    }
}

divide(20, 4);
divide(20, 0);

// Output:
// 20 / 4 = 5
// Division error: Cannot divide by zero.


// Program 3: Handling an invalid number
// Number() may convert text into a number. A custom check can reject invalid input.
function calculatePrice() {
    const input = "abc";

    try {
        const price = Number(input);

        if (Number.isNaN(price)) {
            throw new Error("Please enter a valid number.");
        }

        console.log("Price:", price);
    } catch (error) {
        console.log("Input error:", error.message);
    } finally {
        // finally always runs, whether the try block succeeds or fails.
        console.log("Price check finished.");
    }
}

calculatePrice();

// Output:
// Input error: Please enter a valid number.
// Price check finished.