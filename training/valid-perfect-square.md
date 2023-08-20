---
title: Valid Perfect Square
tags: ["training", "task"]
languages: ["typescript"]
---

# Valid Perfect Square

```typescript
function isPerfectSquare(num: number): boolean {
  let i = 1;
  while (num > 0) {
    num -= i;
    i += 2;
  }
  return num == 0;
}
```

- **Input**:

  - `num`: A non-negative integer.

- **Output**:
  - A boolean value indicating whether the given number is a perfect square.

1. **Initialization**:

   - Initialize a variable `i` with the value 1. This variable will be used to generate consecutive odd numbers.

2. **Loop to Subtract Odd Numbers**:

   - Enter a loop while `num` is greater than 0.
   - In each iteration, subtract the current value of `i` from `num`.
   - Increment `i` by 2 in each iteration to get the next odd number (1, 3, 5, ...).

3. **Check for Perfect Square**:
   - After the loop, check if `num` is equal to 0.
   - If `num` is 0, return `true` indicating that the input number is a perfect square.
   - If `num` is not 0, return `false` indicating that the input number is not a perfect square.

**Techniques Used**:

- **Mathematical Pattern**: The code uses a mathematical pattern based on odd numbers to determine whether the input number is a perfect square.

**Algorithm**:

1. Initialize `i` to 1.

2. Enter a loop while `num` is greater than 0.

   - Subtract the current value of `i` from `num`.
   - Increment `i` by 2 to get the next odd number.

3. After the loop, check if `num` is 0.
   - If `num` is 0, return `true` as the input number is a perfect square.
   - If `num` is not 0, return `false` as the input number is not a perfect square.

**Time Complexity**:

- The time complexity of this code is O(sqrt(n)), where `n` is the input number. This is because the loop runs until `num` becomes 0, and in the worst case, `num` can be reduced to 0 by subtracting at most sqrt(n) odd numbers.

**Space Complexity**:

- The space complexity is O(1) as only a constant amount of extra space is used for the variable `i`.

* [Go back](../readme.md)
