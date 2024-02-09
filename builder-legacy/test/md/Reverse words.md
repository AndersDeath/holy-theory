
# Reverse words

```typescript
function reverseWords(str: string): string {
  return str
    .split(" ")
    .map((word: string) => {
      let w = word.split("").reverse();
      return w.join("");
    })
    .join(" ");
}
```
1. **Function Input and Output**:
   - **Input**: The `reverseWords` function takes a string `str` as input, where `str` consists of words separated by spaces.
   - **Output**: It returns a new string with each word in the input string reversed.

2. **Word Splitting and Mapping**:
   - The input string `str` is split into an array of words using the `split` method with space (' ') as the delimiter. This creates an array of words.
   - The `map` method is then applied to each word in the array. For each word, the following steps are performed.

3. **Word Reversal**:
   - Each word is further split into an array of characters using the `split` method. This array of characters is reversed using the `reverse` method.
   - The reversed array of characters is then joined back together using the `join` method to form the reversed word.

4. **Reversed Words Array**:
   - The `map` method returns an array of reversed words.

5. **Array to String Conversion**:
   - The array of reversed words is joined into a string using space (' ') as the delimiter, resulting in a new string where each word is reversed but the order of words is maintained.

6. **Output**:
   - The final string with reversed words is returned as the output of the function.

**Techniques Used**:

1. String Splitting and Joining:
   - Splitting the input string into an array of words using the `split` method with space as the delimiter, and joining arrays of characters back into words using the `join` method.

2. Mapping and Transforming:
   - Using the `map` method to apply a transformation to each word in the array.

3. Word Reversal:
   - Reversing each word in the input string by splitting it into characters, reversing the characters, and then joining them back together.

4. Array to String Conversion:
   - Converting an array of reversed words back to a string using the `join` method to obtain the final result.

This TypeScript function achieves the same result as the previous implementation, reversing the characters within each word of a string while maintaining the order of the words.
