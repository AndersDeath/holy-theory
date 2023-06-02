---
title: Construct the Rectangle
tags: ['training', 'task']
languages: ['typescript']
---
# Construct the Rectangle

```typescript
function constructRectangle(area: number): number[] {
  let width = Math.floor(Math.sqrt(area));

  while (area % width !== 0) {
    width--;
  }

  const length = area / width;
  return [length, width];
};
```

**Source: https://leetcode.com**
* [Go back](../readme.md)