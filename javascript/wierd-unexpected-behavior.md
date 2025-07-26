---
title: Weird and unexpected behavior of JavaScript
tags: ["question", "interview"]
languages: ["javascript"]
---

# Weird and unexpected behavior of JavaScript

JavaScript is a versatile and powerful programming language, but it has its fair share of quirks and behaviors that can be considered weird or unexpected. Here are more examples:

1. **Type Coercion**: JavaScript's loose typing system can lead to unexpected results when different types are used together:

   ```javascript
   console.log(1 + "1"); // "11"
   console.log(true + 1); // 2
   ```

2. **NaN**: The special value `NaN` can be perplexing:

   ```javascript
   console.log(typeof NaN); // "number"
   console.log(NaN === NaN); // false
   console.log(1 + NaN); // NaN
   ```

3. **Truthy and Falsy Values**: JavaScript's concept of truthy and falsy values can lead to surprises:

   ```javascript
   if ("false") {
     console.log("This will be executed."); // This will be executed.
   }

   if (0) {
     console.log("This will not be executed.");
   }

   console.log(Boolean("")); // false
   console.log(Boolean(0)); // false
   ```

4. **Hoisting**: JavaScript hoists variable and function declarations, which can lead to seemingly unusual behavior:

   ```javascript
   console.log(x); // undefined
   var x = 5;
   ```

5. **Closures**: Closures can cause inner functions to access outer function variables even after the outer function has completed:

   ```javascript
   function outer() {
     var x = 10;

     function inner() {
       console.log(x);
     }

     return inner;
   }

   var closureFunc = outer();
   closureFunc(); // Outputs 10
   ```

6. **NaN Equality**: NaN does not equal itself, making NaN comparisons tricky:

   ```javascript
   console.log(NaN == NaN); // false
   console.log(isNaN(NaN)); // true
   ```

7. **Automatic Semicolon Insertion (ASI)**: JavaScript inserts semicolons in certain situations, affecting code behavior:

   ```javascript
   function example() {
     return;
     {
       value: 42;
     }
   }

   console.log(example()); // undefined
   ```

8. **Variable Declarations Without var/let/const**: Missing variable declarations can lead to global scope pollution:

   ```javascript
   function noVarDeclaration() {
     x = 20; // This becomes a global variable!
   }

   noVarDeclaration();
   console.log(x); // 20
   ```

These examples highlight some of the idiosyncrasies of JavaScript. Understanding these quirks is crucial for writing reliable and predictable JavaScript code.
