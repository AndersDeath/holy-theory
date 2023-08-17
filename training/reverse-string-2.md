---
title: Reverse String II
tags: ['training', 'task']
languages: ['typescript']
---
# Reverse String II

```typescript

function reverseStr(s: string, k: number): string {
 const chars = s.split('');
  
  for (let i = 0; i < chars.length; i += 2 * k) {
    let start = i;
    let end = Math.min(i + k - 1, chars.length - 1);
    
    while (start < end) {
      [chars[start], chars[end]] = [chars[end], chars[start]];
      start++;
      end--;
    }
  }
  
  return chars.join('');
};

```

1. **Function Input and Output**:
   - **Input**: The `reverseStr` function takes a string `s` and an integer `k` as input.
   - **Output**: It returns a modified string where every block of `k` characters is reversed, starting from the beginning.

2. **String to Character Array Conversion**:
   - The input string `s` is split into an array of individual characters using the `split('')` method.

3. **Reversing Blocks of Characters**:
   - The function iterates through the array of characters with a step size of `2 * k`.
   - For each block, `start` is set as the current index `i`, and `end` is set as the minimum of `(i + k - 1)` and `(chars.length - 1)`.

4. **Two-Pointer Character Reversal**:
   - Inside each block, characters at `start` and `end` indices are swapped using array destructuring.
   - The pointers `start` and `end` move towards each other until they meet, effectively reversing the characters within the block.

5. **Character Array to String Conversion**:
   - After reversing the characters, the modified character array is joined back into a string using the `join('')` method.

6. **Return Result**:
   - The modified string, where every block of `k` characters has been reversed, is returned as the output.

**Techniques Used**:

1. Looping and Array Manipulation:
   - Iterating through the character array with a step size.
   - Reversing characters within each block using two pointers.

2. Swapping Variables:
   - Using array destructuring to swap characters at `start` and `end` indices.

3. String Manipulation:
   - Converting the input string to an array of characters.
   - Joining the character array back into a string to form the modified string.

This TypeScript function takes a string and an integer, reverses blocks of characters within the string, and returns the modified string.


* [Go back](../readme.md)