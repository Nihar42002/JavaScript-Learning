// Array loop examples: traditional for, for...of, forEach,
// for...in, while, and do...while. Run with `node` or in browser console.

const numbers = [10, 20, 30, 40, 50];
console.log('Array:', numbers);

// 1) Traditional for loop (index-based)
console.log('\n1) Traditional for loop');
for (let i = 0; i < numbers.length; i++) {
	console.log(`index ${i} ->`, numbers[i]);
}

// 2) for...of (value-based, ES6)
console.log('\n2) for...of loop');
for (const value of numbers) {
	console.log('value ->', value);
}

// 3) Array.prototype.forEach (callback)
console.log('\n3) forEach');
numbers.forEach((val, idx) => {
	console.log(`forEach idx ${idx} ->`, val);
});

// 4) for...in (iterates keys / indices) — shows indices as strings
console.log('\n4) for...in (indices)');
for (const idx in numbers) {
	console.log(`for...in index ${idx} (type ${typeof idx}) ->`, numbers[idx]);
}

// 5) while loop
console.log('\n5) while loop');
let i = 0;
while (i < numbers.length) {
	console.log(`while idx ${i} ->`, numbers[i]);
	i++;
}

// 6) do...while loop
console.log('\n6) do...while loop');
let j = 0;
do {
	console.log(`do...while idx ${j} ->`, numbers[j]);
	j++;
} while (j < numbers.length);

// Extra: map/filter/reduce quick demos
console.log('\nExtras: map, filter, reduce');
const doubled = numbers.map(n => n * 2);
console.log('map (doubled) ->', doubled);
const filtered = numbers.filter(n => n >= 30);
console.log('filter (>=30) ->', filtered);
const sum = numbers.reduce((acc, v) => acc + v, 0);
console.log('reduce (sum) ->', sum);

// Small note: avoid using for...in for arrays in production — prefer for, for...of, or forEach.

