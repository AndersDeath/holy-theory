---
title: Base 7
tags: ['training', 'task']
languages: ['typescript']
---
# Base 7

```typescript
function convertToBase7(num: number): string {
  if (num === 0) {
        return "0";
    }

    let isNegative = num < 0;
    num = Math.abs(num);
    let base7 = "";

    while (num > 0) {
        base7 = (num % 7).toString() + base7;
        num = Math.floor(num / 7);
    }

    if (isNegative) {
        base7 = "-" + base7;
    }

    return base7;
};
```

**Source: https://leetcode.com**
* [Go back](../readme.md)