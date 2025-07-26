---
title: JavaScript data types
tags: ["question", "interview"]
languages: ["javascript"]
---

# JavaScript data types

![JavaScript data types](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/javascript-data-types.png)

JavaScript has several built-in data types that can be categorized into two main groups: **primitive** and **non-primitive (complex)** data types. Here’s a breakdown of each:

### 1. **Primitive Data Types**
   - These are immutable, meaning their values cannot be changed once created.

   #### a. **String**
   - Represents textual data.
   - Enclosed in single (`' '`), double (`" "`), or template literals (`` ` ` ``).
   - **Example**: `let name = "Alice";`

   #### b. **Number**
   - Represents both integer and floating-point numbers.
   - Special numeric values: `Infinity`, `-Infinity`, and `NaN` (Not a Number).
   - **Example**: `let age = 25;`

   #### c. **BigInt**
   - Allows representation of integers beyond the `Number` type's safe range.
   - Created by appending `n` to the end of an integer.
   - **Example**: `let bigInt = 12345678901234567890n;`

   #### d. **Boolean**
   - Represents logical values: `true` or `false`.
   - **Example**: `let isAvailable = true;`

   #### e. **Undefined**
   - Indicates a variable has been declared but not assigned a value.
   - **Example**: `let score; // score is undefined`

   #### f. **Null**
   - Represents an intentional absence of any value (like a "nothing" value).
   - **Example**: `let user = null;`

   #### g. **Symbol**
   - Represents a unique identifier, primarily used as keys in objects to avoid naming conflicts.
   - **Example**: `let id = Symbol("uniqueID");`

### 2. **Non-Primitive (Complex) Data Types**
   - These are mutable, meaning their values can be changed, and they are stored by reference.

   #### a. **Object**
   - Used to store collections of data and more complex entities.
   - Composed of key-value pairs, where keys are strings (or Symbols).
   - **Example**: 
     ```javascript
     let user = {
       name: "Alice",
       age: 25
     };
     ```

   #### b. **Array**
   - Special type of object used to store ordered collections.
   - Indexed numerically, starting from 0.
   - **Example**: `let colors = ["red", "green", "blue"];`

   #### c. **Function**
   - A callable object used to define reusable blocks of code.
   - Functions are first-class objects in JavaScript.
   - **Example**:
     ```javascript
     function greet() {
       return "Hello!";
     }
     ```

### 3. **Special Types**

   #### a. **Date**
   - An object representing dates and times.
   - **Example**: `let today = new Date();`

   #### b. **RegExp (Regular Expression)**
   - An object used for pattern matching in strings.
   - **Example**: `let pattern = /ab+c/;`

### Type Checking in JavaScript
- You can check the type of a variable using `typeof`.
- **Example**:
  ```javascript
  typeof "Hello"; // "string"
  typeof 42; // "number"
  typeof true; // "boolean"
  typeof undefined; // "undefined"
  typeof null; // "object" (this is a quirk in JavaScript)
  ```

These data types allow JavaScript to handle a wide range of data structures and make it a versatile language for both simple scripts and complex applications.