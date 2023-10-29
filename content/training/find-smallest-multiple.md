---
title: Find Smallest Multiple
tags: ["training", "task"]
languages: ["typescript"]
---

# Find Smallest Multiple

```typescript
function findSmallestMultiple(n: number): number {
  let lcm = 1;
  for (let i = 2; i <= n; i++) {
    lcm = (lcm * i) / gcd(lcm, i);
  }
  return lcm;
}

function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
```

**`findSmallestMultiple` Function:**

1. **Function Definition:**

   - The `findSmallestMultiple` function takes a parameter `n`, which is assumed to be a positive integer.

2. **Initialization:**

   - Initialize a variable `lcm` to 1. This variable will store the least common multiple of numbers from 1 to `n`.

3. **Loop Through Numbers:**

   - The loop starts from `i = 2` and goes up to `n`.

4. **Calculate LCM:**
   - In each iteration, update `lcm` using the formula:
     - `lcm = (lcm * i) / gcd(lcm, i)`
   - Here, `gcd(lcm, i)` calculates the greatest common divisor (GCD) of `lcm` and `i`.
   - The formula calculates the least common multiple using the relationship: `LCM(a, b) = (a * b) / GCD(a, b)`.

**`gcd` Function:**

1. **Function Definition:**

   - The `gcd` function takes two parameters, `a` and `b`, which are assumed to be non-negative integers.

2. **GCD Calculation:**
   - If `b` is 0, return `a` as the GCD.
   - Otherwise, recursively call the `gcd` function with arguments `b` and `a % b`. This continues until `b` becomes 0, at which point `a` is the GCD.
