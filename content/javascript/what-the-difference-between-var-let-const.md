---
title: What is the difference between var, const, and const?
tags: ["question", "interview"]
languages: ["javascript"]
---

# What is the difference between var, const, and const?

In JavaScript, `var`, `let`, and `const` are used to declare variables, but they have different scoping rules and behaviors. Here's a breakdown of their differences:

1. **`var`:**
   - `var` declarations are globally scoped or function scoped.
   - They are hoisted to the top of their scope and can be accessed before the declaration.
   - `var` variables can be reassigned and updated.

   Example:
   ```javascript
   function example() {
       if (true) {
           var x = 10;
       }
       console.log(x); // Outputs 10, because var is function scoped
   }
   ```

2. **`let`:**
   - `let` declarations are block-scoped (limited to the block, statement, or expression where it is defined).
   - They are hoisted to the top of their scope but are not initialized until the interpreter reaches the declaration.
   - `let` variables can be reassigned, but they cannot be redeclared in the same scope.

   Example:
   ```javascript
   function example() {
       if (true) {
           let x = 10;
           console.log(x); // Outputs 10, because let is block scoped
       }
       console.log(x); // Error: x is not defined outside the block
   }
   ```

3. **`const`:**
   - `const` declarations are also block-scoped.
   - They must be initialized during declaration and cannot be reassigned to a different value after initialization.
   - Like `let`, `const` declarations are hoisted to the top of their scope but are not initialized until the interpreter reaches the declaration.

   Example:
   ```javascript
   function example() {
       const x = 10;
       console.log(x); // Outputs 10, const variables cannot be reassigned
       x = 20; // Error: Assignment to constant variable
   }
   ```

In modern JavaScript, it is generally recommended to use `const` by default, and only use `let` when you know the variable's value will change. Avoid using `var` unless you have a specific reason to use it, as its behavior can sometimes lead to unexpected results due to its function scope or global scope. Using `let` and `const` helps in writing more predictable and maintainable code.