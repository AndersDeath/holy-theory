
# Summary Ranges

```typescript
function summaryRanges(nums: number[]): string[] {
  const output: any[] = [];

  for (let i = 0; i < nums.length; ++i) {
    let begin = nums[i];
    while (i + 1 < nums.length && nums[i] == nums[i + 1] - 1) {
      ++i;
    }

    let end = nums[i];
    if (begin == end) {
      output.push(begin.toString());
    } else output.push(begin.toString() + "->" + end);
  }

  return output;
}
```

**Description:**

1. **Input and Output**:

   - The `summaryRanges` function takes an array of integers `nums` and returns an array of strings, where each string represents a summary range of consecutive numbers.

2. **Loop through Numbers**:

   - The code uses a loop to iterate through each number in the `nums` array.

3. **Finding Consecutive Ranges**:

   - Inside the loop, the code initializes a variable `begin` with the current number.
   - Then, it enters a nested loop (`while` loop) to find consecutive numbers by checking if the next number is exactly one greater than the current number.
   - If consecutive numbers are found, the loop continues to increment `i` and check the next number.

4. **Creating Summary Range**:

   - Once the end of the consecutive range is found (`end`), the code checks whether the range contains only one number (`begin == end`).
   - If the range contains only one number, it's added as a single string to the `output` array.
   - If the range contains multiple consecutive numbers, it's added as a range string (`begin -> end`) to the `output` array.

5. **Returning Output**:
   - After processing all numbers, the function returns the `output` array containing summary ranges.

**Techniques used:**

1. Looping through an array.
2. Nested `while` loop to find consecutive ranges.

**Algorithm Complexity:**

- Time Complexity: O(n), where `n` is the number of elements in the input array. Each element is processed exactly once.
- Space Complexity: O(1), excluding the space used for the `output` array since the output array size is directly proportional to the input array size.

This code efficiently generates summary ranges from a sorted array of numbers.

