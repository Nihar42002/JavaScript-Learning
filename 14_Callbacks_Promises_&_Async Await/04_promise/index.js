// A Promise represents an operation that may complete later. The executor
// function runs immediately and receives resolve and reject functions.
let promise = new Promise((resolve, reject) => {
         console.log("Promise started");
    // This resolves immediately; it does not wait for the timer above.
    // There is no .then() handler here to display the resolved value.
    resolve("Promise resolved");
});

// This promise is rejected immediately. Its timer only prints a message later.
// Without a .catch() handler, the rejection may be reported as unhandled.
let promise2 = new Promise((resolve, reject) => {
         console.log("Promise2 started");
         reject("Promise2 rejected");
});

// This function returns a Promise so the caller can receive its result later.
// The timer calculates and prints the sum, then resolves the Promise with it.
const getpromise =  function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adding", a, "and", b);
            const result = a + b;
            console.log("Result:", result);
            resolve(result);
        }, 4000);
    });
};

// Call getpromise with 10 and 5. The Promise fulfills with 15 after the delay.

console.log("Calling getpromise with 10 and 5...");
let promise3 = getpromise(10, 5);

// .then() runs when promise3 is fulfilled and receives the sum as result.
promise3.then((result) => {
    console.log("Promise3 resolved with result:", result);
});


// This Promise rejects after two seconds. .catch() handles that rejection
// and receives its reason as the error argument.


let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Creating promise4 that will reject after 5 seconds...");
        reject("Promise4 rejected");
    }, 5000);
});
promise4.catch((error) => {
    console.log("Promise4 rejected with error:", error);
});