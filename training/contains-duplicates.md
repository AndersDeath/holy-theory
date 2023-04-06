
# Contains Duplicate

```typescript
function containsDuplicate(nums: number[]): boolean {
        nums.sort((a: any, b: any) => a-b);
        for(let i = 0; i < nums.length -1; i++) {
            if(nums[i] === nums[i+1]) {
                return true;
            }
        }
        return false;
};
```

**Source: https://leetcode.com**
* [Go back](../readme.md)