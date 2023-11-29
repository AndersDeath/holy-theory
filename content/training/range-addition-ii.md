---
title: Range Addition II
tags: ["training", "task"]
languages: ["typescript"]
---

# Range Addition II

```typescript
function maxCount(m: number, n: number, ops: number[][]): number {
        if (ops.length === 0) {
        return m * n; 
    }

    let minAi = m;
    let minBi = n;

    for (const op of ops) {
        minAi = Math.min(minAi, op[0]);
        minBi = Math.min(minBi, op[1]);
    }

    return minAi * minBi;
};
```

1. **Check for Empty Operations Array:**
   - Check if the array of operations (`ops`) is empty. If it is, return the product of `m` and `n` (the maximum count of elements when no operations are performed).

2. **Initialize Variables:**
   - Initialize two variables, `minAi` and `minBi`, to the initial dimensions `m` and `n`, respectively.

3. **Iterate Through Operations Array:**
   - Use a `for...of` loop to iterate through each operation in the array (`ops`).

4. **Update Minimum Values for Dimensions:**
   - For each operation, update the minimum values for dimensions (`minAi` and `minBi`) by taking the minimum of the current value and the values from the operation.

5. **Return Product of Minimum Dimensions:**
   - After iterating through all operations, return the product of the minimum dimensions (`minAi * minBi`), representing the maximum count of elements after all operations are performed.