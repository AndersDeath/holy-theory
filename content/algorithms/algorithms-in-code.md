---
title: Algorithms In Code
tags: ["adjacency", "algorithms", "graph"]
languages: ["java"]
sort: 1300
ignore: true
---

# Algorithms In Code

Here you can find algorithms just in code without any explanations. If you can read it, you will understand everything.

## Search algorithms

### Linear search

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

### Jump search

```typescript
function jumpSearch(arr: number[], target: number): number {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) {
      return -1;
    }
  }

  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}
```