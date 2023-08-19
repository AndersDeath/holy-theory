---
title: String to integer (atoi)
tags: ["training", "task"]
languages: ["typescript"]
---

# String to integer (atoi)

```typescript
/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  if (!s) {
    return 0;
  }

  s = s.trim();
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;
  let i = 0;

  const isNegative = s[0] === "-";
  const isPositive = s[0] === "+";

  if (isNegative) {
    i++;
  } else if (isPositive) {
    i++;
  }

  let number = 0;

  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    number = number * 10 + (s[i] - "0");
    i++;
  }

  number = isNegative ? -number : number;

  if (number < INT_MIN) {
    return INT_MIN;
  }
  if (number > INT_MAX) {
    return INT_MAX;
  }
  return number;
};
```

**Description:**

1. **Input and Output**:

   - The `myAtoi` function takes a string `s` as input and returns an integer value that is extracted from the string.

2. **Trimmer and Constants**:

   - The input string `s` is trimmed to remove leading and trailing whitespace.
   - Constants `INT_MAX` and `INT_MIN` are defined to represent the maximum and minimum integer values.

3. **Parsing Signs**:

   - The code checks if the first character of the trimmed string is `'-'` or `'+'` to determine if the number is negative or positive.

4. **Conversion**:

   - The code iterates through the string from the starting position `i`, converting the characters into a numeric value.
   - The numeric value is built using the formula: `number = number * 10 + (s[i] - '0')`.

5. **Negative Number**:

   - If the number is determined to be negative (`isNegative` is true), the final numeric value is negated.

6. **Boundary Checks**:

   - The code checks whether the calculated numeric value falls within the range of 32-bit signed integers (`INT_MAX` and `INT_MIN`).
   - If the number is outside this range, the function returns the corresponding boundary value.

7. **Returning the Result**:
   - If the numeric value is within the valid range, it is returned as the result.

**Techniques used:**

1. String manipulation and parsing.
2. Handling integer overflow and underflow cases.
3. String trimming.
4. Conversion of characters to numeric values.

**Algorithm Complexity:**

- Time Complexity: O(n), where n is the length of the input string `s`. The code iterates through the string once.
- Space Complexity: O(1), as only a constant amount of extra space is used (for variables like `i`, `number`, etc.).

This code efficiently converts a string to an integer, considering various sign and boundary conditions.

- [Go back](../readme.md)
