---
title: Perfect Number
tags: ["training", "task"]
languages: ["typescript"]
---

# Perfect Number

```typescript
function checkPerfectNumber(num: number): boolean {
  if (num <= 1) {
    return false;
  }

  let sum = 1;
  const sqrt = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) {
        sum += num / i;
      }
    }
  }

  return sum === num;
}
```

The `checkPerfectNumber` function determines whether a given number is a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding itself).

Here's how the function works:

1. If the given number `num` is less than or equal to 1, it's not a perfect number. In this case, the function returns `false`.

2. Initialize a variable `sum` with the value `1`. This is because all numbers are divisible by `1`, so we include it as a proper divisor.

3. Calculate the square root of the given number `num` using `Math.sqrt(num)` and store it in the variable `sqrt`. We only need to check divisors up to the square root of the number.

4. Iterate from `i = 2` to `i <= sqrt`. For each value of `i`, check if `num` is divisible by `i` using the condition `num % i === 0`.

   a. If `num` is divisible by `i`, add `i` to the `sum` to account for the proper divisor.

   b. Additionally, if `i` is not equal to `num / i`, then add `num / i` to the `sum`. This ensures that both divisors are counted if they are distinct.

5. After the loop, compare the `sum` with the original `num`. If they are equal, then the given number is a perfect number, and the function returns `true`. Otherwise, it returns `false`.

**Techniques Used:**

- **Mathematical Properties:** The function leverages the concept of perfect numbers, which are defined as numbers equal to the sum of their proper divisors.

- **Looping and Conditionals:** The function uses loops to iterate through possible divisors and conditional statements to handle proper divisor addition.

**Summary:**

The `checkPerfectNumber` function checks whether a given number is a perfect number by calculating its proper divisors and comparing their sum to the original number. If the sum of proper divisors is equal to the original number, the function returns `true`, indicating that the number is a perfect number. Otherwise, it returns `false`.
