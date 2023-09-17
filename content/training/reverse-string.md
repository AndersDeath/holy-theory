---
title: Reverse string
tags: ['training', 'task']
languages: ['typescript']
---
# Reverse string

```typescript

function reverseString(s: string[]): void {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
      let temp = s[l];
      s[l++] = s[r];
      s[r--] = temp;
    }
};

```

1. **Function Input and Output**:
   - **Input**: The `reverseString` function takes an array of characters `s` as input.
   - **Output**: It modifies the input array in-place to reverse its contents.

2. **Two-Pointer Reversal Technique**:
   - The function initializes two pointers, `l` (left) and `r` (right), to the start and end of the input array, respectively.

3. **Character Swapping**:
   - The function enters a `while` loop that continues as long as `l` is less than `r`.
   - Inside the loop, the characters at `l` and `r` indices are swapped using a temporary variable `temp` and array assignment.
   - After swapping, both `l` is incremented (using `l++`) and `r` is decremented (using `r--`) to move the pointers towards each other.

4. **Loop Termination**:
   - The loop continues until `l` is no longer less than `r`. This ensures that the characters have been swapped until the middle of the array, effectively reversing the order of characters.

5. **In-Place Modification**:
   - The input array `s` is modified in-place, and no new arrays are created.

**Techniques Used**:

1. Two-Pointer Reversal:
   - Reversing the contents of the array using two pointers (`l` and `r`) that move towards each other.

2. Array Element Swapping:
   - Swapping characters at two indices within the array using a temporary variable.

3. In-Place Modification:
   - Modifying the input array directly without creating a new array.

This TypeScript function reverses the order of characters in the input array in-place using a two-pointer reversal technique.

* [Go back](../readme.md)