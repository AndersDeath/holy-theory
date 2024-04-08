---
title: Ransom Note
tags: ["training", "task"]
languages: ["typescript"]
---

# Ransom Note

```typescript
function canConstruct(ransomNote: string, magazine: string): boolean {
  let dicArr = [...magazine];
  for (const c of ransomNote) {
    const index = dicArr.indexOf(c);
    if (index < 0) return false;
    dicArr.splice(index, 1);
  }
  return true;
}
```

**Explanation with Steps:**

**Step 1:** Create an array `dicArr` by spreading the characters of the `magazine` string.

**Step 2:** Iterate through each character `c` in the `ransomNote` string.

**Step 3:** Inside the loop:

- Use the `indexOf` method to find the index of character `c` in the `dicArr` array.
- If the index is negative (character not found), return `false` immediately as the ransom note cannot be constructed.
- If the character is found, use the `splice` method to remove it from the `dicArr`, simulating its use in constructing the ransom note.

**Step 4:** After the loop completes, return `true`, indicating that the ransom note can be constructed.

**Techniques Used:**

1. **Array Manipulation:** Utilizes array manipulation techniques to simulate constructing the ransom note using characters from the magazine.

2. **String Conversion to Array:** Converts the `magazine` string into an array of characters (`dicArr`) to facilitate manipulation and character tracking.

3. **Looping Through Characters:** Iterates through each character of the `ransomNote` using a loop.

4. **Character Lookup:** For each character in the `ransomNote`, uses the `indexOf` method to check if the character exists in the `dicArr` (magazine characters).

5. **Character Removal:** If the character exists in the `dicArr`, removes the character from the array using the `splice` method, simulating using that character to construct the ransom note.

6. **Early Return:** If `indexOf` returns a negative index (character not found), returns `false` immediately, optimizing the process.

7. **Return Result:** If all ransom note characters can be found and removed from the `dicArr`, returns `true`, indicating successful construction.

At the end of this explanation, you have a clear understanding of how the `canConstruct` function works and the techniques applied in the code.
