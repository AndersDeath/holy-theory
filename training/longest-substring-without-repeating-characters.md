---
title: Longest Substring Without Repeating Characters
tags: ['training', 'task']
languages: ['typescript']
---
# Longest Substring Without Repeating Characters
```typescript
function lengthOfLongestSubstring(s: string): number {
    if(s.length === 0) return 0;

    let start = 0;
    let end = 0;
    let maxLength = 0;
    const stringSet = new Set<string>();

    while(end < s.length) {
        if(!stringSet.has(s[end])) {
            stringSet.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, stringSet.size);
        } else {
            stringSet.delete(s[start]);
            start++;
        }
    }

    return maxLength;

};
```

**Step-by-Step solution:**

1. Define a function `lengthOfLongestSubstring` that takes a string `s` as input.

2. Handle the base case: If the input string's length is 0, return 0.

3. Initialize variables:
   - `start`: The starting index of the current substring.
   - `end`: The ending index of the current substring.
   - `maxLength`: The length of the longest substring without repeating characters.
   - `stringSet`: A set to store unique characters within the current substring.

4. Enter a loop that iterates through the characters of the input string while `end` is within the string's length:

   a. If the character at `end` is not already in `stringSet`:
      - Add the character to `stringSet`.
      - Increment `end`.
      - Update `maxLength` to the maximum of its current value and the size of `stringSet`.

   b. If the character at `end` is already in `stringSet`:
      - Remove the character at `start` from `stringSet`.
      - Increment `start`.

5. After the loop completes, return the value of `maxLength`, which represents the length of the longest substring without repeating characters.

**Techniques Used:**

1. **Sliding Window:** The algorithm utilizes the sliding window technique to efficiently handle substrings and track the current substring's start and end indices.

2. **Set Data Structure:** The algorithm uses a `Set` to keep track of unique characters within the current substring, enabling efficient character uniqueness checking.

3. **Looping and Conditional Logic:** The solution involves iterating through the input string and using conditional logic to update the sliding window and track the longest substring.

**Summary:**

The `lengthOfLongestSubstring` function employs the sliding window technique along with a set to efficiently find the length of the longest substring without repeating characters in the given input string. By maintaining a sliding window and checking character uniqueness using a set, the algorithm optimally identifies the desired substring length. The use of looping, conditional logic, and a set data structure ensures an effective solution for this problem.

* [Go back](../readme.md)
