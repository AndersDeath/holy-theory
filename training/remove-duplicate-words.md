---
title: Remove duplicate words
tags: ['training', 'task']
languages: ['typescript']
---
# Remove duplicate words

```typescript
function removeDuplicateWords(s: string): string {
    const set = new Set();
    s.split(' ').forEach((str: string) => {
      set.add(str);
    });
    return [...set].join(' ');
  }
```
* [Go back](../readme.md)
