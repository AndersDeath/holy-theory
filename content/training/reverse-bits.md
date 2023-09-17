---
title: Reverse bits
tags: ['training', 'task']
languages: ['javascript']
---
# Reverse bits

```javascript
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let reversedArray = n.toString(2).split("").reverse()
    while(reversedArray.length <32){ reversedArray.push('0')}
    return  parseInt(reversedArray.join(""),2) 
};

``` 

1. **Function Input and Output**: The `reverseBits` function takes a positive integer `n` as input and returns another positive integer, which is the result of reversing the binary representation of `n`.

2. **Binary Conversion and Reversal**:
   - `n.toString(2)`: The input integer `n` is converted to its binary representation as a string.
   - `.split("")`: The binary string is split into an array of characters.
   - `.reverse()`: The array of binary digits is reversed to obtain the reversed binary representation.

3. **Padding to 32 Bits**: While the length of the reversed binary array is less than 32 (since JavaScript uses 32-bit representation for integers), the array is padded with `'0'` at the end to ensure it has a total of 32 bits.

4. **Binary to Integer Conversion**: The reversed binary array is then joined back into a string and converted to an integer using `parseInt` with base 2, which represents binary.

5. **Return Result**: The final integer, which is the result of reversing the binary representation of the input integer `n`, is returned.

**Techniques Used**:

1. String Manipulation: Converting the integer to binary string, splitting, and joining it for reversing and padding.
2. Looping and Array Manipulation: Adding `'0'` padding to the binary array until it reaches a length of 32.
3. Integer Conversion (`parseInt`): Converting the reversed binary string back to an integer using base 2.

This function essentially takes a positive integer, reverses its binary representation, and returns the resulting integer.


* [Go back](../readme.md)
