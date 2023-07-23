---
title: Find All Numbers Disappeared in an Array
tags: ['training', 'task']
languages: ['typescript']
---
# Find All Numbers Disappeared in an Array

```typescript
function findDisappearedNumbers(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i ++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = - nums[index];
        }        
    }
    const result = [];
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;
};
```

**Solution:**

Step-by-step breakdown of the code:

1. The function `findDisappearedNumbers` takes an array `nums` as input, which contains integers.

2. The function uses an in-place approach to mark the visited numbers in the array.

3. In the first loop, it iterates through the `nums` array. For each element, it calculates the index where the corresponding number should be. It uses `Math.abs(nums[i]) - 1` to get the index (since the array is 0-indexed and the numbers are positive).

4. It checks if the value at the calculated index is positive. If it is, it means that the number at that index has not been visited yet. So, it updates the value at that index to its negative counterpart to mark it as visited.

5. After the first loop, all the numbers that appear in the array will be marked as negative, and the numbers that are not present will remain positive.

6. In the second loop, it iterates through the `nums` array again. For each element, if the value is positive, it means that the corresponding number is missing. So, it pushes `i + 1` (since the array is 0-indexed) to the `result` array.

7. After both loops, the `result` array will contain the numbers that are missing from the original array.

8. The function returns the `result` array containing the disappeared numbers.

Summary:

The provided TypeScript function `findDisappearedNumbers` finds the disappeared numbers from an array of integers by using an in-place approach. It iterates through the array, marks the visited numbers by updating their values to negative, and then finds the missing numbers by looking for positive values in the array.

Techniques used:

1. TypeScript: The code is written in the TypeScript programming language, which is a superset of JavaScript with added type annotations.

2. Array manipulation: The function modifies the input array to mark visited numbers and then finds the missing numbers in a second loop.

3. Negative numbers as markers: The function uses negative values as markers to keep track of visited numbers in the array.


* [Go back](../readme.md)