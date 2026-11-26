// Callbacks let us run code after an operation finishes. Nesting callbacks
// repeatedly creates "callback hell", which is harder to read and maintain.
function sum(a, b, nextcalculation) {
    setTimeout(() => {
        console.log("Adding", a, "and", b);
        const result = a + b;
        console.log("Result:", result);

        if (nextcalculation !== undefined) {
            // The next callback receives the sum as a and 5 as b.
            nextcalculation(result, 5);
        }
    }, 3000);
}

sum(10, 5, function (a, b) {
    // a is 15 (the first sum); b is 5. Call sum again with these values.
    sum(a, b, function (a, b) {
        // a is now 20; b is still 5. Nesting another callback adds complexity.
        sum(a, b, function (a, b) {
            // a is now 25; b is still 5.
            console.log("Final callback received a =", a, "and b =", b);
        });
    });
});

// Output (each sum takes 3 seconds, so the chain takes about 9 seconds):
// Adding 10 and 5
// Result: 15
// Adding 15 and 5
// Result: 20
// Adding 20 and 5
// Result: 25
// Final callback received a = 25 and b = 5