# Find the Index of the First Occurrence in a String

```typescript
function strStr(haystack: string, needle: string): number {
    const haystackLength = haystack.length;
    const needleLength = needle.length;

    for(let i = 0; i < haystackLength - needleLength + 1; i++) {
        if (haystack.substring(i, i + needleLength) === needle) {
            return i;
        }
    }
    return -1;
};
```

**Solution:**

The provided function `strStr` takes two strings `haystack` and `needle` as input and returns the index of the first occurrence of the `needle` in the `haystack`. If the `needle` is not found in the `haystack`, the function returns -1.

**Steps:**

1. Calculate the lengths of the `haystack` and the `needle` and store them in variables `haystackLength` and `needleLength`, respectively.

2. Use a `for` loop to iterate through the `haystack`, starting from index 0 and stopping at `haystackLength - needleLength` (inclusive).

3. Inside the loop, extract a substring from the `haystack` starting from the current index `i` and with a length equal to the length of the `needle`.

4. Compare the extracted substring with the `needle`. If they are equal, it means the `needle` is found at index `i` in the `haystack`, so return `i`.

5. If the loop finishes without finding the `needle`, return -1 to indicate that the `needle` is not present in the `haystack`.

**Example:**

- Input: `haystack = "hello"`, `needle = "ll"`
- The loop iterates through the `haystack` string:
    - When `i = 0`, the extracted substring is `"he"` which is not equal to the `needle`.
    - When `i = 1`, the extracted substring is `"el"` which is not equal to the `needle`.
    - When `i = 2`, the extracted substring is `"ll"` which is equal to the `needle`. The function returns `2`.

**Note:**

The given code assumes that the inputs `haystack` and `needle` are valid strings.

**Techniques used:**

1. Looping: The function uses a `for` loop to iterate through the `haystack` and search for the `needle`.

2. String Manipulation: The code extracts substrings using the `substring()` function and compares them with the `needle` using the equality operator (`===`).


