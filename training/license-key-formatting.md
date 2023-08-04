---
title: License Key Formatting
tags: ['training', 'task']
languages: ['typescript']
---
# License Key Formatting

```typescript
function licenseKeyFormatting(s: string, k: number): string {
  const str = s.replace(/-/g, '').toUpperCase();
  
  let result = '';
  let count = 0;
  
  for (let i = str.length - 1; i >= 0; i--) {
    result = str[i] + result;
    count++;
    
    if (count === k && i !== 0) {
      result = '-' + result;
      count = 0;
    }
  }
  
  return result;
};
```

The code is a TypeScript function that formats a license key string by removing hyphens and grouping the characters in blocks of a specified length. It then returns the formatted license key.

Here's a step-by-step explanation of the code:

1. The `licenseKeyFormatting` function takes two parameters: `s` (the input license key string) and `k` (the desired block length).

2. It first uses the `replace` method with a regular expression (`/-/g`) to remove all hyphen characters from the input string `s`. Then, the `toUpperCase` method is applied to convert all characters to uppercase.

3. The function initializes two variables: `result`, which will store the formatted license key, and `count`, which keeps track of the number of characters added to the current block.

4. The function uses a `for` loop to iterate through the characters of the modified string `str` in reverse order, starting from the end of the string (`str.length - 1`) and going backward.

5. Inside the loop:
   - The current character `str[i]` is concatenated to the beginning of the `result` string.
   - The `count` is incremented.
   
6. If the `count` reaches the specified block length `k` and the loop index `i` is not at the beginning of the string (i.e., `i !== 0`), a hyphen `-` is concatenated to the beginning of the `result` string, and the `count` is reset to 0. This creates the desired block separation.

7. After the loop completes, the function returns the `result`, which now contains the formatted license key.

Techniques used in this code include:
- Using regular expressions (`replace`) to modify a string.
- Iterating through a string in reverse order using a `for` loop.
- Concatenating strings to build the formatted license key.
- Using conditional statements (`if`) to check conditions and control the loop.


* [Go back](../readme.md)