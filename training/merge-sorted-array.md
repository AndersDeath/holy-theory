---
title: Merge Sorted Array
tags: ['training', 'task']
languages: ['typescript']
---
# Merge Sorted Array

```typescript
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let j = 0;
    for(let i = 0; i <= nums1.length; i++) {
        if(nums1[i] === 0 && nums2[j] !== undefined) {
            nums1[i] = nums2[j];
            j++;
        }
    }
    nums1.sort((a, b) =>  a - b);

};
```
* [Go back](../readme.md)
