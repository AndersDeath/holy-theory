---
title: Special pythagorean triplet
tags: ["training", "task"]
languages: ["typescript"]
---

# Special pythagorean triplet

```typescript
function specialPythagoreanTriplet(n: number): number | null {
    for (let a = 1; a < n / 3; a++) {
        for (let b = a + 1; b < n / 2; b++) {
            const c = n - a - b;
            if (a * a + b * b === c * c) {
                return a * b * c;
            }
        }
    }
    return null;
}
```
**Description:**

1. **Outer Loop (Variable `a`):**
   - The outer loop iterates through possible values of `a` from 1 to `(n / 3) - 1`. 
   - The condition `a < n / 3` ensures that `a` is less than one-third of the total perimeter `n`.

2. **Inner Loop (Variable `b`):**
   - The inner loop iterates through possible values of `b` from `a + 1` to `(n / 2) - 1`. 
   - The condition `b < n / 2` ensures that `b` is less than half of the total perimeter `n`.
   - This condition also guarantees that `c = n - a - b` is greater than 0.

3. **Calculate `c` and Check for Pythagorean Triple:**
   - Inside the inner loop, calculate `c` as the remaining value to fulfill the perimeter condition: `c = n - a - b`.
   - Check if the current combination of `a`, `b`, and `c` forms a Pythagorean triplet using the condition `a^2 + b^2 === c^2`.
   - If a Pythagorean triplet is found, return the product of `a`, `b`, and `c` (`a * b * c`).

4. **Return `null` if No Triplet is Found:**
   - If the loops finish without finding any Pythagorean triplet, the function returns `null` to indicate that no such triplet exists for the given perimeter `n`.