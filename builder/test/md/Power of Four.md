# Power of Four

```typescript
function isPowerOfFour(n: number): boolean {
    if (n <= 0) {
        return false;
    }
    while (n > 3) {
        if (n % 4 != 0) {
            return false;
        }
        n = n / 4;
    }
    return n == 1;
};
```


