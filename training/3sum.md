---
title: 3Sum
tags: ['training', 'task']
languages: ['typescript']
---
# 3Sum

```typescript

function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);

    const triplets = [];

    for (let i = 0; i < nums.length; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                triplets.push([nums[i], nums[j], nums[k]]);
                j++;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return triplets;
};

```

**Solution:**
Below are the step-by-step explanations of the code:

| Step | Description |
|------|-------------|
|  1   | The function `threeSum` is defined, taking one parameter: `nums` (an array of numbers). |
|  2   | The `nums` array is sorted in ascending order using the `sort` method. This ensures that the array is arranged numerically. |
|  3   | An empty array named `triplets` is initialized to store the found triplets. |
|  4   | The code enters a `for` loop that iterates over the array `nums` from the first element to the last element. |
|  5   | Inside the `for` loop, the code first checks if the current element is a duplicate by comparing it with the previous element. If they are the same, the loop skips to the next iteration using the `continue` statement. This ensures that duplicate triplets are avoided. |
|  6   | Two pointers, `j` and `k`, are initialized. `j` is set to `i + 1` (the next index after `i`), and `k` is set to the last index of the array (`nums.length - 1`). |
|  7   | A `while` loop is used to iterate as long as `j` is less than `k`. |
|  8   | Inside the `while` loop, the code checks three conditions: <ul><li>If the sum of the current element (`nums[i]`), `nums[j]`, and `nums[k]` is equal to zero, a triplet is found. The triplet is added to the `triplets` array using the `push` method. `j` is incremented by 1 to move to the next element.</li><li>If the current sum is less than zero, `j` is incremented by 1 to increase the sum.</li><li>If the current sum is greater than zero, `k` is decremented by 1 to decrease the sum.</li></ul> |
|  9   | After the inner `while` loop ends, the `for` loop continues to the next iteration, and the process is repeated with a new `i` value. |
| 10   | Once all iterations of the `for` loop are complete, the function returns the `triplets` array, which contains all unique triplets that sum up to zero. |

**Techniques used:**

The following techniques are utilized within the code:

1. Sorting an array using the `sort` method.
2. Using a `for` loop to iterate over an array.
3. Using conditional statements (`if`, `else if`, `else`) to handle different cases.
4. Using a `while` loop for iterative calculations.
5. Skipping to the next iteration using the `continue` statement.
6. Adding elements to an array using the `push` method.

Please let me know if you need any further clarification or have additional questions!
* [Go back](../readme.md)
