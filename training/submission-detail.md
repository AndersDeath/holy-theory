---
title: Submission Detail
tags: ["training", "task"]
languages: ["typescript"]
---

# Submission Detail

```typescript
function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  let j = 0;
  while (i < s.length) {
    if (j === t.length) {
      return false;
    }
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return true;
}
```

**Description:**

1. **Input and Output**:

   - The `isSubsequence` function takes two strings, `s` and `t`, and returns a boolean value indicating whether `s` is a subsequence of `t`.

2. **Iteration**:

   - The code uses two pointers, `i` and `j`, to iterate through the strings `s` and `t`, respectively.

3. **Comparison**:

   - While iterating, the code compares each character of `s` with the character of `t` at the same index (`i` and `j`).

4. **Subsequence Check**:

   - If `s[i]` matches `t[j]`, the pointer `i` is advanced, indicating that the current character in `s` is found in `t`.
   - If `j` reaches the end of string `t` and `i` hasn't reached the end of string `s`, it means there are characters left in `s` that haven't been found in `t`, and the function returns `false`.

5. **Continuation**:

   - Regardless of whether there is a match, the pointer `j` is always advanced to move through string `t`.

6. **Return Result**:
   - If all characters in string `s` are successfully matched in order in string `t`, the function returns `true`, indicating that `s` is a subsequence of `t`.

**Techniques used:**

1. Two-pointer approach for iterating through two strings simultaneously.
2. Character comparison between two strings.
3. Loop control using conditions.

**Algorithm Complexity:**

- Time Complexity: O(n), where n is the length of string `t`. The code iterates through the characters of string `t` once.
- Space Complexity: O(1), as only a constant amount of extra space is used for variables (`i` and `j`).

This code efficiently determines whether string `s` is a subsequence of string `t`.

- [Go back](../readme.md)
