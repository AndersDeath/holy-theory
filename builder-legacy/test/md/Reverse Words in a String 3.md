
# Reverse Words in a String 3

```typescript
function reverseWords(s: string): string {
  const words = s.split(" ");
  const reversedWords = [];

  for (let word of words) {
    const reversedWord = word.split("").reverse().join("");
    reversedWords.push(reversedWord);
  }

  return reversedWords.join(" ");
}
```

1. **Function Input and Output**:

   - **Input**: The `reverseWords` function takes a string `s` as input, where `s` consists of words separated by spaces.
   - **Output**: It returns a new string with each word in the input string reversed.

2. **Word Splitting**:

   - The input string `s` is split into an array of words using the `split` method with space (' ') as the delimiter. The result is stored in the `words` array.

3. **Word Reversal Loop**:

   - The function enters a loop that iterates through each word in the `words` array.
   - For each word, it creates a new array `reversedWord` by splitting the word into an array of characters, reversing the characters, and then joining them back together using the `reverse` and `join` methods.

4. **Reversed Words Collection**:

   - The reversed word is pushed into the `reversedWords` array.

5. **Array to String Conversion**:

   - After reversing all words, the `reversedWords` array is joined into a string using space (' ') as the delimiter, resulting in a new string where each word is reversed but the order of words is maintained.

6. **Output**:
   - The final string with reversed words is returned as the output of the function.

**Techniques Used**:

1. String Splitting and Joining:

   - Splitting the input string into an array of words using the `split` method with space as the delimiter, and joining arrays of characters back into words using the `join` method.

2. Word Reversal:

   - Reversing each word in the input string by splitting it into characters, reversing the characters, and then joining them back together.

3. Array to String Conversion:
   - Converting an array of reversed words back to a string using the `join` method to obtain the final result.

This TypeScript function reverses the characters within each word of a string while maintaining the order of the words.

- [Go back](../readme.md)
