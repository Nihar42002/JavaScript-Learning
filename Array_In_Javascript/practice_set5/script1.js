
let marks = [85, 97, 44, 37, 76 ,60];
let average = 0;

for(let i = 0; i < marks.length; i++){
    average = average + marks[i];
}

average = average / marks.length;

console.log("Average Marks of the class: ", average);

console.log("\n PRICE PROGRAM BEING");


let price = [250, 645, 300, 900, 50];
let discount = 0;

for(let i = 0 ; i < price.length ; i++){
    discount = price[i] * 0.10;
    price[i] = price[i] - discount;
}

for(const vals of price){
    console.log(`After Discount: `, vals);
}


