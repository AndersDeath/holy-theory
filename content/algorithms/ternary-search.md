---
title: Ternary search
tags: ['search', 'algorithms', 'ternary']
languages: ['typescript', 'java', 'python']
sort: 100
---
# Ternary search

```typescript

function ternarySearch(func: (x: number) => number, left: number, right: number, epsilon: number): number {
  while (right - left > epsilon) {
    const mid1 = left + (right - left) / 3;
    const mid2 = right - (right - left) / 3;

    const value1 = func(mid1);
    const value2 = func(mid2);

    if (value1 < value2) {
      left = mid1;
    } else {
      right = mid2;
    }
  }

  return (left + right) / 2;
}
```
