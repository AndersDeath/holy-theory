---
title: Promises sequence
tags: ["training", "task"]
languages: ["typescript"]
---

# Promises sequence

```typescript
const a = new Promise((resolve: any, reject: any) => {
  setTimeout(() => {
    console.log("Promise a");
    resolve();
  }, 5000);
});

const b = new Promise((resolve: any, reject: any) => {
  setTimeout(() => {
    console.log("Promise b");
    resolve();
  }, 4000);
});

const c = new Promise((resolve: any, reject: any) => {
  setTimeout(() => {
    console.log("Promise c");
    resolve();
  }, 1000);
});

let q = [a, b, c].reduce((acc: any, f: any) => {
  return acc.then(() => {
    return f;
  });
}, Promise.resolve());
```

This JavaScript code demonstrates the use of Promises to create three asynchronous tasks (`a`, `b`, and `c`). It then uses the `reduce` function to sequence these promises in a specific order, ensuring that each promise resolves before the next one starts. Here's a breakdown of how the code works:

1. Three Promises (`a`, `b`, and `c`) are created. Each Promise simulates an asynchronous operation using the `setTimeout` function. Each promise will print a message when resolved after a specific time delay.

2. The `reduce` function is used to sequentially chain the promises in the order `[a, b, c]`.

3. The `reduce` function starts with an initial value of `Promise.resolve()`. This initial value is a resolved promise, acting as a starting point for the promise chaining.

4. For each promise `f` in the array `[a, b, c]`, the accumulator promise (`acc`) is chained using the `then` method. This creates a sequence where each promise in the array waits for the previous promise to resolve before starting.

5. The `then` method takes a function as an argument, which returns the promise `f`. This ensures that the next promise in the sequence starts only after the previous promise has resolved.

In this specific code, the output will be as follows (assuming that each promise resolves without any errors):

```
Promise c
Promise b
Promise a
```

This is because `Promise c` has the shortest delay (1000 ms), followed by `Promise b` (4000 ms), and then `Promise a` (5000 ms).

**Techniques Used:**

- **Promises:** Promises are used to manage asynchronous operations and ensure that they are executed in a specific order.

**Summary:**

The code demonstrates how to use Promises and the `reduce` function to sequence asynchronous operations, ensuring that they are executed in a particular order based on the timing of their resolutions.
