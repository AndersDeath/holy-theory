# Excel Sheet Column Title

```typescript
function convertToTitle(columnNumber: number): string {
      let output: string[] = [];
        while (columnNumber > 0) {
            let j = columnNumber % 26;
            if (j == 0) {
                output.push("Z");
                columnNumber = Math.floor(columnNumber / 26) - 1;
            }
            else {
                output.push(String.fromCharCode((j - 1) + 'A'.charCodeAt(0)));
                columnNumber = Math.floor(columnNumber / 26);
            }
        }
    return output.reverse().join("");
};
```
**Solution:**

Step-by-step breakdown of the code:

1. `let output: string[] = [];`: This initializes an empty array called `output` to store the characters of the Excel sheet column title.

2. `while (columnNumber > 0) {`: This loop continues until the `columnNumber` becomes 0.

3. `let j: number = columnNumber % 26;`: This calculates the remainder `j` when `columnNumber` is divided by 26. The remainder represents the rightmost digit in the Excel sheet column title.

4. `if (j === 0) {`: This condition checks if the remainder `j` is equal to 0. If it is, it means the rightmost digit should be 'Z', and the columnNumber needs to be adjusted accordingly.

5. `output.push("Z");`: If the remainder is 0, 'Z' is pushed into the `output` array.

6. `columnNumber = Math.floor(columnNumber / 26) - 1;`: In this case, the columnNumber is divided by 26, and 1 is subtracted to adjust for the 'Z' digit. This step moves the columnNumber to the next left digit.

7. `else {`: If the remainder `j` is not 0, this branch is executed.

8. `output.push(String.fromCharCode((j - 1) + 'A'.charCodeAt(0)));`: This line converts the current digit to its corresponding uppercase English letter and adds it to the `output` array. The calculation `(j - 1) + 'A'.charCodeAt(0)` maps the remainder `j` to the ASCII code of the corresponding uppercase English letter. The `String.fromCharCode()` method converts the ASCII code to a character.

9. `columnNumber = Math.floor(columnNumber / 26);`: This step moves the columnNumber to the next left digit.

10. After processing all the digits in the columnNumber, the loop ends, and the function returns the Excel sheet column title.

11. `return output.reverse().join("");`: The function reverses the `output` array (as we processed the digits from right to left) and joins the characters to form the final Excel sheet column title.

Summary:

The provided TypeScript function `convertToTitle` takes a column number as input and converts it to the corresponding Excel sheet column title represented by uppercase English letters.

Techniques used:

1. TypeScript: The code is written in the TypeScript programming language, which is a superset of JavaScript with added type annotations.

2. Loop: The code uses a `while` loop to process the digits in the columnNumber and convert them to the corresponding Excel sheet column title characters.

3. Array: The `output` array is used to store the characters of the Excel sheet column title before joining them into a string.

4. String.fromCharCode(): The `String.fromCharCode()` method is used to convert ASCII codes to characters and get the corresponding uppercase English letters.

5. Math.floor(): The `Math.floor()` method is used to round down the division result when calculating the next left digit in the columnNumber.

