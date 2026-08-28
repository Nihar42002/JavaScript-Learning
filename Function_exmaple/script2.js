let fruits = ["Apple", "Banana", "Mango"];

// Example 1: element parameter
fruits.forEach(function (element) {
  console.log(element);
});

// Example 2: element and index parameters
fruits.forEach(function (element, index) {
  console.log(index, element);
});

// Example 3: element, index, and array parameters
fruits.forEach(function (element, index, arr) {
  console.log("Element:", element);
  console.log("Index:", index);
  console.log("Array:", arr);
});

// Example 4: arrow function with index
fruits.forEach((element, index) => {
  console.log(`${index}: ${element}`);
});

// Example 5: using numbers
let numbers = [10, 20, 30, 40];

numbers.forEach((value, indx, arr) => {
  console.log("Value:", value, "Index:", indx, "Array:", arr);
});
