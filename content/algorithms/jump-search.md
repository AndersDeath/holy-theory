---
title: Jump search
tags: ["search", "algorithms", "jump"]
languages: ["typescript"]
sort: 700
---

# Jump search

Jump Search is a searching algorithm designed for sorted arrays. It is a block-based search algorithm that works by jumping ahead by fixed steps and then linearly searching within the block for the target element. Jump Search combines the efficiency of binary search with the simplicity of linear search.

**How it work:**

**Step 1:**

Determine the jump size by taking the square root of the array length. This ensures a balanced trade-off between the number of jumps and the linear search within a block.

**Step 2:**

Start at the beginning of the array and jump ahead by the calculated jump size until finding a value that is greater than or equal to the target.

**Step 3:**

Perform a linear search within the block from the previous jump until finding the target element or determining that it is not present in the block.

**Step 4:**
Repeat the process until the entire array is searched or the target element is found.

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
