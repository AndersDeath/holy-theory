---
title: Valid parentheses
tags: ["training", "task"]
languages: ["typescript"]
---

# Valid parentheses

```typescript
function isValid(s: string): boolean {
  const temp = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      temp.push(s[i]);
    } else if (s[i] == ")" && temp.length && temp[temp.length - 1] === "(") {
      temp.pop();
    } else if (s[i] == "]" && temp.length && temp[temp.length - 1] === "[") {
      temp.pop();
    } else if (s[i] == "}" && temp.length && temp[temp.length - 1] === "{") {
      temp.pop();
    } else {
      return false;
    }
  }

  return temp.length === 0;
}
```

- **Input**:

  - `s`: A string containing parentheses and braces.

- **Output**:
  - A boolean value indicating whether the parentheses and braces in the string are balanced.

1. **Initialization**:

   - Initialize an empty array `temp` to act as a stack to track opening brackets.

2. **Iterate Through the String**:

   - Iterate through each character `s[i]` in the given string `s`.

3. **Handle Opening Brackets**:

   - If the current character is an opening bracket ('(', '{', or '['), push it onto the `temp` stack.

4. **Handle Closing Brackets**:

   - If the current character is a closing bracket (')', '}', or ']'):
     - Check if the `temp` stack is not empty and the top of the stack matches the corresponding opening bracket for the current closing bracket.
     - If the condition is met, pop the top element from the `temp` stack.
     - If the condition is not met, return `false` as the brackets are not balanced.

5. **Handle Other Characters**:

   - If the current character is not an opening or closing bracket, return `false` as the string contains invalid characters.

6. **Check Stack**:
   - After processing all characters, check if the `temp` stack is empty.
   - If the stack is empty, return `true` (balanced brackets).
   - If the stack is not empty, return `false` (unbalanced brackets).

**Techniques Used**:

- **Stack**: A stack data structure is used to keep track of opening brackets.

**Algorithm**:

1. Initialize an empty stack `temp`.

2. Iterate through each character `s[i]` in the input string `s`.

3. If the current character is an opening bracket ('(', '{', or '['), push it onto the stack.

4. If the current character is a closing bracket (')', '}', or ']'), check if the stack is not empty and the top element of the stack matches the corresponding opening bracket. If yes, pop the top element from the stack. If not, return `false`.

5. If the current character is neither an opening nor a closing bracket, return `false`.

6. After processing all characters, check if the stack is empty. If yes, return `true` (balanced brackets). If not, return `false` (unbalanced brackets).

**Time Complexity**:

- The time complexity is O(n), where `n` is the length of the input string. The code iterates through the string once.

**Space Complexity**:

- The space complexity is O(n) in the worst case, where `n` is the length of the input string. The stack can store all opening brackets in the worst case.
