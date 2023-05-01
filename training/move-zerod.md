---
title: Move Zeroes
tags: ['training', 'task']
languages: ['typescript']
---
# Move Zeroes

```typescript
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
   let j = 0;
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] !== 0) {
            if (i != j) {
                let tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
            }
            j++;
        }
    }
};
```

* [Go back](../readme.md)
