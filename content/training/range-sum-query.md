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

This TypeScript code defines a class `NumArray` that implements a data structure for efficient range sum queries. Here's a breakdown of how the code works:

1. The `NumArray` class has two main methods: the constructor `constructor(nums: number[])` and `sumRange(left: number, right: number): number`.

2. The `public sums` array is used to store the cumulative sums of the input `nums`.

3. In the constructor, the cumulative sums are calculated and stored in the `sums` array. For each index `i`, the cumulative sum up to index `i` is computed as `this.sums[i] = i === 0 ? nums[0] : (this.sums[i - 1] + nums[i])`.

4. The `sumRange` method takes two parameters, `left` and `right`, representing the range for which the sum is to be calculated.

5. The cumulative sum up to index `right` is used to calculate the sum of the range `[left, right]`. If `left` is not `0`, the cumulative sum up to index `left - 1` is subtracted from the cumulative sum up to index `right` to get the sum of the desired range.

6. The class is used by creating an instance of `NumArray` using the `nums` array, and then the `sumRange` method can be called to retrieve the sum of a specific range.

**Example:**

```javascript
var nums = [-2, 0, 3, -5, 2, -1];
var obj = new NumArray(nums);

var sum1 = obj.sumRange(0, 2); // Returns 1 (sum of elements from index 0 to 2)
var sum2 = obj.sumRange(2, 5); // Returns -1 (sum of elements from index 2 to 5)
var sum3 = obj.sumRange(0, 5); // Returns -3 (sum of all elements from index 0 to 5)
```

In this example, the `NumArray` object is instantiated with the `nums` array, and then the `sumRange` method is called to compute the sum of specific ranges.

* [Go back](../readme.md)
