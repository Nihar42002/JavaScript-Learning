// Return a Promise that resolves with the sum after a short delay.
function addNumbers(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a + b), 1000);
    });
}

// Async/await makes the Promise result easier to use than .then().
async function numbercall() {
    console.log("Adding numbers...");

    const sum1 = await addNumbers(10, 10);
    console.log("10 + 10 =", sum1);

    const sum2 = await addNumbers(10, 20);
    console.log("10 + 20 =", sum2);

    const sum3 = await addNumbers(1, 2);
    console.log("1 + 2 =", sum3);
}

numbercall();

// IIFE: an async function that runs immediately with its own arguments.
(async function addNumbersImmediately(a, b) {
    const sum = await addNumbers(a, b);
    console.log(`${a} + ${b} =`, sum);
})(5, 7);

