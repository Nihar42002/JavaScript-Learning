// Return a Promise that resolves with the sum after a short delay.
function addNumbers(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a + b), 2000);
    });
}

// Each .then() runs after the previous Promise resolves.
// Returning the next Promise passes its result along the chain.
addNumbers(10, 5)
    .then((sum) => {
        console.log("First sum:", sum);
        return addNumbers(sum, 5);
    })
    .then((sum) => {
        console.log("Second sum:", sum);
        return addNumbers(sum, 5);
    })
    .then((sum) => {
        console.log("Final sum:", sum);
    })
    // Handle any error that occurs anywhere in the chain.
    .catch((error) => {
        console.error("Could not add the numbers:", error);
    });