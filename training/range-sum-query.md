---
title: Range Sum Query
tags: ['training', 'task']
languages: ['typescript']
---
# Range Sum Query

```typescript
class NumArray {
    public sums = [];
    constructor(nums: number[]) {
        for (var i = 0; i < nums.length; i++) {
            this.sums[i] = i === 0 ? nums[0] : (this.sums[i - 1] + nums[i]);
        }
    }

    sumRange(left: number, right: number): number {
        var sums = this.sums;
        return left === 0 ? sums[right] : (sums[right] - sums[left - 1]);
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
```

* [Go back](../readme.md)
