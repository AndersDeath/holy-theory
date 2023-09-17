# First Unique Character in a String

```typescript
function firstUniqChar(s: string): number {
   let map = [];
    for (let i = 0; i < s.length; i++) {
        if(map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};
```

1. Create an empty array `map` to store character counts. This array will be used as a simple hash map.

2. Iterate through the characters of the input string `s` using a `for` loop.

3. Check if the current character `s[i]` already exists in the `map` array. This is done by using the character `s[i]` as the index in the `map` array.

4. If the character already exists in the `map`, increment its count by 1. This is done by using the post-increment operator `map[s[i]]++`.

5. If the character does not exist in the `map`, set its count to 1. This is done by assigning `1` to `map[s[i]]`.

6. After the loop, we have an array `map` with counts of each character in the input string `s`.

7. Now, iterate through the characters of the input string `s` again using another `for` loop.

8. For each character `s[i]`, check its count in the `map` array.

9. If the count is equal to `1`, it means that this character is unique. Return the index `i` as the first occurrence of the unique character.

10. If no unique character is found during the second loop, return `-1` to indicate that there are no unique characters in the input string `s`.

Techniques used in this code:
- Using an array as a simple hash map to store character counts.
- Iterating through a string using a `for` loop to perform character counts and find the first unique character.
- 

