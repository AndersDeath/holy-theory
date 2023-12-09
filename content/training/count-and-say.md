---
title: Count and Say
tags: ['training', 'task']
languages: ['typescript']
---
# Count and Say

```typescript

function countAndSay(n: number): string {
    if (n === 1) {
        return "1";
    }

    const prevResult = countAndSay(n - 1);
    let result = "";
    let count = 1;

    for (let i = 0; i < prevResult.length; i++) {
        if (prevResult[i] === prevResult[i + 1]) {
            count++;
        } else {
            result += count + prevResult[i];
            count = 1;
        }
    }

    return result;
};

```

**Solution:**
Let's break down the provided TypeScript function `countAndSay` step by step:

```typescript
function countAndSay(n: number): string {
    // Step 1: Base case - when n is 1, return "1"
    if (n === 1) {
        return "1";
    }

    // Step 2: Recursively call countAndSay for n-1
    const prevResult = countAndSay(n - 1);

    // Step 3: Initialize variables for the current result and count
    let result = "";
    let count = 1;

    // Step 4: Iterate through the previous result to generate the current result
    for (let i = 0; i < prevResult.length; i++) {
        // Step 5: Check if the current character is the same as the next one
        if (prevResult[i] === prevResult[i + 1]) {
            // If yes, increment the count
            count++;
        } else {
            // If no, append the count and the character to the result
            result += count + prevResult[i];
            // Reset the count for the new character
            count = 1;
        }
    }

    // Step 6: Return the generated result for the current n
    return result;
};
```
## Solution

1. **Base Case:**
   - Check if `n` is 1. If so, return the base case "1".

2. **Recursive Call:**
   - Recursively call `countAndSay` for `n - 1` to get the previous result (`prevResult`).

3. **Initialize Variables:**
   - Initialize variables `result` to store the current result and `count` to count the occurrences of a character.

4. **Iterate Through Previous Result:**
   - Use a `for` loop to iterate through the characters of the previous result (`prevResult`).

5. **Count Consecutive Characters:**
   - Check if the current character is the same as the next one.
   - If true, increment the `count`.

6. **Generate Current Result:**
   - If the current character is different from the next one:
      - Append the count and the current character to the result (`result`).
      - Reset the count for the new character.

7. **Return Result:**
   - Return the generated result for the current `n`. This process continues recursively until the base case is reached.