# Add binary

```typescript

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = "";
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) {
            sum += a[i--] - '0';
        }
        if (j >= 0) {
            sum += b[j--] - '0';
        }
        result = sum % 2 + result;
        carry = parseInt(sum / 2);
    }
    if (carry > 0) {
        result = 1 + result;
    }
    return result;
};

```

Time complexity: O(n)
Space complexity: O(n)

Apologies for the oversight. Here's the revised explanation of the `addBinary` code, including a Markdown table for better clarity:

**Solution:**

The provided code solves the task by performing binary addition on the input strings `a` and `b`. Here's a step-by-step breakdown:

| Step | Description |
|------|-------------|
|  1   | The `addBinary` function is defined, taking two parameters: `a` (a binary string) and `b` (another binary string). |
|  2   | Several variables are initialized: <ul><li>`result` is initialized as an empty string to store the result of the binary addition.</li><li>`i` is set to the index of the last character in string `a`.</li><li>`j` is set to the index of the last character in string `b`.</li><li>`carry` is initialized as 0 to hold the carry value during addition.</li></ul> |
|  3   | A `while` loop is used to iterate as long as either `i` or `j` is greater than or equal to 0. |
|  4   | Inside the `while` loop, the variable `sum` is initialized with the value of `carry`. This represents the current sum at each iteration. |
|  5   | Conditional statements are used to add the respective binary digits of strings `a` and `b` to the `sum`: <ul><li>If `i` is greater than or equal to 0, the current binary digit from `a` is added to `sum` by converting it from a character to a number using the expression `a[i--] - '0'`.</li><li>If `j` is greater than or equal to 0, the current binary digit from `b` is added to `sum` using the same conversion.</li></ul> |
|  6   | The current binary digit of the sum, obtained by taking the modulo 2 (`sum % 2`), is concatenated to the left side of the `result` string. |
|  7   | The carry value for the next iteration is updated by dividing the sum by 2 and parsing the integer value using `parseInt`. |
|  8   | If there is a remaining carry after the `while` loop ends (i.e., `carry > 0`), a '1' is concatenated to the left side of the `result` string. |
|  9   | Finally, the `result` string, which represents the sum of the binary strings `a` and `b`, is returned. |

**Techniques used:**

The following techniques are utilized within the code:

1. Iterating over a string using a `while` loop.
2. Accessing characters in a string using indices.
3. Converting a character to a number using subtraction (`'0'`).
4. Concatenating strings using the `+` operator.
5. Performing arithmetic operations (addition, modulo, division) on numbers.
6. Handling carry values during addition.
7. Checking conditions using `if` statements.
8. Updating variables with post-increment (`i--`) and assignment (`=`) operations.


