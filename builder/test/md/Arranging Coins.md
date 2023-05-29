# Arranging Coins

```typescript
function arrangeCoins(n: number): number {
    let i = 1;
    let coins = 0;
    let cnt = 0;
    
    while((n-coins) >= i) {
        coins += i;
        i++;
        cnt++;
    }
    
    return cnt;
};
```

