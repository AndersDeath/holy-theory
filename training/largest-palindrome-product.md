---
title: Largest palindrome product
tags: ['training', 'task']
languages: ['typescript']
---
# Largest palindrome product

```typescript
function largestPalindromeProduct(n: number): number {
  const upperLimit: number = Math.pow(10, n) - 1;
  const lowerLimit: number = Math.pow(10, n - 1);

  let result: number = 0;

  for (let i: number = upperLimit; i >= lowerLimit; i--) {
    for (let j: number = i; j >= lowerLimit; j--) {
      let product: number = i * j;
      let reversed: string = [...String(product)].reverse().join("");
      if (product === Number(reversed)) {
        result = Math.max(product, result);
        break;
      }
    }
  }

  return result;
}

```

**Step-by-step breakdown:**

1. **Calculate Upper and Lower Limits:**
   - `upperLimit` is calculated as 10^n - 1. It represents the highest n-digit number.
   - `lowerLimit` is calculated as 10^(n-1). It represents the lowest n-digit number.

2. **Initialization:**
   - Initialize a variable `result` to 0. This variable will store the largest palindrome product found.

3. **Nested Loops:**
   - The outer loop runs from `upperLimit` to `lowerLimit` (inclusive). It represents the first factor of the product.
   - The inner loop runs from the current value of the outer loop variable `i` to `lowerLimit` (inclusive). It represents the second factor of the product.

4. **Calculate Product and Check for Palindrome:**
   - Calculate the product of the current values of `i` and `j`.
   - Convert the product to a string, reverse the string, and join it back. This gives the reversed version of the product.
   - Check if the product is equal to its reverse. If yes, it's a palindrome.

5. **Update the Result:**
   - If the current palindrome product is greater than the current `result`, update `result` with this palindrome product.
   - Break out of the inner loop to move to the next value of `i`.

6. **Return the Result:**
   - After both loops complete execution, return the `result`, which holds the largest palindrome product of two n-digit numbers.
