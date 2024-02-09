---
title: Remove duplicate words
tags: ["training", "task"]
languages: ["typescript"]
---

# Remove duplicate words

```typescript
function removeDuplicateWords(s: string): string {
  const set = new Set();
  s.split(" ").forEach((str: string) => {
    set.add(str);
  });
  return [...set].join(" ");
}
```

1. **Initializing a Set**: A new empty `Set` is created to store unique words from the input string `s`.

2. **Splitting the Input String**: The input string `s` is split into an array of words using the `split(" ")` method. The space character `" "` is used as the delimiter.

3. **Iterating Through Words**: A `forEach` loop is used to iterate through each word in the array of words obtained from the split operation.

4. **Adding Words to the Set**: Within the loop, each word is added to the `set` using the `add()` method of the `Set`. This ensures that duplicate words are automatically eliminated due to the nature of a `Set`.

5. **Converting Set to Array and Joining**: After adding all unique words to the `set`, the `set` is converted back to an array using the spread operator `[...set]`. The array is then joined using the `join(" ")` method, with a space `" "` as the separator, to reconstruct the string with duplicate words removed.

6. **Returning the Result**: The final string with duplicate words removed is returned as the output of the function.

**Techniques Used**:

1. Set (`Set`): Using a `Set` to store unique values and automatically remove duplicates.
2. String Splitting (`split()`): Splitting a string into an array of substrings based on a delimiter.
3. Iterative Looping (`forEach` loop): Iterating through elements of an array using a loop.
4. Set Methods (`add()`): Adding elements to a `Set`.
5. Array Conversion (`[...set]`): Converting a `Set` to an array using the spread operator.
6. Array Joining (`join()`): Joining elements of an array into a string using a separator.

This function takes an input string, removes duplicate words, and returns a new string with only the unique words present.
