---
title: What is the difference between Call and Apply?
tags: ['question', 'interview']
languages: ['javascript']
---
# What is the difference between Call and Apply?

`call()` and `apply()` are two methods in JavaScript that allow you to invoke a function with a specified `this` value and arguments. They are similar in purpose but differ in how they accept arguments.

### `call()`

The `call()` method calls a function with a given `this` value and individual arguments passed one by one.

**Syntax:**
```javascript
functionName.call(thisValue, arg1, arg2, ...);
```

- **`functionName`**: The function to be called.
- **`thisValue`**: The value to be passed as `this` to the function.
- **`arg1, arg2, ...`**: The arguments to be passed to the function individually.

**Example:**
```javascript
function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person = {
    name: 'John'
};

greet.call(person, 'Hello');
// Output: Hello, John!
```

In this example, `call()` is used to invoke the `greet` function with `person` object as the `this` value and `'Hello'` as the argument.

### `apply()`

The `apply()` method is similar to `call()`, but it accepts arguments as an array.

**Syntax:**
```javascript
functionName.apply(thisValue, [arg1, arg2, ...]);
```

- **`functionName`**: The function to be called.
- **`thisValue`**: The value to be passed as `this` to the function.
- **`[arg1, arg2, ...]`**: An array or array-like object containing the arguments to be passed to the function.

**Example:**
```javascript
function introduce(greeting, age) {
    console.log(`${greeting}, I am ${this.name} and I am ${age} years old.`);
}

const person = {
    name: 'Alice'
};

introduce.apply(person, ['Hi', 30]);
// Output: Hi, I am Alice and I am 30 years old.
```

In this example, `apply()` is used to invoke the `introduce` function with `person` object as the `this` value and `['Hi', 30]` as the arguments passed in an array.

### Differences:

1. **Argument Format**:
   - `call()` accepts arguments individually.
   - `apply()` accepts arguments as an array.

2. **Use Cases**:
   - Use `call()` when you know the exact number of arguments the function expects and you want to pass them individually.
   - Use `apply()` when the number of arguments is not known in advance, or when the arguments are already in an array or array-like object.

In modern JavaScript, you can often use the more versatile spread operator (`...`) to achieve the same result as `apply()` while providing a cleaner syntax, especially when working with arrays. However, `apply()` can still be useful in certain situations, such as when dealing with variadic functions or functions that accept a variable number of arguments.
