---
title: Sum square difference
tags: ["training", "task"]
languages: ["typescript"]
---

# Sum square difference

## Naive solution

```typescript
function sumSquareDifference(n: number):number {
  let sumSquares: number = 0;
  let squareSum:number = 0;
  for(let i = 1; i <= n; i++) {
    sumSquares += Math.pow(i, 2);
    squareSum +=i;
  }

  return Math.pow(squareSum,2) - sumSquares;
}
```

1. **Initialize Variables:**
   - Initialize two variables: `sumSquares` and `squareSum` to keep track of the sum of squares and the sum of the numbers, respectively. Both are initially set to 0.

2. **Loop through Numbers:**
   - Use a `for` loop to iterate through numbers from 1 to `n`.
   - In each iteration:
     - Add the square of the current number to the `sumSquares` variable using `Math.pow(i, 2)`.
     - Add the current number to the `squareSum` variable.

3. **Calculate Square of the Sum:**
   - Calculate the square of the sum of numbers from 1 to `n` using `Math.pow(squareSum, 2)`.

4. **Calculate the Difference:**
   - Calculate the difference between the square of the sum and the sum of squares.
   - Subtract `sumSquares` from the square of the sum.
   - Return the result.

5. **Return Result:**
   - Return the calculated difference, which represents the difference between the sum of the squares and the square of the sum of the first `n` natural numbers.

## Optimized solution

```typescript
function sumSquareDifference(n: number): number {
    const sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
    const sum = (n * (n + 1)) / 2;
    const squareOfSum = Math.pow(sum, 2);
    return squareOfSum - sumOfSquares;
}
```


1. **Calculate the Sum of Squares:**
   - The sum of squares of the first `n` natural numbers can be calculated using the formula 
   - Calculate `sumOfSquares` using the formula.

2. **Calculate the Sum of Numbers:**
   - The sum of the first `n` natural numbers can be calculated using the formula
   - Calculate `sum` using the formula.

3. **Calculate the Square of the Sum:**
   - Calculate the square of the sum by squaring the value obtained in step 2 (`sum`) using `Math.pow(sum, 2)`.

4. **Calculate the Difference:**
   - Calculate the difference between the square of the sum and the sum of squares.
   - Subtract `sumOfSquares` from `squareOfSum`.

5. **Return Result:**
   - Return the calculated difference, which represents the difference between the sum of the squares and the square of the sum of the first `n` natural numbers.