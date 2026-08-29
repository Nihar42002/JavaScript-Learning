// Filtering of number from array which are above 90

let arr = [90, 12, 38 , 45, 56 ,98, 99];

let arr1 = arr.filter(function(val){
    return val >= 90;
});

console.log("NEW ARRAY: ", arr1);

// Taking input from user and Calculating the sum of it nad product of 
// it using ruduce method

let n = Number(prompt("Enter the Number: "));
let arr2 = []

for(let i = 1 ; i <= n ; i++){
arr2[i-1] = i;
}

let total = arr2.reduce(function(pre, curr) {
    return pre + curr;
}, 0);

let product = arr2.reduce(function(pre, curr) {
    return pre * curr;
});

console.log("SUM OF ALL ARRAY",total);
console.log("PRODUCT OF ALL THE VALUES IN ARRAY", product);