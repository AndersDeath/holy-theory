---
title: Multiples of 3 and 5
tags: ['training', 'task']
languages: ['typescript']
---
# Multiples of 3 and 5

```typescript
function multiplesOf3and5(number: number): number {
  let sum: number = 0;
  for (let i: number = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

multiplesOf3and5(1000);
```

### Step-by-Step:

1. **Initialization:**
   - `let sum: number = 0;`: Initialize a variable `sum` to store the sum of multiples of 3 and 5. Initially set it to 0.

2. **Loop through Numbers:**
   - `for (let i: number = 0; i < number; i++) {`: Start a loop from `i = 0` and continue until `i` is less than the given `number`.

3. **Check Multiples:**
   - `if (i % 3 === 0 || i % 5 === 0) {`: Check if the current number `i` is divisible by 3 or 5 (i.e., if the remainder of the division by 3 or 5 is 0).

4. **Sum Calculation:**
   - `sum += i;`: If the current number is a multiple of 3 or 5, add it to the `sum` variable.

5. **Return the Sum:**
   - `return sum;`: After the loop is complete, return the calculated sum of multiples of 3 and 5 within the given range.

6. **Function Call:**
   - `multiplesOf3and5(1000);`: Call the function with the argument 1000. In this case, the function will find and return the sum of all multiples of 3 or 5 below 1000.

The function calculates the sum of multiples of 3 or 5 up to the given number (1000 in this case) and returns the result.