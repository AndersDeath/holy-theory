---
title: Isomorphic Strings
tags: ['training', 'task']
languages: ['typescript']
---
# Isomorphic Strings

```typescript
function isIsomorphic(s: string, t: string): boolean {
       if(s.length != t.length) return false;
        const m1 = [];
        const m2 = [];
        for(let i=0; i< s.length; i++){
            if(m1[s[i]] != m2[t[i]]) return false;

            m1[s[i]] = i+1;
            m2[t[i]] = i+1;
        }

        return true;
};
```

The code is a TypeScript function that determines whether two strings, `s` and `t`, are isomorphic. Two strings are considered isomorphic if there is a one-to-one mapping of characters between them such that each character in string `s` can be replaced by a corresponding character in string `t`.

Here's a step-by-step explanation of the code:

1. The function `isIsomorphic` takes two string parameters: `s` and `t`.

2. It first checks if the lengths of the two strings are not equal. If they have different lengths, the function immediately returns `false`, as two strings with different lengths cannot be isomorphic.

3. It initializes two arrays, `m1` and `m2`, to keep track of the mappings of characters between the two strings. The indices of the arrays represent characters in the strings, and the values represent the corresponding indices where these characters were last seen.

4. The function then iterates through each character in the strings using a `for` loop.

5. Inside the loop, it checks if the mappings of the current characters in `s` and `t` are not the same. If they are not the same, it means that the characters do not follow the one-to-one mapping, and the function returns `false`.

6. If the mappings of the characters are the same, the function updates the mappings in arrays `m1` and `m2`. It assigns the current index `i + 1` to the character in both arrays. Adding 1 to the index ensures that a mapping value of 0 (which is the default) is not confused with a valid index.

7. After iterating through all characters, the function returns `true`, indicating that the two strings are indeed isomorphic.

Techniques used in this code include:
- Iterating through strings using a `for` loop.
- Using arrays to store character mappings between the two strings.
- Conditional statements to check character mappings and determine isomorphism.


* [Go back](../readme.md)