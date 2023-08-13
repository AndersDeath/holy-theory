---
title: Plus One
tags: ["training", "task"]
languages: ["typescript"]
---

# Plus One

```typescript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  let i = digits.length - 1;

  while (i >= 0 && digits[i] === 9) {
    i--;
  }

  if (i == -1) {
    const result = new Array(digits.length + 1).fill(0);
    result[0] = 1;
    return result;
  }

  let result = new Array(digits.length).fill(0);
  result[i] = digits[i] + 1;
  for (let j = 0; j < i; j++) {
    result[j] = digits[j];
  }
  return result;
};
```

This JavaScript code defines a function `plusOne` that adds one to a given array of digits representing a non-negative integer. The code handles cases where the addition results in a carry. Here's how the code works:

1. The function `plusOne` takes an array of digits `digits` as input.

2. It initializes a variable `carry` with a value of 1, representing the initial carry for addition.

3. It initializes a variable `i` to the index of the last digit in the `digits` array.

4. A `while` loop is used to find the rightmost non-nine digit. The loop decrements `i` while the current digit is 9.

5. After exiting the loop, the code checks whether `i` is -1. If it is, all digits were nines, and a new result array is created with a length of `digits.length + 1`, filled with zeros. The first digit is set to 1 to handle the carry. The result array is then returned.

6. If `i` is not -1, it means there is a non-nine digit in the array. A new result array is created, and the digit at index `i` is incremented by 1 to handle the carry. Then, the digits before index `i` are copied from the original `digits` array to the result array.

7. Finally, the result array is returned, representing the integer obtained by adding one to the original integer represented by the input `digits`.

**Techniques Used:**

- **Looping:** The code uses a `while` loop to find the rightmost non-nine digit.

- **Conditional Statements:** Conditional statements are used to handle cases where all digits are nines and to determine the proper action based on the value of `i`.

- **Array Manipulation:** The code creates new arrays to store the result of addition and copies digits from the original array to the result array.

**Summary:**

The `plusOne` function adds one to a given non-negative integer represented by an array of digits. It handles carry and edge cases where all digits are nines, ensuring accurate addition of the one.

- [Go back](../readme.md)
