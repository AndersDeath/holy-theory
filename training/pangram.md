---
title: Pangram
tags: ['training', 'task']
languages: ['typescript']
---
# Pangram
```typescript
function isPangram(string:string){
    const set = new Set();
    string.toLowerCase().split('').forEach((letter:string) => {
      if(/^[A-Za-z]+$/.test(letter)) {
        set.add(letter);
      }
    });
    return [...set].length === 26;
  }
```

The `isPangram` function checks whether a given string is a pangram, which is a sentence that contains every letter of the alphabet at least once. Here's how the function works:

1. It initializes an empty `Set` named `set` to keep track of unique letters encountered in the string.

2. It converts the input `string` to lowercase using the `toLowerCase()` method to ensure that the function is case-insensitive.

3. It splits the lowercase string into an array of characters using the `split('')` method.

4. It iterates through each letter using the `forEach` method on the array. Inside the loop:
   - It uses a regular expression (`/^[A-Za-z]+$/`) to test if the current letter is an alphabetical character (uppercase or lowercase).
   - If the letter matches the regular expression, it adds the lowercase version of the letter to the `set`.

5. After iterating through all letters, the function converts the `set` to an array using the spread operator `[...set]` and calculates its length.

6. It checks if the length of the array is equal to 26. If it is, it means that all 26 unique letters of the alphabet were encountered in the input string, and the function returns `true`, indicating that the input string is a pangram. Otherwise, it returns `false`.

**Techniques Used:**

- **Set Data Structure:** The `Set` data structure is used to store unique letters encountered in the string.

- **Regular Expression:** A regular expression is used to test whether a character is an alphabetical character.

- **String Manipulation:** The function converts the input string to lowercase and splits it into an array of characters for processing.

**Summary:**

The `isPangram` function determines if a given string is a pangram by checking if it contains all 26 unique letters of the alphabet at least once. It uses a `Set` to track encountered letters and a regular expression to identify alphabetical characters.

* [Go back](../readme.md)
