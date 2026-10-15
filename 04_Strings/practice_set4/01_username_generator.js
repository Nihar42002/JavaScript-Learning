let Name = prompt("Enter Your Name: ");
let surName = prompt("Enter Your Surname: ");

if (Name === null || surName === null || Name.trim() === "" || surName.trim() === "") {
    alert("Please refresh the page and enter your name and surname.");
} else {
    let random = Math.floor(Math.random() * 1000) + 1;

    let userName = Name + surName + random + "@gmail.com";

    console.log(userName);
}