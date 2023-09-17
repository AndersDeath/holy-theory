---
title: Longest Palindromic Substring
tags: ['training', 'task']
languages: ['typescript']
---
# Longest Palindromic Substring

```typescript
function longestPalindrome(s: string): string {

    let length = s.length;
    let maxLength = 1;
    let start = 0;

    let table = new Array(length);
    for(let i = 0; i < length; i++) {
        table[i] = new Array(length);
    }

    for(let i = 0; i < length; i++) {
        table[i][i] = true;
    }

    for(let i = 0; i < length; i++) {
        if(s[i] === s[i+1]) {
            table[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    for(let k = 3; k <= length; k++) {
        for(let i = 0; i < length - k + 1; i++) {
            let j = i + k - 1;

            if(table[i + 1][j - 1] && s[i] == s[j]) {
                table[i][j] = true;
                if(k > maxLength) {
                    start = i;
                    maxLength = k;
                }

            }
        }
    }

    
    return s.slice(start, start + maxLength);
};
```

**Step-by-Step solution:**

1. Define a function `longestPalindrome` that takes a string `s` as input.

2. Initialize variables:
   - `length`: Length of the input string.
   - `maxLength`: Length of the longest palindrome found.
   - `start`: Starting index of the longest palindrome.

3. Create a 2D array `table` to store information about palindromes. Initialize this array with `false` values.

4. Iterate through the characters of the string using a loop, and set `table[i][i]` to `true` for each character, indicating that single characters are palindromes.

5. Iterate through the string again, this time checking for adjacent identical characters. If found, set `table[i][i + 1]` to `true`, indicating palindromes of length 2, and update `start` and `maxLength` accordingly.

6. Use two nested loops to iterate through possible palindrome lengths `k` starting from 3. The outer loop handles the length of palindromes, and the inner loop iterates through the string, checking substrings of length `k`.

7. For each substring of length `k`, check if the characters at the current positions `i` and `j` match (`s[i] == s[j]`) and if the substring within `table[i + 1][j - 1]` is also a palindrome. If both conditions are met, set `table[i][j]` to `true` and update `start` and `maxLength`.

8. After completing all iterations, return the substring of `s` starting from index `start` and spanning `maxLength` characters. This substring represents the longest palindrome found in the input string.

**Techniques Used:**

1. **Dynamic Programming:** The algorithm utilizes a dynamic programming approach to solve the longest palindrome problem. The `table` array is used to store intermediate results, avoiding redundant calculations and improving efficiency.

2. **String Manipulation:** The algorithm works with the input string to identify palindromic substrings and their lengths.

3. **Nested Loops:** The solution involves nested loops to iterate through various indices and lengths of substrings, allowing for the comparison and identification of palindromic segments.

**Summary:**

The `longestPalindrome` function employs dynamic programming to find the longest palindromic substring within the input string. By utilizing the `table` array to store and track palindromic substrings, the algorithm optimally identifies the longest palindrome. The technique of dynamic programming and efficient substring comparison ensures an effective solution for finding the longest palindrome in a string.


* [Go back](../readme.md)
