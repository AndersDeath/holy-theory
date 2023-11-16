---
title: Largest product in a grid
tags: ["training", "task"]
languages: ["typescript"]
---

# Largest product in a grid

```typescript
function largestGridProduct(arr: number[][]): number {
  let maxProduct: number = 0;
  let currProduct: number = 0;

  function maxProductChecker(n: number): void {
    if (n > maxProduct) {
      maxProduct = n;
    }
  }

  // loop rows
  for (let r = 0; r < arr.length; r++) {
    // loop columns
    for (let c = 0; c < arr[r].length; c++) {
      const limit = arr[r].length - 3;

      // check horizontal
      if (c < limit) {
        currProduct = arr[r][c] * arr[r][c + 1] * arr[r][c + 2] * arr[r][c + 3];
        maxProductChecker(currProduct);
      }

      // check vertical
      if (r < limit) {
        currProduct = arr[r][c] * arr[r + 1][c] * arr[r + 2][c] * arr[r + 3][c];
        maxProductChecker(currProduct);
      }

      // check diagonal [\]
      if (c < limit && r < limit) {
        currProduct =
          arr[r][c] * arr[r + 1][c + 1] * arr[r + 2][c + 2] * arr[r + 3][c + 3];
        maxProductChecker(currProduct);
      }

      // check diagonal [/]
      if (c > 3 && r < limit) {
        currProduct =
          arr[r][c] * arr[r + 1][c - 1] * arr[r + 2][c - 2] * arr[r + 3][c - 3];
        maxProductChecker(currProduct);
      }
    }
  }

  return maxProduct;
}
```

**Step-by-step breakdown:**

1. **Initialize Variables:**

   - Initialize `maxProduct` and `currProduct` to 0. These variables will be used to keep track of the maximum product and the current product being calculated.

2. **maxProductChecker Function:**

   - Define a helper function `maxProductChecker` that takes a number `n` as an argument.
   - If `n` is greater than the current `maxProduct`, update `maxProduct` with the value of `n`.

3. **Nested Loop for Grid Exploration:**

   - Use nested loops to iterate through each element in the 2D array (`arr`).
   - The outer loop (`r`) iterates through rows, and the inner loop (`c`) iterates through columns.

4. **Check Horizontal Products:**

   - Inside the loops, check for horizontal products if there are at least 4 elements to the right (`c < limit`).
   - Calculate the product of four consecutive elements in the same row and call `maxProductChecker` with the current product.

5. **Check Vertical Products:**

   - Check for vertical products if there are at least 4 elements below (`r < limit`).
   - Calculate the product of four consecutive elements in the same column and call `maxProductChecker` with the current product.

6. **Check Diagonal Products (\ and /):**

   - Check for diagonal products (`\`) if there are at least 4 elements to the right and below (`c < limit` and `r < limit`).
   - Check for diagonal products (`/`) if there are at least 4 elements to the left and below (`c > 3` and `r < limit`).
   - Calculate the product of four consecutive elements along each diagonal and call `maxProductChecker` with the current product.

7. **Return the Maximum Product:**
   - Return the final `maxProduct` after exploring all possible products in the grid.

The function is designed to find the largest product of four consecutive elements (horizontally, vertically, or diagonally) in a 2D array.
