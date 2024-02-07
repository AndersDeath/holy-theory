---
title: Jump search
tags: ["search", "algorithms", "jump"]
languages: ["typescript"]
sort: 700
---

# Jump search

Jump Search is a searching algorithm designed for sorted arrays. It is a block-based search algorithm that works by jumping ahead by fixed steps and then linearly searching within the block for the target element. Jump Search combines the efficiency of binary search with the simplicity of linear search.

**How Jump Search Works:**

1. **Determine Jump Size:**

   - Determine the jump size by taking the square root of the array length. This ensures a balanced trade-off between the number of jumps and the linear search within a block.

2. **Jump Ahead:**

   - Start at the beginning of the array and jump ahead by the calculated jump size until finding a value that is greater than or equal to the target.

3. **Linear Search within Block:**

   - Perform a linear search within the block from the previous jump until finding the target element or determining that it is not present in the block.

4. **Repeat or Conclude:**
   - Repeat the process until the entire array is searched or the target element is found.

**Key Characteristics:**

- **Efficiency:**

  - Jump Search has a time complexity of -add formula-, making it more efficient than linear search -add formula-, and comparable to binary search -add formula- for large datasets.

- **Sorted Arrays:**

  - Jump Search requires the array to be sorted.

- **Jump Size:**
  - The jump size is a critical factor in the efficiency of Jump Search. The optimal jump size is often calculated as the square root of the array length.

**Applications:**

- **Database Searching:**

  - Jump Search is used in database systems for searching in large datasets.

- **Sorted Arrays:**
  - Useful when the data is sorted, and random access to elements is feasible.

**Time Complexity:**

- The time complexity of Jump Search is -add formula-,, where-add formula-, is the size of the array. This makes it efficient for large datasets when compared to linear search but may be outperformed by binary search for certain scenarios.

![Jump search](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/jump-search.png)

```typescript
function jumpSearch(arr: number[], target: number): number {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) {
      return -1;
    }
  }

  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}
```
