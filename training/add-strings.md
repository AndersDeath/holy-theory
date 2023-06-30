---
title: Add Strings
tags: ['training', 'task']
languages: ['typescript']
---
# Add Strings

```typescript
function addStrings(num1: string, num2: string): string {
    
    let carry = 0;
    let firstP = num1.length - 1;
    let secondP = num2.length - 1;
    let res = '';

    while (firstP >= 0 || secondP >= 0) {
        let sum = 0;
        let first = firstP >= 0 ? Number(num1[firstP--]) : 0
        let second = secondP >= 0 ? Number(num2[secondP--]) : 0

        sum += first + second + carry;
        carry = 0;

        if (sum > 9) {
            sum %= 10;
            carry++;
        }
        res = sum + res;
    };

    if (carry > 0) {
        res = carry + res;
    }

    return res;
};
```

**Solution:**
Below are the step-by-step explanations of the code:

1. The function `addStrings` is defined, taking two parameters: `num1` (a number string) and `num2` (another number string).

2. Several variables are initialized:
   - `carry` is initialized as 0 to hold the carry value during addition.
   - `firstP` is set to the index of the last character in string `num1`.
   - `secondP` is set to the index of the last character in string `num2`.
   - `res` is initialized as an empty string to store the result of the addition.

3. A `while` loop is used to iterate as long as either `firstP` or `secondP` is greater than or equal to 0.

4. Inside the `while` loop, the variable `sum` is initialized with the sum of the corresponding digits from `num1` and `num2`, along with the carry value.

5. Conditional statements are used to handle cases where either `firstP` or `secondP` is less than 0 (reached the beginning of the string). In such cases, the corresponding digit is considered as 0.

6. The sum is computed by adding `first`, `second`, and `carry`. The `carry` value is reset to 0.

7. If the sum is greater than 9, indicating a carry, the sum is updated to the remainder of dividing by 10, and the `carry` value is incremented.

8. The current digit of the sum, obtained after carry adjustment, is concatenated to the left side of the `res` string.

9. After the `while` loop ends, if there is a remaining carry (i.e., `carry > 0`), it is concatenated to the left side of the `res` string.

10. Finally, the `res` string, which represents the sum of the number strings `num1` and `num2`, is returned.

**Techniques used:**

The following techniques are utilized within the code:

1. Iterating over strings using a `while` loop.
2. Accessing characters in a string using indices.
3. Converting characters to numbers using `Number`.
4. Performing arithmetic operations (addition, modulo) on numbers.
5. Handling carry values during addition.
6. Concatenating strings using the `+` operator.


* [Go back](../readme.md)
