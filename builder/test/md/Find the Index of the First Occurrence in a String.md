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
**Source: https://leetcode.com**
* [Go back](../readme.md)