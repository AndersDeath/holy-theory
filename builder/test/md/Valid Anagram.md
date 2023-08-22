
# Valid Anagram

```typescript
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let hashTable = {};

  for (let i = 0; i < s.length; i++) {
    if (!hashTable[s[i]]) hashTable[s[i]] = 0;
    if (!hashTable[t[i]]) hashTable[t[i]] = 0;
    hashTable[s[i]]++;
    hashTable[t[i]]--;
  }

  for (let key in hashTable) {
    if (hashTable[key] != 0) return false;
  }

  return true;
}
```

- **Input**:

  - `s`: A string representing the first input string.
  - `t`: A string representing the second input string.

- **Output**:
  - A boolean value indicating whether `s` and `t` are anagrams of each other.

1. **Check Lengths**:

   - If the lengths of strings `s` and `t` are not equal, return `false`. Anagrams must have the same length.

2. **Create a Hash Table**:

   - Initialize an empty `hashTable` object to store the frequency of characters in the strings.

3. **Count Characters in Both Strings**:

   - Iterate through the characters of both strings using the same index `i`.
   - For each character `s[i]` and `t[i]`, increment the corresponding count in the `hashTable`.
   - If the character doesn't exist in the `hashTable`, initialize its count to 1.

4. **Check Character Frequencies**:

   - After counting characters for both strings, iterate through the keys in the `hashTable`.
   - If any character's count is not equal to 0, return `false`, as it means the frequencies of characters in `s` and `t` don't match.

5. **Return Result**:
   - If all characters' frequencies match and there is no character with a non-zero count in the `hashTable`, return `true`, indicating that `s` and `t` are anagrams of each other.

**Techniques Used**:

- **Hash Table**: A hash table is used to store the frequency of characters in the strings.

**Algorithm**:

1. Check if the lengths of strings `s` and `t` are equal. If not, return `false`.

2. Create an empty `hashTable` object.

3. Count the frequency of characters in both strings:

   - Iterate through the characters of both strings using the same index `i`.
   - If the character doesn't exist in the `hashTable`, initialize its count to 1.
   - If the character exists, increment its count.

4. Check character frequencies:

   - Iterate through the keys in the `hashTable`.
   - If any character's count is not equal to 0, return `false`.

5. If all characters' frequencies match, return `true`.

**Time Complexity**:

- The time complexity is O(n), where `n` is the length of the strings. The code iterates through both strings once and iterates through the keys in the hash table once.

**Space Complexity**:

- The space complexity is O(1) since the hash table stores characters, and the size of the hash table is bounded by the number of distinct characters in the input strings.


