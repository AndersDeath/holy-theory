---
title: Search insert position
tags: ["training", "task"]
languages: ["typescript"]
---

# Search insert position

```typescript
function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target) {
      return i;
    }
  }
  return nums.length;
}
```
**Description:**
1. **Linear Search**:
   - The function `searchInsert` takes a sorted array `nums` and a target value `target` as inputs.
   - It performs a linear search through the array by iterating over each element using a loop.

2. **Comparison and Insertion Position**:
   - Inside the loop, the code checks two conditions:
     - If the current element `nums[i]` is equal to the target value `target`, it means the target is found at index `i`, and the function returns `i`.
     - If the current element `nums[i]` is greater than the target value `target`, it means the target should be inserted at index `i` to maintain the sorted order. The function returns `i`.

3. **Default Insertion Position**:
   - If neither of the above conditions is met during the loop, it means the target value is greater than all elements in the array. Therefore, the insertion position for the target is at the end of the array, which is indicated by `nums.length`.

**Techniques used:**
1. Linear search through an array.
2. Comparison of array elements and target value.

**Algorithm Complexity:**
- Time Complexity: O(N), where N is the length of the array `nums`. In the worst case, the entire array needs to be traversed.
- Space Complexity: O(1), as no additional data structures are used, and the space used remains constant regardless of the input size.

This code efficiently finds the insertion position of a target value in a sorted array by utilizing the sorted property of the array and performing a linear search. It returns the index where the target value should be inserted while maintaining the sorted order.

- [Go back](../readme.md)
