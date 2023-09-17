---
title: Symmetric difference
tags: ["algorithms", "training", "task"]
languages: ["typescript"]
---

# Symmetric difference

```typescript
export const symmetricDifference = (...args: any) => [
  ...new Set(
    args.reduce((arr1: any, arr2: any) => [
      ...arr1.filter((e: any) => !arr2.includes(e)),
      ...arr2.filter((e: any) => !arr1.includes(e)),
    ])
  ),
];
```

**Description:**

1. **Input and Output**:

   - The `symmetricDifference` function takes multiple arrays as input using the rest parameter `...args`.
   - It returns an array containing the symmetric difference of all input arrays.

2. **Reduce and Filter**:

   - The `args.reduce` function is used to iterate through each pair of arrays and compute their symmetric difference.
   - The symmetric difference of two arrays is calculated by:
     - Filtering elements that are in the first array but not in the second array.
     - Filtering elements that are in the second array but not in the first array.
   - The results of both filter operations are concatenated using the spread operator.

3. **Using Set**:

   - The `new Set()` constructor is used to create a Set containing the concatenated symmetric differences.
   - A Set is chosen to eliminate duplicates from the result.

4. **Returning Result**:
   - The spread operator (`...`) is used to convert the Set back into an array.

**Techniques used:**

1. Rest parameter to accept a variable number of arguments.
2. Using `reduce` to iterate and accumulate results.
3. Using `filter` to compute symmetric differences.
4. Using a `Set` to eliminate duplicates.
5. Using the spread operator to convert a Set back to an array.

**Example:**

```typescript
const result = symmetricDifference([1, 2, 3], [2, 3, 4], [3, 4, 5]);
console.log(result); // Output: [1, 5]
```

This code efficiently computes the symmetric difference of multiple arrays using JavaScript's array manipulation techniques.

- [Go back](../readme.md)
