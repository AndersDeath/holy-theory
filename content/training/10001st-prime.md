---
title: 10001st prime
tags: ["training", "task"]
languages: ["typescript"]
---

# 10001st prime

```typescript
function nthPrime(n: number): number {
  const primes: number[] = [2];
  let num: number = 3;

  while (primes.length < n) {
    const sqrtNum: number = Math.sqrt(num);
    let isPrime: boolean = true;

    for (let i: number = 0; i < primes.length && primes[i] <= sqrtNum; i++) {
      if (num % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(num);
    }

    num += 2;
  }

  return primes[primes.length - 1];
}
```

**Solution:**

1. **Initialization:**

   - Initialize an array `primes` with the first prime number, 2.
   - Initialize a variable `num` to 3. This variable represents the number to be checked for primality.

2. **Loop until `primes` array has `n` elements:**

   - Use a `while` loop that continues until the length of the `primes` array is less than `n`.
   - Within the loop:
     - Calculate the square root of `num` and store it in `sqrtNum`.
     - Initialize a boolean variable `isPrime` to `true`.
     - Iterate through the `primes` array up to the square root of `num`:
       - If `num` is divisible by any number in the `primes` array, set `isPrime` to `false` and break the loop.
     - If `isPrime` is `true` after the loop, push `num` into the `primes` array.
     - Increment `num` by 2 to check only odd numbers for efficiency, as even numbers greater than 2 are not prime.

3. **Return the Nth Prime Number:**
   - Once the loop finishes and the `primes` array has `n` elements, return the last element of the `primes` array, which represents the Nth prime number.
