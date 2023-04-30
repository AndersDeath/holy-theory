---
title: Climbing stairs
tags: ['training', 'task']
languages: ['typescript']
---
# Climbing stairs

```typescript
function climbStairs(n: number): number {
    if(n <= 3) {
        return n;
    }

    let a = 3;
    let b = 2;

    for(let i = 0; i < n -3; i++) {
        a = a + b;
        b = a - b;
    }
    return a;
};
```

**Source: https://leetcode.com**
* [Go back](../readme.md)