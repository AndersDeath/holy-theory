---
title: Regular Expression Matching
tags: ['training', 'task']
languages: ['typescript']
---
# Regular Expression Matching

```typescript
function isMatch(s: string, p: string): boolean {
 const dp: boolean[][] = [];

  for (let i = 0; i <= s.length; i++) {
    dp[i] = [];
    for (let j = 0; j <= p.length; j++) {
      dp[i][j] = false;
    }
  }

  dp[0][0] = true;

  for (let i = 0; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2] || (i > 0 && dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'));
      } else {
        dp[i][j] = i > 0 && dp[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '.');
      }
    }
  }

  return dp[s.length][p.length];
};
```

**Explanation with Steps:**

**Step 1:** Create a 2D array `dp` of booleans to store the matching status of substrings of `s` and `p`.

**Step 2:** Initialize the first cell `dp[0][0]` as `true` since an empty string matches an empty pattern.

**Step 3:** Iterate through each possible length of substring of `s` from 0 to its length.

**Step 4:** Inside the loop, iterate through each possible length of pattern substring from 1 to its length.

**Step 5:** If the current character in pattern `p[j - 1]` is a '*', handle the case where '*' can match zero preceding element or multiple preceding elements.

**Step 6:** If the current character in pattern `p[j - 1]` is not a '*', check if the previous characters match and the current characters match (or the current character in pattern is '.'). Update `dp[i][j]` accordingly.

**Step 7:** After completing the loops, `dp[s.length][p.length]` contains the result indicating whether the entire string `s` matches the entire pattern `p`.

**Techniques Used:**

1. **Dynamic Programming (DP):** Utilizes a 2D DP array to store the matching status of substrings of `s` and `p`.

2. **2D Array Initialization:** Initializes the 2D array `dp` and sets all values to `false` initially.

3. **Base Case Initialization:** Sets `dp[0][0]` to `true`, indicating that an empty string matches an empty pattern.

4. **Iterative Looping:** Iterates through each possible length of substring of `s` and pattern `p`.

5. **Pattern Matching Logic:** Uses pattern matching logic for different cases, including handling '*', matching characters, and matching '.'.

6. **Updating DP Array:** Updates the `dp` array based on the matching conditions and previous values in the array.

7. **Final Result:** The value at `dp[s.length][p.length]` represents whether the entire string `s` matches the entire pattern `p`.



* [Go back](../readme.md)
