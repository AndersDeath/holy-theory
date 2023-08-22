# Base 7

```typescript
function convertToBase7(num: number): string {
  if (num === 0) {
        return "0";
    }

    let isNegative = num < 0;
    num = Math.abs(num);
    let base7 = "";

    while (num > 0) {
        base7 = (num % 7).toString() + base7;
        num = Math.floor(num / 7);
    }

    if (isNegative) {
        base7 = "-" + base7;
    }

    return base7;
};
```

**Solution:**
Below are the step-by-step explanations of the code:

1. The `convertToBase7` function is defined, which takes one parameter:
   - `num`: a number to be converted to base-7.

2. The first condition checks if `num` is equal to 0. If it is, it means the input number is already 0, so the function returns the string "0" as the base-7 representation of 0.

3. A variable `isNegative` is initialized to `true` if `num` is less than 0, indicating a negative number. This is used to determine the sign of the base-7 representation.

4. The `num` is converted to its absolute value using `Math.abs(num)` to ensure positive values for further calculations.

5. A variable `base7` is initialized as an empty string. It will store the base-7 representation of `num`.

6. A `while` loop is used to iterate as long as `num` is greater than 0.

7. Inside the loop, the remainder of `num` divided by 7 (`num % 7`) is computed and converted to a string using `.toString()`. This represents the next digit in the base-7 representation.

8. The obtained digit is appended to the front of the `base7` string using `base7 = (num % 7).toString() + base7`.

9. The `num` is updated by performing integer division (`Math.floor(num / 7)`), effectively removing the last digit in the base-7 representation.

10. Steps 7-9 are repeated until `num` becomes 0.

11. After the loop ends, the base-7 representation, stored in the `base7` string, is ready.

12. If the original `num` was negative (`isNegative` is `true`), a "-" sign is prefixed to the `base7` string to indicate the negative sign.

13. The final `base7` string is returned as the result.

**Techniques used:**

The following techniques are utilized within the code:

1. Conditional branching using `if` statements.
2. Manipulating variables to track the sign and absolute value of a number.
3. Performing mathematical operations, such as modulus and integer division.
4. Concatenating strings to build the base-7 representation.
5. Returning a calculated result.

**Source: https://leetcode.com**
