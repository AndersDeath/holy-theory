---
title: 3Sum Closest
tags: ['training', 'task']
languages: ['typescript']
---
# 3Sum Closest

```typescript

function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);

  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }

  return closestSum;
};

```

**Solution:**

The `threeSumClosest` function aims to find the sum of three numbers in an array (`nums`) that is closest to a target sum (`target`). Below are the step-by-step explanations of the code:

| Step | Description |
|------|-------------|
|  1   | The function `threeSumClosest` is defined, taking two parameters: `nums` (an array of numbers) and `target` (the target sum). |
|  2   | The `nums` array is sorted in ascending order using the `sort` method. This ensures that the array is arranged numerically. |
|  3   | A variable named `closestSum` is initialized with the sum of the first three numbers in the sorted array (`nums[0] + nums[1] + nums[2]`). This initial sum serves as the closest sum. |
|  4   | The code enters a `for` loop that iterates over the array `nums` from the first element to the third-to-last element (`nums.length - 2`). |
|  5   | Inside the `for` loop, two pointers named `left` and `right` are initialized. `left` is set to `i + 1` (the next index after `i`), and `right` is set to the last index of the array (`nums.length - 1`). |
|  6   | A `while` loop is used to iterate as long as the `left` pointer is less than the `right` pointer. |
|  7   | Inside the `while` loop, the code calculates the sum of three elements: `nums[i]`, `nums[left]`, and `nums[right]`, and stores it in a variable named `sum`. |
|  8   | The code checks if the absolute difference between `sum` and `target` is less than the absolute difference between `closestSum` and `target`. If it is, then the `closestSum` is updated with the new `sum`. This ensures that we keep track of the sum closest to the target. |
|  9   | The code then checks three conditions: <ul><li>If `sum` is less than `target`, it means we need to increase the sum, so the `left` pointer is incremented by 1.</li><li>If `sum` is greater than `target`, it means we need to decrease the sum, so the `right` pointer is decremented by 1.</li><li>If `sum` is equal to `target`, it means we have found the exact sum we were looking for, so it is returned immediately.</li></ul> |
| 10   | After the `while` loop ends, the `for` loop continues to the next iteration, and the process is repeated with a new `i` value. |
| 11   | Once all iterations of the `for` loop are complete, the function returns the `closestSum`, which represents the sum closest to the target. |

**Techniques used:**

The following techniques are utilized within the code:

1. Sorting an array using the `sort` method.
2. Using two pointers (`left` and `right`) to traverse the array.
3. Calculating the sum of three numbers.
4. Using a `for` loop to iterate over an array.
5. Using a `while` loop for


* [Go back](../readme.md)
