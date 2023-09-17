---
title: Merge Sorted Array
tags: ['training', 'task']
languages: ['typescript']
---
# Merge Sorted Array

```typescript
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let j = 0;
    for(let i = 0; i <= nums1.length; i++) {
        if(nums1[i] === 0 && nums2[j] !== undefined) {
            nums1[i] = nums2[j];
            j++;
        }
    }
    nums1.sort((a, b) =>  a - b);

};
```

The function `merge` is intended to merge two sorted arrays `nums1` and `nums2` into the first array `nums1`. Here's an explanation of how the function works:

1. Initialize a variable `j` to keep track of the index of the elements in `nums2`.

2. Iterate through each element of the array `nums1` using a for loop. We iterate up to `nums1.length` because the array contains both the merged elements and additional zeros.

3. Check if the current element `nums1[i]` is `0` and if there are remaining elements in `nums2` (i.e., `nums2[j] !== undefined`).

4. If the condition is satisfied, update the value of `nums1[i]` with the next element from `nums2` (i.e., `nums2[j]`), and increment `j` to move to the next element in `nums2`.

5. After iterating through the entire array `nums1`, sort the array in ascending order using the `sort` method and a comparison function `(a, b) => a - b`.

The goal of this function is to merge the elements from `nums2` into `nums1` while ensuring that the merged array remains sorted.

**Note:** The initial array lengths `m` and `n` are provided to indicate the valid elements in `nums1` and `nums2` respectively.

**Techniques Used:**

1. **Array Manipulation:** The function modifies the elements of the `nums1` array in place by replacing `0` elements with the elements from `nums2`.

2. **Sorting:** The function sorts the merged `nums1` array after performing the merging operation.

**Summary:**

The `merge` function takes two sorted arrays `nums1` and `nums2`, and it merges the elements from `nums2` into `nums1` while maintaining the sorted order. The function achieves this by iterating through `nums1` and `nums2`, updating elements in `nums1`, and then sorting the merged array.


* [Go back](../readme.md)
