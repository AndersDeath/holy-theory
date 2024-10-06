---
title: OOP in JavaScript
tags: ['question', 'interview']
languages: ['javascript']
---
# OOP in JavaScript

Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes for organizing code. JavaScript, although primarily a prototype-based language, supports object-oriented programming concepts. Here's how OOP concepts are implemented in JavaScript:

### 1. **Objects:**
In JavaScript, everything is an object (or a primitive data type). Objects are collections of key-value pairs. You can create objects using object literals or constructor functions.

```javascript
// Object literal
let person = {
  name: "John",
  age: 30,
  sayHello: function() {
    console.log("Hello!");
  }
};

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("Alice", 25);
```

### 2. **Classes (Introduced in ECMAScript 6):**
JavaScript introduced the `class` keyword in ECMAScript 6, providing syntactical sugar for constructor functions. Classes are templates for creating objects with specific methods and properties.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello!");
  }
}

let person1 = new Person("Bob", 35);
person1.sayHello();
```

### 3. **Inheritance:**
JavaScript supports inheritance through prototype chaining. Objects can inherit properties and methods from other objects.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof!");
  }
}

let myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound(); // Output: Woof!
```

### 4. **Encapsulation:**
JavaScript doesn't have built-in support for private variables, but closures can be used to achieve encapsulation.

```javascript
function Counter() {
  let count = 0;

  this.increment = function() {
    count++;
  };

  this.getCount = function() {
    return count;
  };
}

let counter = new Counter();
counter.increment();
console.log(counter.getCount()); // Output: 1
```

### 5. **Polymorphism:**
JavaScript allows objects of different classes to be treated as objects of a common superclass through dynamic typing and duck typing.

```javascript
class Cat {
  makeSound() {
    console.log("Meow!");
  }
}

class Duck {
  makeSound() {
    console.log("Quack!");
  }
}

function makeAnimalSound(animal) {
  animal.makeSound();
}

let myCat = new Cat();
let myDuck = new Duck();

makeAnimalSound(myCat); // Output: Meow!
makeAnimalSound(myDuck); // Output: Quack!
```

JavaScript's object-oriented features provide flexibility and allow developers to create complex applications following the principles of OOP.