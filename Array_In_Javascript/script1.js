// JavaScript array methods

// 1) push() adds one or more items to the end of an array.
const fruitsForPush = ["Apple", "Banana"];
fruitsForPush.push("Mango");
console.log("1) push():", fruitsForPush);

// 2) pop() removes and returns the last item from an array.
const fruitsForPop = ["Apple", "Banana", "Mango"];
const removedFruit = fruitsForPop.pop();
console.log("2) pop():", fruitsForPop, "Removed:", removedFruit);

// 3) toString() converts an array into a comma-separated string.
const fruitsForString = ["Apple", "Banana", "Mango"];
console.log("3) toString():", fruitsForString.toString());

// 4) concat() joins two or more arrays without changing the originals.
const firstFruits = ["Apple", "Banana"];
const secondFruits = ["Mango", "Orange"];
const allFruits = firstFruits.concat(secondFruits);
console.log("4) concat():", allFruits);

// 5) shift() removes and returns the first item from an array.
const fruitsForShift = ["Apple", "Banana", "Mango"];
const firstFruit = fruitsForShift.shift();
console.log("5) shift():", fruitsForShift, "Removed:", firstFruit);

// 6) unshift() adds one or more items to the beginning of an array.
const fruitsForUnshift = ["Banana", "Mango"];
fruitsForUnshift.unshift("Apple");
console.log("6) unshift():", fruitsForUnshift);

// 7) slice(start, end) returns part of an array. The end index is not included.
const fruitsForSlice = ["Apple", "Banana", "Mango", "Orange"];
const selectedFruits = fruitsForSlice.slice(1, 3);
console.log("7) slice(1, 3):", selectedFruits);

// 8) splice() changes an array by adding, removing, or replacing items.

// splice(start)
const fruitsWithOneSpliceInput = ["Apple", "Banana", "Mango", "Orange"];
fruitsWithOneSpliceInput.splice(2);
console.log("8a) splice(2):", fruitsWithOneSpliceInput);

// splice(start, deleteCount)
const fruitsWithTwoSpliceInputs = ["Apple", "Banana", "Mango", "Orange"];
fruitsWithTwoSpliceInputs.splice(1, 2);
console.log("8b) splice(1, 2):", fruitsWithTwoSpliceInputs);

// splice(start, deleteCount, item)
const fruitsWithThreeSpliceInputs = ["Apple", "Banana", "Mango", "Orange"];
fruitsWithThreeSpliceInputs.splice(1, 1, "Pineapple");
console.log("8c) splice(1, 1, 'Pineapple'):", fruitsWithThreeSpliceInputs);
