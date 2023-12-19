---
title: Linear search
tags: ['search', 'algorithms', 'binary']
languages: ['typescript', 'java', 'python']
sort: 100
---
# Linear search

```typescript

function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; 
    }
  }

  return -1;
}
```
