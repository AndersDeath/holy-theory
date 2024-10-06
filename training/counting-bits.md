---
title: Counting Bits
tags: ["training", "task"]
languages: ["typescript"]
---

# Counting Bits

```typescript
function countBits(n: number): number[] {
  let result: number[] = [0];
  let pow = 1;
  let offset = 1;
  for (let i = 1; i <= n; i++) {
    if (i == pow) {
      result[i] = 1;
      pow = pow << 1;
      offset = 1;
    } else {
      result[i] = result[offset] + 1;
      offset++;
    }
  }
  return result;
}
```

**Solution:**

Step-by-step breakdown of the code:

1. The `countBits` function takes an integer `n` as input and returns an array where each element represents the number of 1-bits in the binary representation of the corresponding index.

2. Initialize an array `result` with the first element set to 0. This array will store the count of 1-bits for each index.

3. Initialize variables `pow` and `offset` to keep track of the power of 2 and the current offset, respectively. Start with `pow` set to 1 and `offset` set to 1.

4. Iterate from `i = 1` to `n`.

5. Check if `i` is equal to `pow`. If it is, it means that `i` is a power of 2. In this case:

   - Set `result[i]` to 1, as a power of 2 always has a single 1-bit in its binary representation.
   - Update `pow` by left-shifting it by 1 to get the next power of 2.
   - Reset `offset` to 1.

6. If `i` is not a power of 2:

   - Set `result[i]` to `result[offset] + 1`. This means that the number of 1-bits in `i` is equal to the number of 1-bits in the number at the corresponding offset in the array, plus 1.
   - Increment `offset` by 1 to move to the next offset.

7. Return the `result` array containing the counts of 1-bits for each index.

Techniques used:

1. Bitwise Operations: The code utilizes the bitwise left shift operator (`<<`) to update the `pow` variable by shifting it to the left, effectively calculating the next power of 2.

2. Binary Representation: The solution leverages the binary representation of numbers to count the number of 1-bits at each index.

Summary:

The provided solution efficiently counts the number of 1-bits in the binary representation of each number from 0 to `n` and stores the counts in an array. It achieves this by identifying powers of 2 and updating the count based on the previously calculated counts using bitwise operations.

- [Go back](../readme.md)
