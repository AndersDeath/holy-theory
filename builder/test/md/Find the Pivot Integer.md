# Find the Pivot Integer

```typescript
function pivotInteger(n: number): number {
    let total = (n * (n +1)) / 2;
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
        if(sum === (total - sum + i)) {
            return i;
        }
    }
    return -1;
};
```

**Solution:**

The provided function `pivotInteger` takes an integer `n` as input and finds the pivot point (also known as equilibrium point) in a sequence of consecutive integers from 1 to `n` (inclusive). The pivot point is the integer at which the sum of all integers before it is equal to the sum of all integers after it.

**Steps:**

1. Calculate the total sum of all integers from 1 to `n` using the formula `total = (n * (n + 1)) / 2`.

2. Initialize a variable `sum` to 0, which will keep track of the sum of integers encountered while iterating.

3. Iterate through integers from 1 to `n` (inclusive) using a for loop.

4. In each iteration, add the current integer `i` to the `sum` variable.

5. Check if the current sum is equal to `total - sum + i`. If it is, this means the current integer is the pivot point, and it divides the sequence into two parts with equal sums.

6. If a pivot point is found, return the value of `i`.

7. If no pivot point is found after the loop, return `-1`.

**Example:**

- Input: `n = 7`
- Total sum of integers from 1 to 7: `(7 * (7 + 1)) / 2 = 28`
- Iterate through the integers:
  - `i = 1`: `sum = 1`, check if `sum === (28 - 1 + 1)`, not equal
  - `i = 2`: `sum = 3`, check if `sum === (28 - 3 + 2)`, not equal
  - `i = 3`: `sum = 6`, check if `sum === (28 - 6 + 3)`, not equal
  - `i = 4`: `sum = 10`, check if `sum === (28 - 10 + 4)`, not equal
  - `i = 5`: `sum = 15`, check if `sum === (28 - 15 + 5)`, not equal
  - `i = 6`: `sum = 21`, check if `sum === (28 - 21 + 6)`, not equal
  - `i = 7`: `sum = 28`, check if `sum === (28 - 28 + 7)`, not equal
- No pivot point is found, so the function returns `-1`.

**Note:**

The given code assumes that the input `n` is a positive integer.

**Techniques used:**

1. **Iteration:** The function iterates through integers from 1 to `n` (inclusive) using a for loop to calculate the sum and find the pivot point.

2. **Mathematical Operation:** The function uses mathematical formulas to calculate the total sum of integers from 1 to `n`.

3. **Conditional Statement:** The function uses a conditional statement (`if` statement) to check if the current sum is equal to `total - sum + i`, which helps identify the pivot point.

4. **Variable Manipulation:** The function uses variables such as `total`, `sum`, and `i` to keep track of the calculated values during the iteration and calculation process.

5. **Comparison Operator:** The function uses the equality comparison operator (`===`) to compare the sum with the calculated value and determine if a pivot point is found.

6. **Returning a Value:** The function returns a value (`i`) when a pivot point is found, or it returns `-1` if no pivot point is found.

7. **Arithmetic Operators:** The function uses arithmetic operators (`+`, `-`, `/`) to calculate the total sum and update the `sum` variable.

8. **Math.floor Function:** Although not explicitly used in the provided code, the `Math.floor` function is commonly used when dealing with floating-point values to ensure we get the nearest lower integer value.

These techniques collectively enable the function to efficiently find the pivot point in the sequence of consecutive integers from 1 to `n`.

