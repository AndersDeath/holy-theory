# First Unique Character in a String
---
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

* [Go back](../readme.md)
