---
title: Power of two
tags: ["training", "task"]
languages: ["typescript"]
---

# Power of two

```typescript
function isPowerOfTwo(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  for (let i = 0; i < 32; i++) {
    if ((n & 1) == 1) {
      break;
    }
    n = n >>> 1;
  }
  n = n >>> 1;
  return n == 0;
}
```

This JavaScript code defines a function `isPowerOfTwo` that checks if a given number is a power of 2. Here's how the code works:

1. The function `isPowerOfTwo` takes an integer `n` as input.

2. It first checks if `n` is less than or equal to 0. If it is, the function immediately returns `false` since negative numbers and zero are not powers of 2.

3. The code enters a `for` loop that runs for 32 iterations. This loop is used to check if all bits of `n` are zero after repeatedly right-shifting `n` by one bit.

4. Inside the loop, it checks if the least significant bit of `n` is 1 using the bitwise AND operator (`&`). If the least significant bit is 1, it indicates that `n` is not a power of 2, so the loop is exited.

5. If the least significant bit of `n` is 0, the code right-shifts `n` by one bit (equivalent to dividing by 2).

6. After the loop, the code performs one more right-shift operation on `n`.

7. Finally, the code returns `true` if `n` is 0 after the right-shift operations, indicating that all bits of `n` were zero and it is a power of 2. Otherwise, it returns `false`.

**Techniques Used:**

- **Looping:** The code uses a `for` loop to iterate through the bits of `n` and check if any of them are set.

- **Bitwise Operations:** The code uses bitwise AND (`&`) and bitwise right shift (`>>>`) operations to manipulate and check the bits of `n`.

**Summary:**

The `isPowerOfTwo` function determines whether a given number is a power of 2 by repeatedly right-shifting the number's bits and checking if any of them are set. If all bits become zero after the operations, the function returns `true`, indicating that the number is a power of 2; otherwise, it returns `false`.

- [Go back](../readme.md)
