// setTimeout schedules work without stopping the code that follows.
console.log("Start");
setTimeout(() => {
    console.log("This message appears after 3 seconds.");
}, 3000);
console.log("End");
// "End" appears before the delayed message.
