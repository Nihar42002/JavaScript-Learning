let English = prompt("Enter The Marks Of English");
let Maths = prompt("Enter The Marks Of Maths");
let SS = prompt("Enter The Marks Of SS");

// Convert prompt strings to numbers before adding them
let Total = (Number(English) + Number(Maths) + Number(SS)) / 3;

let Grade;

// Use switch(true) when each case is a condition
switch (true) {
  case Total >= 90:
    Grade = "A+";
    break;
  case Total >= 80:
    Grade = "A";
    break;
  case Total >= 70:
    Grade = "B+";
    break;
  case Total >= 60:
    Grade = "B";
    break;
  case Total >= 50:
    Grade = "C";
    break;
  case Total >= 40:
    Grade = "D";
    break;
  default:
    Grade = "Failed";
}

console.log("Average marks:", Total);
console.log("Grade:", Grade);
