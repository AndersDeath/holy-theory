---
title: Remove element in place
tags: ['training', 'task']
languages: ['typescript']
---
# Remove element in place

```typescript
function removeElement(nums: number[], val: number): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
};
```

1. **Input Array Modification**: The function `removeElement` takes an array of integers `nums` and an integer `val` as input. It aims to remove all instances of `val` from the array.

2. **Count Initialization**: A variable `count` is initialized to 0. This variable will be used to keep track of the valid (non-val) elements in the modified array.

3. **Loop Through Array**: A `for` loop is used to iterate through the input array `nums`.

4. **Valid Element Check**: For each element at index `i` in the array, it is checked whether the element is not equal to the given value `val`. If the element is valid (not equal to `val`), the next steps are performed.

5. **Updating Array**: The valid element at index `i` is assigned to the position `count` in the array, effectively overwriting the element at index `count` with the valid element. Then, `count` is incremented by 1 to mark the next position for a valid element.

6. **Returning New Length**: After iterating through the array, the value of `count` represents the new length of the array with the specified element (`val`) removed. This new length is returned.

**Techniques Used**:

1. Looping (`for` loop): Iterating through an array.
2. Element Comparison (`nums[i] !== val`): Comparing an array element with a given value.
3. Updating Array (`nums[count++] = nums[i]`): Assigning array elements to new positions while updating a counter.
4. Returning Length: Calculating and returning the new length of the array after removal.

This function removes all instances of a specified value from an input array of integers and returns the new length of the array with the specified value removed.


* [Go back](../readme.md)
