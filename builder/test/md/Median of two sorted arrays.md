# Median of two sorted arrays

```typescript
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if(nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const lengthFirst = nums1.length;
    const lengthSecond = nums2.length;

    let start = 0;
    let end = lengthFirst;

    while(start <= end) {
        let part1 = Math.floor((start+end)/2);
        let part2 = Math.floor((lengthFirst + lengthSecond + 1) / 2) - part1;

        let maxLeftNum1 = part1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[part1 - 1];
        let minRightNum1 = part1 === lengthFirst ? Number.MAX_SAFE_INTEGER : nums1[part1];

        let maxLeftNum2 = part2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[part2 - 1];
        let minRightNum2 = part2 === lengthSecond ? Number.MAX_SAFE_INTEGER : nums2[part2];

        if(maxLeftNum1 <= minRightNum2 && maxLeftNum2 <= minRightNum1) {
            if((lengthFirst + lengthSecond) % 2 == 0) {
                return (Math.max(maxLeftNum1, maxLeftNum2) + Math.min(minRightNum1, minRightNum2)) /2
            } else {
                return Math.max(maxLeftNum1, maxLeftNum2);
            }
        } else if(maxLeftNum1 > minRightNum2) {
            end = part1 -1;
        } else {
            start = part1 +1;
        }
    }
};
```
**Source: https://leetcode.com**
