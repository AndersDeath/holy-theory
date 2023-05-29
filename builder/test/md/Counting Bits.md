# Counting Bits

```typescript
function countBits(n: number): number[] {
    let result: number[] = [0];
    let pow = 1;
    let offset = 1;
    for (let i = 1; i <= n; i ++) {
        if (i == pow) {
            result[i] = 1;
            pow = pow << 1;
            offset = 1;
        } else {
            result[i] = result[offset] + 1;
            offset++;
        }
    }
    return result;
};
```

