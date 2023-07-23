---
title: Fibonacci Number
tags: ['training', 'task']
languages: ['typescript']
---
# Fibonacci Number

```typescript
function fib(n: number): number {
 if (n <= 1) {
    return n;
  }
  
  let prev = 0;
  let curr = 1;
  
  for (let i = 2; i <= n; i++) {
    const temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  
  return curr;
};
```

**Solution:**

Step-by-step breakdown of the code:

1. `if (n <= 1) {`: This condition checks if the input `n` is less than or equal to 1. If `n` is 0 or 1, the function returns `n` itself as the Fibonacci number.

2. `let prev = 0;`: This initializes a variable `prev` to store the Fibonacci number from the previous iteration.

3. `let curr = 1;`: This initializes a variable `curr` to store the current Fibonacci number.

4. The loop `for (let i = 2; i <= n; i++) {` starts from `i = 2` because we have already handled the cases when `n` is 0 or 1.

5. `const temp = curr;`: This creates a temporary variable `temp` to store the current `curr` value before updating it.

6. `curr = prev + curr;`: This updates the `curr` variable by adding the previous Fibonacci number (`prev`) to the current one (`curr`). This step calculates the next Fibonacci number in the sequence.

7. `prev = temp;`: This updates the `prev` variable with the previous `curr` value stored in `temp`. This prepares the `prev` variable for the next iteration.

8. The loop continues until `i` reaches the input `n`, and the Fibonacci numbers are calculated iteratively.

9. Finally, the function returns the value of `curr`, which is the nth Fibonacci number.

Summary:

The provided TypeScript function `fib` calculates the nth Fibonacci number using an iterative approach. It starts with `prev = 0` and `curr = 1`, then iteratively calculates the next Fibonacci number by adding the previous two numbers. If the input `n` is less than or equal to 1, the function returns `n` itself as the Fibonacci number.

Techniques used:

1. TypeScript: The code is written in the TypeScript programming language, which is a superset of JavaScript with added type annotations.

2. Loop: The code uses a `for` loop to iteratively calculate the Fibonacci numbers from `2` to `n`.

3. Variables: The variables `prev` and `curr` are used to store the current and previous Fibonacci numbers, respectively.

4. Iterative approach: The function uses an iterative method to calculate the Fibonacci numbers rather than a recursive approach.

* [Go back](../readme.md)