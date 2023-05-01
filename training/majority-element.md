---
title: Majority Element
tags: ['training', 'task']
languages: ['typescript']
---
# Majority Element

```typescript
function majorityElement(nums: number[]): number {

    let count =0;
    let res = 0;

    for(let i = 0; i<=nums.length; i++) {
            if (count==0) {
                res = nums[i];
            }
            if (nums[i]!=res) {
                count--;
            }
            else {
                count++;
           }
    }
    return res;
};
```
**Source: https://leetcode.com**
* [Go back](../readme.md)