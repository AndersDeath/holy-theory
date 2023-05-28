# Pascal triangle 3
---
# Pascal triangle 3 
```typescript
function getRow(rowIndex: number): number[] {
  const res = Array(rowIndex + 1);
  res[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    res[i] = res[i - 1] * ((rowIndex - i + 1) / i);
  }
  return res;
};
```

* [Go back](../readme.md)
