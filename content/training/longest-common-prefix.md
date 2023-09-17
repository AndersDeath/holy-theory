---
title: Longest common prefix
tags: ['training', 'task']
languages: ['typescript']
---
# Longest common prefix
```typescript
function longestCommonPrefix(strs: string[]): string {
    const size = strs.length;
    if(size === 0) return "";
    if(size === 1) return strs[0];

    strs.sort();

    let end = Math.min(strs[0].length, strs[size - 1].length);
    let i = 0;

    while(i < end && strs[0][i] === strs[size - 1][i]) {
        i++
    }

    const output = strs[0].substring(0, i);
    return output;
};

```
**Step-by-Step Explanation:**

1. Define a function `longestCommonPrefix` that takes an array of strings `strs` as input.

2. Get the size of the input array `strs`.

3. If the array is empty (size is 0), return an empty string, as there can be no common prefix.

4. If the array contains only one string (size is 1), return that string as it is the common prefix.

5. Sort the array `strs` lexicographically to facilitate comparison between the first and last strings.

6. Determine the `end` index as the minimum of the lengths of the first and last strings in the sorted array.

7. Initialize an index variable `i` to 0 to traverse characters in the strings.

8. Use a loop to compare characters at index `i` of the first and last strings, continuing as long as the characters match and `i` is less than `end`.

9. Increment `i` until either a character mismatch is found or `i` reaches the `end` index.

10. After the loop exits, extract a substring from the first string from index 0 to index `i` (exclusive). This substring represents the longest common prefix.

11. Return the extracted substring as the result, which is the longest common prefix among the strings in the input array.

**Techniques Used:**

1. **Array Sorting:** The array of strings is sorted lexicographically to bring potentially common prefixes closer together for comparison.

2. **String Comparison:** The characters of the first and last strings are compared character by character to find the longest common prefix.

3. **Substring Extraction:** A substring is extracted from the first string based on the index where the characters of the first and last strings start to differ.

**Summary:**

The `longestCommonPrefix` function takes an array of strings, sorts them, and compares characters to find the longest common prefix among the strings. By sorting the array, it reduces the comparison complexity and efficiently identifies the common prefix. The technique of lexicographical sorting and character-by-character comparison ensures an optimal solution for finding the longest common prefix.


* [Go back](../readme.md)
