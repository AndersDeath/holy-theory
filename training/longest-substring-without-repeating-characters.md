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
,,,

* [Go back](../readme.md)
