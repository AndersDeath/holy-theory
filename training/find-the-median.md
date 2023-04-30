---
title: Find the median
tags: ['training', 'task']
languages: ['typescript']
---
# Find the median

```typescript
function findMedian(arr: number[]): number {
    arr = arr.sort((a,b) => a - b);
    return arr[Math.floor(arr.length / 2)];
}
```

* [Go back](../readme.md)
