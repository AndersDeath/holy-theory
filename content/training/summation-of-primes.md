---
title: Summation of primes
tags: ["training", "task"]
languages: ["typescript"]
---

# Summation of primes

```typescript
function sumOfPrimes(n: number): number {

  const isPrime: boolean[] = new Array(n).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

 
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let sum = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      sum += i;
    }
  }

  return sum;
}
```

**Description:**

1. **Initialize Prime Array:**
   - Create an array `isPrime` to track whether each number up to `n - 1` is prime.
   - Set the values at index 0 and 1 to `false` since 0 and 1 are not prime numbers.

2. **Sieve of Eratosthenes:**
   - Use the Sieve of Eratosthenes algorithm to mark non-prime numbers in the `isPrime` array.
   - Iterate through numbers starting from 2 up to the square root of `n`:
     - If the current number is marked as prime (`isPrime[i]` is `true`):
       - Mark all multiples of the current number as not prime by setting `isPrime[j]` to `false`, where `j` ranges from `i * i` to `n - 1` in increments of `i`.

3. **Sum Prime Numbers:**
   - Initialize a variable `sum` to 0 to store the sum of prime numbers.
   - Iterate through numbers from 2 to `n - 1`:
     - If the current number is prime (`isPrime[i]` is `true`), add it to the `sum`.

4. **Return the Sum:**
   - Return the final sum of prime numbers.

The function uses the Sieve of Eratosthenes algorithm to efficiently find and mark prime numbers up to a given limit `n` and then calculates the sum of those prime numbers.