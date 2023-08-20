---
title: Word Pattern
tags: ['training', 'task']
languages: ['typescript']
---
# Word Pattern

```typescript
function wordPattern(pattern: string, s: string): boolean {
    const strArr = s.split(' ');
    
    if ( strArr.length != pattern.length) {
        return false;
    }
    
    let hash = {};
    
    for (let i = 0; i < strArr.length; i++) {
        if (hash[pattern[i]]) {
            if (hash[pattern[i]] !== strArr[i]) {
                return false;
           } 
        } else {
            if (Object.values(hash).indexOf(strArr[i]) !== -1){
                return false;
            } else {
                 hash[pattern[i]] = strArr[i];
            }
        }
    }
    
    return true;
};
```
Here's the breakdown of the provided code:

- **Inputs**:
  - `pattern`: A string representing the pattern.
  - `s`: A string representing the input string.

- **Output**:
  - A boolean value indicating whether the given `pattern` matches the structure of the words in string `s`.

1. **Split Input String**:
   - Split the string `s` into an array of words using the space character (' ') as the delimiter.
   - Store this array in the variable `strArr`.

2. **Length Check**:
   - Check if the length of `strArr` is equal to the length of the `pattern`.
   - If the lengths are not equal, return `false`, indicating that the pattern cannot match the words.

3. **Pattern Mapping**:
   - Create an empty object `hash` to store the mapping of characters in the `pattern` to words in `strArr`.
   - Loop through each index `i` from 0 to the length of `strArr`:
     - If `pattern[i]` already exists in `hash`:
       - If the stored value does not match `strArr[i]`, return `false`.
     - If `pattern[i]` does not exist in `hash`:
       - Check if the value `strArr[i]` is already mapped to any character in the `hash` using `Object.values(hash).indexOf(strArr[i])`.
       - If it is, return `false`, as one word cannot be mapped to multiple characters.
       - If not, create a mapping between `pattern[i]` and `strArr[i]` in the `hash`.

4. **Pattern Mapping Successful**:
   - If the loop completes without returning `false`, return `true`, indicating that the pattern successfully matches the words in the input string.

**Techniques Used**:
- **Hash Table (Object)**: The code uses an object (`hash`) to store the mapping between characters in the pattern and words in the input string.
- **Array Manipulation**: The code splits the input string into an array of words using the `split()` method.

**Algorithm**:

1. Split the input string into an array of words (`strArr`).

2. Check if the lengths of `strArr` and `pattern` are equal. If not, return `false`.

3. Loop through each index `i` from 0 to the length of `strArr`:
   - If `pattern[i]` exists in `hash`:
     - If the stored value does not match `strArr[i]`, return `false`.
   - If `pattern[i]` does not exist in `hash`:
     - Check if `strArr[i]` is already mapped to any character in `hash`. If yes, return `false`.
     - Otherwise, create a mapping in `hash`.

4. If the loop completes without returning `false`, return `true`.

**Time Complexity**:
- The time complexity of this code is O(N), where N is the length of the input string `s`.

**Space Complexity**:
- The space complexity is O(K), where K is the number of unique characters in the pattern. In the worst case, all characters in the pattern are unique, so the space complexity is O(N), where N is the length of the pattern.


* [Go back](../readme.md)