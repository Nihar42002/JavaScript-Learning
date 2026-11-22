/*
What is a constructor?
A constructor is a special method inside a class. JavaScript calls it
automatically when "new" is used to create an object.

Use case:
Constructors create objects with initial values and set up the object's
starting state.
*/

// Example 1: Basic constructor
// Use it when every object of a class needs common properties.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alex", 20);
const person2 = new Person("Sam", 25);

person1.introduce();
person2.introduce();

// Output:
// My name is Alex and I am 20 years old.
// My name is Sam and I am 25 years old.


// Example 2: Constructor with default values
// Default values are useful when some information is optional.
class Product {
    constructor(name, price = 0) {
        this.name = name;
        this.price = price;
    }

    showDetails() {
        console.log(`${this.name}: $${this.price}`);
    }
}

const laptop = new Product("Laptop", 600);
const freeGift = new Product("Free Gift");

laptop.showDetails();
freeGift.showDetails();

// Output:
// Laptop: $600
// Free Gift: $0


// Example 3: Constructor with validation
// Use validation to prevent invalid data when an object is created.
class BankAccount {
    constructor(ownerName, balance = 0) {
        if (typeof ownerName !== "string" || ownerName.trim() === "") {
            throw new Error("Owner name must be a non-empty string.");
        }

        if (balance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }

        this.ownerName = ownerName;
        this.balance = balance;
    }

    showBalance() {
        console.log(`${this.ownerName} has $${this.balance}.`);
    }
}

const account = new BankAccount("Jordan", 1500);
account.showBalance();

// Output:
// Jordan has $1500.


// Example 4: Constructor with derived or calculated values
// Use it to calculate properties immediately when the object is created.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.area = width * height;
    }

    showArea() {
        console.log(`Area: ${this.area}`);
    }
}

const rectangle = new Rectangle(10, 5);
rectangle.showArea();

// Output:
// Area: 50


// Example 5: Constructor that creates objects from an object parameter
// This pattern is common in APIs because it is easier to read and add options.
class Car {
    constructor({ brand, model, year, color = "Black" }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    displayDetails() {
        console.log(`${this.year} ${this.brand} ${this.model} - ${this.color}`);
    }
}

const car1 = new Car({
    brand: "Toyota",
    model: "Corolla",
    year: 2024,
    color: "Red"
});

const car2 = new Car({
    brand: "Honda",
    model: "Civic",
    year: 2023
});

car1.displayDetails();
car2.displayDetails();

// Output:
// 2024 Toyota Corolla - Red
// 2023 Honda Civic - Black


// Example 6: Constructor inheritance with "super"
// "super(...)" calls the parent class constructor.
// Use inheritance when the child class shares properties with a parent class.
class Employee {
    constructor(name, employeeId) {
        this.name = name;
        this.employeeId = employeeId;
    }

    showEmployee() {
        console.log(`${this.name} (ID: ${this.employeeId})`);
    }
}

class Developer extends Employee {
    constructor(name, employeeId, programmingLanguage) {
        super(name, employeeId);
        this.programmingLanguage = programmingLanguage;
    }

    showRole() {
        console.log(
            `${this.name} is a ${this.programmingLanguage} developer.`
        );
    }
}

const developer = new Developer("Taylor", "DEV-101", "JavaScript");
developer.showEmployee();
developer.showRole();

// Output:
// Taylor (ID: DEV-101)
// Taylor is a JavaScript developer.


// Example 7: Constructor with a private property
// "#" makes this property private; it can only be used inside the class.
class User {
    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    checkPassword(password) {
        return password === this.#password;
    }
}

const user = new User("coder123", "secret");
console.log("User:", user.username);
console.log("Password is correct:", user.checkPassword("secret"));

// Output:
// User: coder123
// Password is correct: true

