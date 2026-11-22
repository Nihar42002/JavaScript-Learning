/*
What is a prototype?
A prototype is another object that JavaScript checks when an object does not
have a property or method of its own. This is called prototype inheritance.

Why use prototypes?
They let multiple objects share the same methods instead of creating a separate
copy of each method for every object. This can make code easier to reuse and
organize. Each object can still keep its own data, such as a name or age.

In this example, person1 and person2 have their own name and age, but both
inherit the introduce() and haveBirthday() methods from personPrototype.
person3 defines its own introduce() method, which takes priority over the
inherited method with the same name.
*/

// A prototype is an object that other objects can inherit properties and methods from.
const personPrototype = {
    // "this" refers to the person object that calls introduce().
    introduce: function () {
        console.log(`Hi, my name is ${this.name}. I am ${this.age} years old.`);
    },

    // This method updates the age of the person that calls it.
    haveBirthday: function () {
        this.age++;
        console.log(`Happy birthday, ${this.name}! You are now ${this.age}.`);
    }
};

// Object.create(personPrototype) sets personPrototype as person1's prototype.
const person1 = Object.create(personPrototype);
// These values belong to person1, not to the shared prototype.
person1.name = "Alex";
person1.age = 20;

// person2 also inherits the methods, but has its own name and age.
const person2 = Object.create(personPrototype);
person2.name = "Sam";
person2.age = 25;

// person3 inherits from personPrototype, but also defines its own introduce().
const person3 = Object.create(personPrototype);
person3.name = "Jordan";
person3.age = 30;
person3.introduce = function () {
    console.log(`Hello, I'm ${this.name}, and I have my own introduction.`);
};

// Each object can call methods it inherited from personPrototype.
person1.introduce();
person2.introduce();

// JavaScript uses person3's own introduce() instead of the prototype's method.
// An object's own property takes priority over an inherited property of the same name.
person3.introduce();
person3.haveBirthday(); // This method is still inherited from personPrototype.

// Only person1's age changes because "this" refers to person1 here.
person1.haveBirthday();
person1.introduce();

// These checks confirm that both objects inherit from the same prototype.
console.log("person1 uses personPrototype:", Object.getPrototypeOf(person1) === personPrototype);
console.log("person2 uses personPrototype:", Object.getPrototypeOf(person2) === personPrototype);
console.log("person3 uses personPrototype:", Object.getPrototypeOf(person3) === personPrototype);

// You can also set an existing object's prototype using __proto__.
const person4 = {
    name: "Taylor",
    age: 28
};

person4.__proto__ = personPrototype;

person4.introduce();
person4.haveBirthday();

console.log("person4 uses personPrototype:", person4.__proto__ === personPrototype);