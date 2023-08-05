---
title: Longest Uncommon Subsequence I
tags: ['training', 'task']
languages: ['typescript']
---
# Longest Uncommon Subsequence I
```typescript
function findLUSlength(a: string, b: string): number {
    if (a === b) {
        return -1;
    } else {
        return Math.max(a.length, b.length);
    }
};
```
**Step-by-Step solution:**

1. Define a function `findLUSlength` that takes two strings `a` and `b` as input.

2. Check if strings `a` and `b` are equal:
   - If `a` is equal to `b`, return -1. This is because a common subsequence cannot be longer than the strings themselves, so there can be no uncommon subsequence.

3. If `a` and `b` are not equal:
   - Return the maximum length between the lengths of strings `a` and `b`. This is because if the two strings are not equal, the longer string itself is the longest uncommon subsequence.

4. The function returns the length of the longest uncommon subsequence.

**Techniques Used:**

1. **Conditional Logic:** The algorithm uses conditional statements to check if the input strings are equal and returns the appropriate result based on the condition.

2. **Math.max:** The algorithm uses the `Math.max` function to compare the lengths of strings `a` and `b` and return the maximum length.

**Summary:**

The `findLUSlength` function determines the length of the longest uncommon subsequence between two input strings `a` and `b`. If the two strings are equal, it returns -1, indicating that there is no uncommon subsequence. If the strings are not equal, it returns the maximum length between the lengths of the two strings, as the longer string itself is the longest uncommon subsequence. The algorithm uses simple conditional logic and the `Math.max` function to achieve this.
* [Go back](../readme.md)
