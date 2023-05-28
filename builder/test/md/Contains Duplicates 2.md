# Contains Duplicates 2
---
# Contains Duplicates 2

```typescript
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const seen: any = new Map();
    for (let i = 0; i < nums.length; ++i) {
      if (i - seen.get(nums[i]) <= k) {
        return true;
      }
        seen.set(nums[i], i);
    }
    return false;
};
```

**Source: https://leetcode.com**
* [Go back](../readme.md)