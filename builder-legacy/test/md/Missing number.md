# Missing number

```typescript

function missingNumber(nums: number[]): number {
  let sum = 0;
  let expected = (1 + nums.length) * nums.length / 2;
  for (let i = 0; i < nums.length; i ++) {
      sum += nums[i];
  }
  return expected - sum;
};

```

The given function `missingNumber` is designed to find the missing number in an array of consecutive integers from 0 to n. Here's a step-by-step explanation of how the function works:

1. The function initializes `sum` to 0. This variable will be used to calculate the sum of the elements in the input array.

2. The function calculates the expected sum of the consecutive integers using the formula `(1 + nums.length) * nums.length / 2`. This formula calculates the sum of integers from 1 to `nums.length` using the arithmetic series sum formula.

3. The function enters a loop that iterates through each element in the `nums` array. For each element, it adds the value to the `sum` variable.

4. After iterating through all elements in the array, the function subtracts the calculated `sum` from the `expected` sum. This operation effectively finds the missing number in the array.

5. Finally, the function returns the calculated missing number.

**Techniques Used:**

1. **Arithmetic Series Sum Formula:** The function uses the arithmetic series sum formula to calculate the expected sum of consecutive integers. This formula simplifies the calculation of the sum and allows for an efficient solution to finding the missing number.

**Summary:**

The `missingNumber` function calculates the missing number in an array of consecutive integers by finding the difference between the expected sum and the actual sum of the elements. It leverages the arithmetic series sum formula to optimize the computation of the expected sum.



