---
title: Third Maximum Number
tags: ["training", "task"]
languages: ["typescript"]
---

# Third Maximum Number

```typescript
function thirdMax(nums: number[]): number {
  const output = [...new Set(nums)];
  output.sort((a, b) => b - a);
  return output[2] !== undefined ? output[2] : output[0];
}
```

- **Input**: An array of integers (`nums`).

- **Output**: The third maximum number in the array.

1. **Create a Set for Uniqueness**:

   - A `Set` is used to eliminate duplicate numbers from the input array.
   - This ensures that only unique values are considered further.

2. **Sort Unique Values**:

   - The unique values in the `Set` are sorted in descending order using the `.sort()` function.
   - Custom comparator `(a, b) => b - a` is used to sort in descending order.

3. **Return Third Maximum or Maximum Value**:
   - Check if the third maximum value exists (`output[2]`):
     - If yes, return the third maximum value.
     - If not, return the maximum value (`output[0]`).

**Techniques Used**:

- **Set**: Used to store unique numbers and remove duplicates.
- **Sorting**: Sorts unique numbers in descending order.
- **Ternary Operator**: Used to conditionally choose between the third maximum and maximum value.

**Algorithm**:

1. Use a `Set` to remove duplicate numbers from `nums`.
2. Sort the unique values in descending order.
3. Return either the third maximum value (if exists) or the maximum value from the sorted array.

**Time Complexity**:

- Removing duplicates using a `Set`: O(n)
- Sorting unique values: O(n log n)
- Accessing third maximum value or maximum value: O(1)

Overall time complexity: O(n log n)

**Space Complexity**:

- Space for the `Set` to store unique numbers: O(n)
- Space for the sorted array: O(n)

Overall space complexity: O(n)
