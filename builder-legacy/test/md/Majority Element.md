# Majority Element

```typescript
function majorityElement(nums: number[]): number {

    let count =0;
    let res = 0;

    for(let i = 0; i<=nums.length; i++) {
            if (count==0) {
                res = nums[i];
            }
            if (nums[i]!=res) {
                count--;
            }
            else {
                count++;
           }
    }
    return res;
};
```

**Step-by-Step solution:**

1. Define a function `majorityElement` that takes an array of integers `nums` as input.

2. Initialize two variables:
   - `count`: To keep track of the count of the current majority element.
   - `res`: To store the potential majority element.

3. Iterate through each element in the array `nums` using a for loop:
   - If `count` is 0, set `res` to the current element `nums[i]`. This is because we are looking for a majority element, which appears more than half the time. By setting `res` to the current element, we are starting a potential majority count.
   - If the current element `nums[i]` is not equal to `res`, decrement the `count`. This indicates that the current element is different from the potential majority element, reducing its count.
   - If the current element `nums[i]` is equal to `res`, increment the `count`. This indicates that the current element matches the potential majority element.

4. After iterating through the array, return the final value of `res`, which should represent the majority element.

**Techniques Used:**

1. **Loop Iteration:** The algorithm uses a `for` loop to iterate through the elements of the input array.

2. **Conditional Logic:** The algorithm uses conditional statements to update the `res` and `count` variables based on the conditions specified in the problem.

**Summary:**

The `majorityElement` function aims to find the majority element in an array of integers. It iterates through the array and uses `res` and `count` variables to keep track of a potential majority element and its count. The algorithm follows a simple logic to identify the majority element and returns the final result.

