---
title: First Bad Version
tags: ['training', 'task']
languages: ['typescript']
---
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

**Source: https://leetcode.com**
* [Go back](../readme.md)