# Power of two

```typescript
function isPowerOfTwo(n: number): boolean {
    if (n <= 0) {
        return false;
    }
    for (let i = 0; i < 32; i ++) {
        if ((n&1) == 1) {
            break;
        }
        n = n >>> 1;
    }
    n = n >>> 1;
    return n == 0;
};
```

* [Go back](../readme.md)
