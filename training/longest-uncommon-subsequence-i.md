---
title: Longest Uncommon Subsequence I
tags: ['training', 'task']
languages: ['typescript']
---
# Longest Uncommon Subsequence I
```typescript
function findLUSlength(a: string, b: string): number {
    if (a === b) {
        return -1;
    } else {
        return Math.max(a.length, b.length);
    }
};
```

* [Go back](../readme.md)
