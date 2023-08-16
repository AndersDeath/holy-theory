---
title: Repeated Substring Pattern
tags: ['training', 'task']
languages: ['typescript']
---
# Repeated Substring Pattern

```typescript
function repeatedSubstringPattern(s: string): boolean {
    for (let size=1;size<=s.length/2;size++) {
            if (s.length%size==0) {
                let curr=s.substring(0,size);
                let j=size;
                while (j<s.length && s.substring(j,j+size) === curr) {
                    j+=size;
                }
                if (j==s.length) return true;
            }
        }
        return false;
};
```

1. **Input and Loop**: The function `repeatedSubstringPattern` takes a string `s` as input and aims to determine whether the string can be formed by repeatedly concatenating a substring. It uses a `for` loop to iterate through different sizes of substrings, starting from size 1 up to `s.length / 2`.

2. **Size-based Division Check**: For each substring size, it checks if the total length of the string is divisible by the current size (i.e., `s.length % size == 0`). If not, the substring of the current size cannot be repeated to form the entire string, so the loop proceeds to the next size.

3. **Substring Formation Check**: If the string length is divisible by the current size, it attempts to form the string by repeatedly concatenating the substring of the current size (`curr`). It uses a `while` loop with an index `j` starting from the size to traverse the string in chunks of the current size. Inside the loop, it compares the substring from index `j` to `j + size` with the `curr` substring. If they match, it increments `j` by the current size.

4. **Final Comparison**: If the `while` loop completes successfully (i.e., `j` reaches the end of the string), it means the string can be formed by repeatedly concatenating the current substring size. In this case, the function returns `true`.

5. **Returning False**: If none of the substring sizes can form the entire string, the function returns `false`.

**Techniques Used**:

1. Looping (`for` loop and `while` loop): Iterating through different substring sizes and traversing the string to compare substrings.
2. Substring Comparison (`s.substring()`): Checking if substrings match by comparing them using the `===` operator.
3. Divisibility Check (`s.length % size == 0`): Checking if the string length is divisible by the current substring size.
4. String Concatenation (`curr = s.substring(0, size)`): Forming substrings of the current size to attempt to construct the entire string.

This function checks if a given string can be formed by repeatedly concatenating a substring of various sizes. If so, it returns `true`; otherwise, it returns `false`.


* [Go back](../readme.md)
