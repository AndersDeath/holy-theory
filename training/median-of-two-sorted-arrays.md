---
title: Median of two sorted arrays
tags: ['training', 'task']
languages: ['typescript']
---
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

**Step-by-Step solution:**

1. Define a function `findMedianSortedArrays` that takes two sorted arrays `nums1` and `nums2` as input.

2. Check if the length of `nums1` is greater than the length of `nums2`. If it is, swap the arrays and recursively call the function to ensure that `nums1` is always the shorter array.

3. Calculate the lengths of `nums1` and `nums2` and store them in `lengthFirst` and `lengthSecond` variables.

4. Initialize the `start` and `end` pointers for binary search. `start` will initially be 0, and `end` will be the length of `nums1`.

5. Enter a `while` loop that continues as long as `start` is less than or equal to `end`.

6. Inside the loop, calculate the partition points `part1` and `part2` for dividing the two arrays. The goal is to find a partition that divides both arrays into two parts such that the maximum element on the left side is smaller than or equal to the minimum element on the right side.

7. Calculate the maximum left elements (`maxLeftNum1` and `maxLeftNum2`) and minimum right elements (`minRightNum1` and `minRightNum2`) for both arrays based on the calculated partition points.

8. Check if the conditions for a valid partition are met: `maxLeftNum1` is less than or equal to `minRightNum2` and `maxLeftNum2` is less than or equal to `minRightNum1`. This indicates a valid partition.

9. If the total length of the combined arrays is even, calculate and return the median as the average of the maximum of the left elements and the minimum of the right elements.

10. If the total length is odd, return the maximum of the two left elements as the median.

11. If the valid partition conditions are not met, adjust the `start` and `end` pointers based on the comparison between `maxLeftNum1` and `minRightNum2`.

12. If `maxLeftNum1` is greater than `minRightNum2`, move the `end` pointer to the left to reduce the partition in `nums1`.

13. Otherwise, move the `start` pointer to the right to increase the partition in `nums1`.

14. After exiting the loop, the function will return the calculated median.

**Techniques Used:**

1. **Binary Search:** The algorithm uses binary search to find the correct partition points in both arrays.

2. **Conditional Statements:** The algorithm uses conditional statements to handle various cases, such as even and odd total lengths of combined arrays, and adjusting partition pointers.

**Summary:**

The `findMedianSortedArrays` function calculates the median of two sorted arrays `nums1` and `nums2` using binary search and partitioning. It handles different cases for finding the median of even and odd total lengths of combined arrays and adjusts partition points accordingly. The algorithm returns the calculated median of the two arrays.

* [Go back](../readme.md)