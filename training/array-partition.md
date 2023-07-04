---
title: Array Partition
tags: ['training', 'task']
languages: ['typescript']
---
# Array Partition

```typescript
function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let sum = 0;
  
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  
  return sum;
};

```

**Solution:**
Below are the step-by-step explanations of the code:

1. The `arrayPairSum` function is defined, which takes one parameter:
   - `nums`: an array of numbers.

2. The `sort` method is called on the `nums` array with a comparator function `(a, b) => a - b`. This sorts the array in ascending order.

3. A variable `sum` is initialized to 0, which will store the sum of the pairs.

4. A `for` loop is used to iterate over the elements of the `nums` array with a step size of 2. This means it will process elements at indices 0, 2, 4, and so on.

5. Inside the loop, the current element at index `i` is added to the `sum`.

6. The loop continues until `i` reaches the end of the `nums` array.

7. Once the loop exits, the final value of `sum` represents the maximum possible sum of the pairs formed from the array.

8. The `sum` value is returned as the result.

**Techniques used:**

The following techniques are utilized within the code:

1. Sorting an array using the `sort` method with a comparator function.
2. Iterating over array elements using a `for` loop with a step size.
3. Accumulating values using the `+=` operator.
4. Returning a calculated result.


* [Go back](../readme.md)
