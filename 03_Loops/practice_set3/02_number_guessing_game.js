//This loop is used to generate the random numeber between 1 to 10 and floor is used to round off that number

let random = Math.floor(Math.random() * 10) + 1;
console.log(random);
let userNumber = Number(prompt("Enter The Number :"));

while(random !== userNumber){
 userNumber = Number(prompt("Enter the correct number: "));
}

console.log("You Have Enter The Correct Number!!");