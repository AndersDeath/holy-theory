# Distribute Candies

```typescript
function distributeCandies(candyType: number[]): number {
  const uniqueCandies = new Set(candyType);
  const maxCandies = candyType.length / 2;
  
  return Math.min(uniqueCandies.size, maxCandies);
};
```


