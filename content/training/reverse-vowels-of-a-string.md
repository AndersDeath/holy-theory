---
title: Reverse Vowels of a String
tags: ['training', 'task']
languages: ['typescript']
---
# Reverse Vowels of a String

```typescript

function reverseVowels(s: string): string {
    const arr = s.split("");
    let left = 0, right = arr.length;

    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']

    while (left < right) {
        if (vowels.indexOf(arr[left]) === -1) {
            left++;
            continue;
        }
        if (vowels.indexOf(arr[right]) === -1) {
            right--;
            continue;
        }

        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr.join("");
};
```

1. **Function Input and Output**:
   - **Input**: The `reverseVowels` function takes a string `s` as input.
   - **Output**: It returns a new string with the vowels of the input string reversed while keeping the non-vowel characters in the same positions.

2. **Array Conversion**:
   - The function first converts the input string `s` into an array of characters `arr` using the `split` method.

3. **Two-Pointer Approach**:
   - The function initializes two pointers, `left` and `right`, to the start and end of the array, respectively.

4. **Vowel Detection**:
   - An array `vowels` is created containing uppercase and lowercase vowels.
   - The function enters a `while` loop that continues as long as `left` is less than `right`.
   - Inside the loop, the function checks if the character at the `left` pointer is not a vowel. If so, `left` is incremented.
   - Similarly, if the character at the `right` pointer is not a vowel, `right` is decremented.

5. **Vowel Reversal**:
   - If both characters at the `left` and `right` pointers are vowels, their positions are swapped using a temporary variable `temp`.

6. **Pointer Movement**:
   - After swapping or skipping non-vowel characters, both `left` and `right` pointers are moved accordingly (`left++` and `right--`).

7. **Array to String Conversion**:
   - After the loop, the modified `arr` is converted back to a string using the `join` method, and the reversed-vowel string is returned.

**Techniques Used**:

1. Two-Pointer Approach:
   - Reversing characters while maintaining relative positions using two pointers (`left` and `right`) that move towards each other.

2. Vowel Detection and Swapping:
   - Identifying vowels using an array of vowel characters and swapping vowel characters' positions within the array.

3. Array to String Conversion:
   - Converting an array of characters back to a string using the `join` method to obtain the final result.

This TypeScript function reverses the positions of vowels in a string while keeping the positions of non-vowel characters unchanged.
