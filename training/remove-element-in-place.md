---
title: Remove element in place
tags: ['training', 'task']
languages: ['typescript']
---
# Remove element in place

```typescript
function removeElement(nums: number[], val: number): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
};
```
* [Go back](../readme.md)
