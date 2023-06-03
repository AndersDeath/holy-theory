---
title: Max Consecutive Ones
tags: ['training', 'task']
languages: ['typescript']
---
# Max Consecutive Ones

```typescript
function findMaxConsecutiveOnes(nums: number[]): number {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
};
```
**Source: https://leetcode.com**
* [Go back](../readme.md)