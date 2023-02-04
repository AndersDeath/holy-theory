
# Symmetric difference
```typescript
export const symmetricDifference = (...args: any) => [...new Set(args.reduce((arr1: any, arr2: any) => [
  ...arr1.filter((e: any) => !arr2.includes(e)),
  ...arr2.filter((e: any) => !arr1.includes(e))
]))];
```

* [Go back](../readme.md)