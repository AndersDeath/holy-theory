---
title: What is typing system?
tags: ["question", "interview", "theory", "computer-science"]
languages: [""]
---

# What is typing system?

In programming, a **typing system** defines how a language handles types, which are classifications of data (like integers, strings, and booleans). A type system helps a programming language manage how data can be manipulated, how variables can be assigned, and what kinds of operations are permitted.

Here are key concepts in a typing system:

### 1. **Static vs. Dynamic Typing**:
   - **Static Typing**: The type of a variable is known at compile-time. Variables must be explicitly declared with a type. Examples: C, C++, Java.
   - **Dynamic Typing**: The type of a variable is determined at runtime. Variables do not need to be explicitly declared with a type. Examples: Python, JavaScript.

### 2. **Strong vs. Weak Typing**:
   - **Strong Typing**: Types are strictly enforced, and implicit conversions (casting) between types are limited or disallowed unless explicitly handled by the programmer. Example: Python, Java.
   - **Weak Typing**: The language allows implicit conversions between types (for example, automatically converting a string to a number). Example: JavaScript.

### 3. **Type Inference**:
   In some statically typed languages, the compiler can automatically deduce the type of a variable from its value without requiring explicit type annotations. Examples: TypeScript, Kotlin.

### 4. **Nominal vs. Structural Typing**:
   - **Nominal Typing**: Two types are considered compatible if they have the same name or are explicitly declared compatible (inheritance or interface). Example: Java.
   - **Structural Typing**: Two types are compatible if they have the same structure, regardless of their explicit names. Example: TypeScript, Go.

### 5. **Duck Typing**:
   Duck typing is a type system where the type or class of an object is less important than the methods it supports. If an object behaves as expected in a certain context, it is considered to have the right type, even if its formal type is not known. Example: Python, Ruby.

### 6. **Gradual Typing**:
   Gradual typing allows mixing static and dynamic typing. A programmer can start with dynamic typing and later add static typing annotations. Example: TypeScript (JavaScript with types), Python (with type hints).
