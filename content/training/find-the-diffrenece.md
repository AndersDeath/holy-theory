---
title: Find the Difference
tags: ['training', 'task']
languages: ['typescript']
---
# Find the Difference

```typescript

function findTheDifference(s: string, t: string): string {
  let sArr = s.split('').sort()
  let tArr = t.split('').sort()
    for( let i = 0; i < tArr.length; i++){
    
    if( sArr[i] !== tArr[i]){

      return tArr[i];
    }
  } 
};

```

**Solution:**

The provided function `findTheDifference` takes two strings `s` and `t` as input and returns a string representing the character that is added to `t` and not present in `s`. In other words, it finds the difference between the two strings.

**Steps:**

1. Create two arrays, `sArr` and `tArr`, by splitting the input strings `s` and `t` into individual characters and sorting them.

2. Use a loop to iterate through the characters of the `tArr` array.

3. Inside the loop, compare the characters at the same index in `sArr` and `tArr`. If they are not equal, it means the current character in `tArr` is the added character (difference).

4. Return the character that is different (added) in `tArr`.

**Example:**

- Input: `s = "abcd"`, `t = "abcde"`
- After splitting and sorting, `sArr = ['a', 'b', 'c', 'd']` and `tArr = ['a', 'b', 'c', 'd', 'e']`.
- The loop iterates through the arrays, and when it reaches the last element, `sArr[i]` is `'d'`, and `tArr[i]` is `'e'`. Since `'d'` is not equal to `'e'`, the function returns `'e'`.

**Note:**

The given code assumes that the input strings `s` and `t` are valid, and `t` is formed by adding a single character to `s`.

**Techniques used:**

1. Array Manipulation: The code splits the input strings `s` and `t` into arrays of characters using the `split()` function and then sorts the arrays.

2. Looping: The function uses a `for` loop to iterate through the characters of the `tArr` array and compare them with the characters of the `sArr` array.

3. String Comparison: The code compares characters at the same index in `sArr` and `tArr` to find the difference.

* [Go back](../readme.md)
