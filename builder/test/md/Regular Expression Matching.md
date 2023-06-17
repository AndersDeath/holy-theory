# Regular Expression Matching

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

