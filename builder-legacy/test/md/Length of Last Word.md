# Length of Last Word

```typescript
function lengthOfLastWord(s: string): number {
    s = s.trim();
    let counter = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] === ' ') {
            break;
        }
        counter++;
    }

    return counter;
};
```

The code is a TypeScript function that calculates the length of the last word in a given string. It does this by iterating through the string from the end and counting the characters of the last word until a space character is encountered.

Here's a step-by-step explanation of the code:

1. The `lengthOfLastWord` function takes a single parameter `s`, which is the input string.

2. It first trims the input string using the `trim` method to remove any leading or trailing whitespace.

3. It initializes a variable `counter` to keep track of the length of the last word.

4. The function uses a `for` loop to iterate through the characters of the trimmed string in reverse order, starting from the end of the string (`s.length - 1`) and going backward.

5. Inside the loop, it checks if the current character (`s[i]`) is a space character (' '). If a space character is encountered, it means the last word has been counted, and the loop is terminated using the `break` statement.

6. If the current character is not a space character, the `counter` is incremented.

7. After the loop completes, the function returns the value of the `counter`, which represents the length of the last word.

Techniques used in this code include:
- Using the `trim` method to remove leading and trailing whitespace from a string.
- Iterating through a string in reverse order using a `for` loop.
- Using conditional statements (`if`) to check characters and control the loop.
- Using the `break` statement to exit a loop prematurely.


