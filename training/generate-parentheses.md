---
title: Generate Parentheses
tags: ['training', 'task']
languages: ['typescript']
---
# Generate Parentheses

```typescript
function generateParenthesis(n: number): string[] {
    const result = [];
    generator(result, "", 0,0,n)
    return result;
};

function generator(result, s, open, close, n) {
    if(open === n && close === n) {
        result.push(s);
        return;
    }
    if(open < n) {
         generator(result, s + '(', open +1, close, n);
    }
    if(close < open) {
         generator(result, s + ')', open, close + 1, n);
    }
    
}
```

The code is an implementation of a function to generate all valid combinations of parentheses given a positive integer `n`. The function `generateParenthesis` takes an integer `n` as input and returns an array of strings containing all valid combinations of parentheses.

Here's a step-by-step explanation of the code:

1. `function generateParenthesis(n: number): string[]`: This is the main function that takes an integer `n` as input and returns an array of strings representing all valid combinations of parentheses.

2. `const result = [];`: This initializes an empty array `result` to store the generated combinations of parentheses.

3. `generator(result, "", 0, 0, n)`: This line calls the `generator` function to start generating valid combinations of parentheses. The initial values for `s` (current combination), `open` (number of open parentheses), `close` (number of close parentheses), and `n` (total number of parentheses to be generated) are passed as arguments.

4. `function generator(result, s, open, close, n)`: This is a recursive function that generates valid combinations of parentheses.

5. `if (open === n && close === n)`: This condition checks if we have generated the desired number of open and close parentheses, which is equal to `n`. If both are equal to `n`, it means we have a valid combination of parentheses, and it is added to the `result` array.

6. `if (open < n)`: This condition checks if the number of open parentheses is less than `n`. If true, we call the `generator` function recursively with an additional open parenthesis added to the current combination.

7. `if (close < open)`: This condition checks if the number of close parentheses is less than the number of open parentheses. If true, we call the `generator` function recursively with an additional close parenthesis added to the current combination.

8. The function will continue generating combinations of parentheses until all valid combinations are found.

9. Finally, the `result` array containing all valid combinations of parentheses is returned as the output.

Techniques used in the code:
- Recursion: The function `generator` is implemented using recursion to explore all possible combinations of parentheses.
- Backtracking: The recursion and condition checks for open and close parentheses help in generating valid combinations and avoiding invalid ones.

* [Go back](../readme.md)
