---
title: Longest Harmonious Subsequence
tags: ['training', 'task']
languages: ['typescript']
---
# Longest Harmonious Subsequence

```typescript
function findLHS(nums: number[]): number {
    const frequencyMap: Map<number, number> = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    let maxLHS = 0;
    for (const key of frequencyMap.keys()) {
        if (frequencyMap.has(key + 1)) {
            const currentLHS = frequencyMap.get(key)! + frequencyMap.get(key + 1)!;
            maxLHS = Math.max(maxLHS, currentLHS);
        }
    }

    return maxLHS;
};
```

**Step-by-Step solution:**

1. **Initialize a Map:**
   - `const frequencyMap: Map<number, number> = new Map();`
   - Initialize a map called `frequencyMap` to store the frequency of each number.

2. **Populate the Frequency Map:**
   - Use a `for...of` loop to iterate through each number in the input array (`nums`).
   - Update the frequency in the map using `frequencyMap.set()`, ensuring that if the number is not in the map, it starts with a frequency of 1.

3. **Initialize Variables:**
   - `let maxLHS = 0;`
   - Initialize a variable `maxLHS` to store the maximum length of a harmonious subsequence (LHS).

4. **Iterate Through Frequency Map Keys:**
   - `for (const key of frequencyMap.keys()) {`
   - Iterate through the keys of the frequency map.

5. **Check for Key + 1:**
   - `if (frequencyMap.has(key + 1)) {`
   - Check if the map contains the key incremented by 1.

6. **Calculate Current LHS Length:**
   - `const currentLHS = frequencyMap.get(key)! + frequencyMap.get(key + 1)!;`
   - Calculate the length of the harmonious subsequence by adding the frequencies of the current key and key + 1.

7. **Update Maximum LHS Length:**
   - `maxLHS = Math.max(maxLHS, currentLHS);`
   - Update the maximum LHS length if the current length is greater.

8. **Return Maximum LHS Length:**
   - `return maxLHS;`
   - Return the final maximum length of a harmonious subsequence.
