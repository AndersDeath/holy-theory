
# Sqrt(x)

```typescript
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  if (x < 2) return x;

  let start = 0;
  let end = x;
  while (start <= end) {
    let mid = (start + end) / 2;
    mid = Math.floor(mid);

    if (mid === x / mid) {
      return mid;
    }

    if (mid < x / mid) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (start > x / start) {
    return start - 1;
  }
  return start;
};
```

**Description:**

1. **Input and Output**:

   - The `mySqrt` function takes an integer `x` as input and returns the integer square root of `x`.

2. **Binary Search Algorithm**:

   - The binary search algorithm is used to find the square root of `x`.
   - The `start` variable is initialized to 0, and the `end` variable is initialized to `x`.
   - The algorithm continues to narrow down the range between `start` and `end` until `start` is greater than `end`.

3. **Binary Search Iteration**:

   - In each iteration, the middle value `mid` is calculated as the average of `start` and `end`.
   - Since we are only interested in integer square roots, `mid` is converted to an integer using `Math.floor(mid)`.
   - If `mid` is equal to `x / mid`, we found the exact square root and return `mid`.
   - If `mid` is less than `x / mid`, we adjust `start` to `mid + 1` to search in the upper half of the range.
   - If `mid` is greater than `x / mid`, we adjust `end` to `mid - 1` to search in the lower half of the range.

4. **Final Result**:
   - After the binary search completes, if `start` becomes greater than `x / start`, we return `start - 1` as the integer square root.
   - If `start` is not greater than `x / start`, we return `start` as the integer square root.

**Techniques used:**

1. Binary search algorithm for finding the square root.
2. Integer conversion using `Math.floor()`.

**Algorithm Complexity:**

- Time Complexity: O(log n), where n is the input number `x`. The binary search algorithm reduces the search range by half in each iteration.
- Space Complexity: O(1), as only a constant amount of extra space is used (for variables like `start`, `end`, and `mid`).

This code efficiently calculates the integer square root of a number using the binary search algorithm.
