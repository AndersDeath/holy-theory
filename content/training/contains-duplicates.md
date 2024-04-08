---
title: Contains Duplicate
tags: ["training", "task"]
languages: ["typescript"]
---

# Contains Duplicate

```typescript
function containsDuplicate(nums: number[]): boolean {
  nums.sort((a: any, b: any) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}
```

**Solution:**
Below is the step-by-step breakdown of the code:

1. The `containsDuplicate` function takes an array `nums` as input.

2. The `sort` method is called on the `nums` array using a comparison function `(a: any, b: any) => a - b`. This sorts the array in ascending order.

3. A `for` loop is used to iterate over the elements of the `nums` array from index 0 to `nums.length - 1`.

4. Inside the loop, the code compares each element `nums[i]` with its adjacent element `nums[i+1]`.

5. If a duplicate element is found (i.e., `nums[i] === nums[i+1]`), the function immediately returns `true` to indicate the presence of duplicates.

6. If no duplicates are found after the loop completes, the function returns `false` to indicate the absence of duplicates.

**Techniques used:**

The following techniques are utilized within the code:

1. Sorting: The `sort` method is used to sort the `nums` array in ascending order. This brings duplicate elements next to each other, simplifying the duplicate check.

2. Iteration: The `for` loop is used to iterate over the elements of the `nums` array.

3. Conditional branching: An `if` statement is used to compare adjacent elements and check for duplicates.

The provided solution sorts the array to bring duplicate elements together, allowing for a simple comparison of adjacent elements to determine duplicates. This approach has a time complexity of O(n log n) due to the sorting operation and a space complexity of O(1) since no additional data structures are used.

**Source: https://leetcode.com**

- [Go back](../readme.md)
