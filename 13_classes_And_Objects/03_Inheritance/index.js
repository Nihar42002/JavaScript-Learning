/*
Inheritance allows one class to reuse properties and methods from another class.
The class that gives properties is called the parent (or base) class.
The class that receives properties is called the child (or derived) class.

Run this file in a browser or Node.js to see the console output.
*/


// Example 1: Basic inheritance
// Person is the parent class. It stores data common to every person.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Student inherits name, age, and introduce() from Person.
// "extends" creates the inheritance relationship.
class Student extends Person {
    constructor(name, age, course) {
        // super() calls the parent constructor and initializes name and age.
        super(name, age);
        this.course = course;
    }

    study() {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}

const student = new Student("Alex", 20, "JavaScript");
student.introduce(); // Inherited method
student.study();     // Method unique to Student

// Output:
// Hello, my name is Alex and I am 20 years old.
// Alex is studying JavaScript.


// Example 2: Method override
// A child class can provide a different version of a parent method.
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    // This method replaces (overrides) Animal.makeSound().
    makeSound() {
        console.log(`${this.name} says: Woof!`);
    }
}

class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} says: Meow!`);
    }
}

const dog = new Dog("Bruno");
const cat = new Cat("Milo");

dog.makeSound();
cat.makeSound();

// Output:
// Bruno says: Woof!
// Milo says: Meow!


// Example 3: Using super() inside a method
// super.makeSound() calls the parent class method from the child class.
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showDetails() {
        console.log(`Employee: ${this.name}`);
        console.log(`Salary: $${this.salary}`);
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    showDetails() {
        // Reuse the parent method, then add information about the child.
        super.showDetails();
        console.log(`Department: ${this.department}`);
    }
}

const manager = new Manager("Taylor", 50000, "Development");
manager.showDetails();

// Output:
// Employee: Taylor
// Salary: $50000
// Department: Development


// Example 4: Multilevel inheritance
// A child class can become the parent of another child class.
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} vehicle started.`);
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    showModel() {
        console.log(`Model: ${this.model}`);
    }
}

class ElectricCar extends Car {
    constructor(brand, model, batteryLevel) {
        super(brand, model);
        this.batteryLevel = batteryLevel;
    }

    showBattery() {
        console.log(`Battery level: ${this.batteryLevel}%`);
    }
}

const tesla = new ElectricCar("Tesla", "Model 3", 90);
tesla.start();     // Inherited from Vehicle
tesla.showModel(); // Inherited from Car
tesla.showBattery();

// Output:
// Tesla vehicle started.
// Model: Model 3
// Battery level: 90%