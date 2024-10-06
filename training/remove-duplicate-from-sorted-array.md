---
title: Remove duplicate form sorted array
tags: ["training", "task"]
languages: ["typescript"]
---

# Remove duplicates from sorted array

```typescript
function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) {
    return nums.length;
  }

  let index = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[index - 2]) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
}
```

1. **Initializing Variables**: The function `removeDuplicates` takes an array of numbers `nums` as input.

2. **Handling Base Case**: If the length of the input array `nums` is less than or equal to 2, the function returns the length of the array. This step is necessary as the following logic is designed for arrays with lengths greater than 2.

3. **Iterating Through the Array**: The function iterates through the array `nums` starting from the third element (`i = 2`) because the first two elements are guaranteed to be unique based on the initial assumption.

4. **Removing Duplicates**: Within the loop, it compares the current element `nums[i]` with the element two positions behind (`nums[index - 2]`). If they are not equal, it means the current element is different from the last two elements seen, so it's considered unique. In that case, the current element is assigned to the position `index` in the array `nums`, and `index` is incremented.

5. **Updating Index**: The `index` variable serves as a pointer to the position where the next unique element should be placed in the array.

6. **Returning Result**: Finally, the function returns the value of `index`, which represents the length of the resulting array after removing duplicates.

**Techniques Used**:

1. **Iterative Looping**: The function iterates through the input array using a `for` loop.
2. **Comparison and Filtering**: It compares elements of the array to identify duplicates and selectively includes only unique elements.
3. **Updating Array In-Place**: Instead of creating a new array, the function modifies the input array in-place to remove duplicates.
4. **Index Manipulation**: The `index` variable keeps track of the current position in the modified array where the next unique element should be placed.

In summary, this function modifies the input array in-place to remove duplicate elements while maintaining the order of unique elements, and returns the length of the resulting array.
