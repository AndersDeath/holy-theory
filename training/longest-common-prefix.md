---
title: Longest common prefix
tags: ['training', 'task']
languages: ['typescript']
---
# Longest common prefix
```typescript
function longestCommonPrefix(strs: string[]): string {
    const size = strs.length;
    if(size === 0) return "";
    if(size === 1) return strs[0];

    strs.sort();

    let end = Math.min(strs[0].length, strs[size - 1].length);
    let i = 0;

    while(i < end && strs[0][i] === strs[size - 1][i]) {
        i++
    }

    const output = strs[0].substring(0, i);
    return output;
};

```
**Source: https://leetcode.com**

* [Go back](../readme.md)
