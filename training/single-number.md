---
title: Single Number
tags: ["training", "task"]
languages: ["typescript"]
---

# Single Number

```typescript
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i];
  }

  return ans;
};
```

**Description:**

1. **Input and Output**:

   - The `singleNumber` function takes an array of integers `nums` as input and returns the integer that appears only once in the array.

2. **Bitwise XOR Operation**:

   - The `ans` variable is initialized to `0`. The XOR operation has a property that if the same number is XORed twice, it becomes 0. XORing any number with 0 gives the number itself.
   - The loop iterates over each element in the `nums` array.
   - For each element `nums[i]`, it performs the XOR operation with the current value of `ans`. This effectively cancels out all duplicate numbers and leaves only the single number.

3. **Result**:
   - The final value of `ans` will be the single number that appears only once in the array, as all other duplicate numbers will cancel out due to the XOR property.

**Techniques used:**

1. Bitwise XOR operation for finding the unique number.

**Algorithm Complexity:**

- Time Complexity: O(n), where n is the number of elements in the `nums` array. Each element is processed once.
- Space Complexity: O(1), as only a constant amount of extra space is used (for the `ans` variable).

This code efficiently finds the single number in the array using the bitwise XOR operation, leveraging the XOR property to eliminate duplicate numbers and keep only the unique one.
