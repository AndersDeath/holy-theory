# First Bad Version

```typescript

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let left = 1, right = n
        while(left < right) {
            const mid = left + Math.floor((right-left)/2)
            if(isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return left
    };
};

```
This is a classic example of the Binary Search algorithm. Let's break down the code step by step:

1. The function `solution` takes a parameter `isBadVersion`, which is a function that returns a boolean value indicating whether a given version is a bad version or not.

2. The `solution` function returns an anonymous function that takes a parameter `n`, which represents the total number of versions.

3. Inside the anonymous function, two variables `left` and `right` are initialized with `1` and `n` respectively. These variables will be used to define the search space for the bad version.

4. A while loop is used to perform binary search on the versions.

5. In each iteration of the loop, the midpoint `mid` of the current search space is calculated using `left + Math.floor((right - left) / 2)`.

6. The `isBadVersion` function is called with the `mid` version to determine if it is a bad version or not.

7. If `isBadVersion(mid)` returns `true`, it means the bad version is in the first half of the search space. So, the `right` pointer is updated to `mid` to narrow down the search space.

8. If `isBadVersion(mid)` returns `false`, it means the bad version is in the second half of the search space. So, the `left` pointer is updated to `mid + 1` to narrow down the search space.

9. The loop continues until `left` is no longer less than `right`. At this point, the search space has been narrowed down to a single version, which is the first bad version.

10. The function returns the value of `left`, which represents the first bad version.

Techniques used in this code:
- Binary Search: The algorithm uses binary search to find the first bad version among a given range of versions. The search space is repeatedly halved until the first bad version is found.
- Mathematical calculation: The midpoint `mid` is calculated as `left + Math.floor((right - left) / 2)` to avoid integer overflow and provide the correct mid value during the binary search.


**Source: https://leetcode.com**
