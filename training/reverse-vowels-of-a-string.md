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
* [Go back](../readme.md)