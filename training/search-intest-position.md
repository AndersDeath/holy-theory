# Search insert position

```typescript
function searchInsert(nums: number[], target: number): number {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            return i;
        } else if(nums[i] > target) {
            return i;
        }
    }
    return nums.length;
};
```

**Source: https://leetcode.com**
* [Go back](../readme.md)