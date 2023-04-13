# 3Sum

```typescript

function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);

    const triplets = [];

    for (let i = 0; i < nums.length; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                triplets.push([nums[i], nums[j], nums[k]]);
                j++;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return triplets;
};

```
* [Go back](../readme.md)
