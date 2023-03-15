# Find the Pivot Integer

```typescript
function pivotInteger(n: number): number {
    let total = (n * (n +1)) / 2;
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
        if(sum === (total - sum + i)) {
            return i;
        }
    }
    return -1;
};
```

* [Go back](../readme.md)
