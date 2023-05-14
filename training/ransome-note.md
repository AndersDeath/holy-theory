---
title: Ransom Note
tags: ['training', 'task']
languages: ['typescript']
---
# Ransom Note

```typescript
function canConstruct(ransomNote: string, magazine: string): boolean {
 let dicArr = [...magazine];
  for (const c of ransomNote) {
    const index = dicArr.indexOf(c);
    if (index < 0) return false;
    dicArr.splice(index, 1);
  }
  return true;
};
```
* [Go back](../readme.md)
