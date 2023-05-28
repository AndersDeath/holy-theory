---
title: Third Maximum Number
tags: ['training', 'task']
languages: ['typescript']
---
# Third Maximum Number

```typescript
function thirdMax(nums: number[]): number {
 const output = [...new Set(nums)]
 output.sort((a, b) => b - a)
    return output[2] !== undefined ? output[2] : output[0]
};
```

* [Go back](../readme.md)