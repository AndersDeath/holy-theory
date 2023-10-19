---
title: Largest prime factor
tags: ['training', 'task']
languages: ['typescript']
---
# Largest prime factor

```typescript
function largestPrimeFactor(number: number): number {
    let largestFactor: number = 1;

    while (number % 2 === 0) {
        largestFactor = 2;
        number = number / 2;
    }

for (let i: number = 3; i <= Math.sqrt(number); i += 2) {
        while (number % i === 0) {
            largestFactor = i;
            number = number / i;
        }
    }

    if (number > 2) {
        largestFactor = number;
    }

    return largestFactor;
}

```

**Step-by-step breakdown:**

**Step 1:** The `while` loop checks if the given number is divisible by 2. If it is, it divides the number by 2 and updates the `largestFactor` variable to 2. This step continues until the number becomes odd.

**Step 2:** The `for` loop starts from 3 and iterates up to the square root of the remaining number (`Math.sqrt(number)`). It increments `i` by 2 in each iteration to check only odd numbers (skipping even numbers other than 2 for efficiency).

**Step 3:** Within the `for` loop, the `while` loop checks if the current factor (`i`) divides the remaining number. If it does, it updates the `largestFactor` variable and divides the number by `i`.

**Step 4:** If the current factor divides the number, the `largestFactor` is updated to the current factor, and the number is divided by the current factor.

**Step 5:** After the `for` loop, there might be a remaining number greater than 2, which could be a prime factor. The `if` statement checks if the remaining number is greater than 2 and updates the `largestFactor` variable if necessary.

**Step 6:** Finally, the function returns the `largestFactor` variable, which holds the largest prime factor of the given number.