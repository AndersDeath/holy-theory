---
title: Find All Numbers Disappeared in an Array
tags: ['training', 'task']
languages: ['typescript']
---
# Find All Numbers Disappeared in an Array

```typescript
function findDisappearedNumbers(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i ++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = - nums[index];
        }        
    }
    const result = [];
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;
};
```

* [Go back](../readme.md)