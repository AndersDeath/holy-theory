---
title: Detect Capital Use
tags: ['training', 'task']
languages: ['typescript']
---
# Detect Capital Use

```typescript
function detectCapitalUse(word: string): boolean {
  const isUpperCase = (ch: string): boolean => ch === ch.toUpperCase();

    if (word === word.toUpperCase()) {
        return true;
    }

    if (word === word.toLowerCase()) {
        return true;
    }

    if (isUpperCase(word[0]) && word.slice(1) === word.slice(1).toLowerCase()) {
        return true;
    }

    return false;
};
```
**Solution:**

Step-by-step breakdown of the code:

1. The function `detectCapitalUse` takes a `word` as input and returns a boolean value indicating if the capitalization of the word is correct.

2. The function defines an inner helper function `isUpperCase` which takes a character `ch` as input and returns `true` if the character is uppercase, and `false` otherwise.

3. The first condition checks if the entire `word` is uppercase. It uses the `word.toUpperCase()` method to convert the `word` to uppercase and compares it with the original `word`. If they are equal, it means that all characters in the word are uppercase, so the function returns `true`.

4. The second condition checks if the entire `word` is lowercase. It uses the `word.toLowerCase()` method to convert the `word` to lowercase and compares it with the original `word`. If they are equal, it means that all characters in the word are lowercase, so the function returns `true`.

5. The third condition checks if the first character of the `word` is uppercase (`isUpperCase(word[0])`) and the remaining characters (excluding the first character) are all lowercase (`word.slice(1) === word.slice(1).toLowerCase()`). If both conditions are true, it means that the capitalization of the word follows the correct pattern, so the function returns `true`.

6. If none of the above conditions are satisfied, it means that the capitalization of the word is incorrect, so the function returns `false`.

Techniques used:

1. Function Declaration: The code defines the function `detectCapitalUse` to encapsulate the capitalization checking logic.

2. Helper Function: The code defines an inner helper function `isUpperCase` to check if a character is uppercase.

3. Conditional Statements: The code uses conditional statements (`if` statements) to check different conditions and return the appropriate boolean value.

4. String Methods: The code uses the `toUpperCase()`, `toLowerCase()`, `slice()`, and `===` methods to manipulate and compare strings.

Summary:

The provided JavaScript code checks the capitalization of a given word and returns `true` if the capitalization is correct (e.g., all uppercase, all lowercase, or starting with an uppercase followed by lowercase), and `false` otherwise.

* [Go back](../readme.md)