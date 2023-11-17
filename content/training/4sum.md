---
title: 4Sum
tags: ["training", "task"]
languages: ["typescript"]
---

# 4Sum

```typescript
function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const n = nums.length;

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const currSum = nums[i] + nums[j] + nums[left] + nums[right];

        if (currSum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          left++;
          right--;
        } else if (currSum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}
```

**Solution:**

1. **Sort the Input Array:**

   - Sort the input array `nums` in ascending order. Sorting is a crucial step for efficiently handling duplicates and finding unique quadruplets.

2. **Initialize Result Array:**

   - Initialize an empty array `result` to store the unique quadruplets that sum up to the target.

3. **Loop through Unique Pairs of Indices (i, j):**

   - Use two nested loops to iterate through pairs of indices (`i` and `j`).
   - The outer loop (`i`) goes from 0 to `n - 4`, and the inner loop (`j`) goes from `i + 1` to `n - 3`.
   - The conditions inside the loops skip duplicates to avoid redundant calculations.

4. **Two-Pointer Approach for Remaining Elements:**

   - Use a two-pointer approach with `left` starting from `j + 1` and `right` starting from `n - 1`.
   - Calculate the current sum `currSum` using elements at indices `i`, `j`, `left`, and `right`.
   - If `currSum` is equal to the target, add the quadruplet to the `result` array.
     - Skip duplicates by incrementing `left` and decrementing `right` until reaching distinct elements.
   - If `currSum` is less than the target, increment `left`. If greater, decrement `right`.

5. **Return the Result Array:**
   - After completing all iterations, return the `result` array containing unique quadruplets that sum up to the target.
