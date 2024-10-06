---
title: Intersection of two arrays 2
tags: ['training', 'task']
languages: ['typescript']
---
# Intersection of two arrays 2

```typescript

function intersect(nums1: number[], nums2: number[]): number[] {
    let output: number[] = [];
    nums1.sort((a,b) => a-b);
    nums2.sort((a,b) => a-b);

    let i = 0;
    let j = 0;
    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] === nums2[j]) {
            output.push(nums1[i]);
            i++;
            j++
        } else if(nums1[i] < nums2[j]) {
            i++
        } else {
            j++
        }
    }
    return output;
};

```

The code is a TypeScript function that finds the intersection of two arrays `nums1` and `nums2`. The intersection contains elements that are common to both arrays. The arrays are assumed to be sorted in ascending order.

Here's a step-by-step explanation of the code:

1. The function `intersect` takes two arrays `nums1` and `nums2` as input and returns an array representing their intersection.

2. An empty array `output` is initialized to store the intersected elements.

3. Both `nums1` and `nums2` arrays are sorted in ascending order using the `sort` method.

4. Two pointers `i` and `j` are initialized to traverse through the sorted `nums1` and `nums2` arrays, respectively.

5. A while loop is used to iterate through both arrays while `i` is less than the length of `nums1` and `j` is less than the length of `nums2`.

6. Inside the loop:
   - If `nums1[i]` is equal to `nums2[j]`, it means the elements match and they are added to the `output` array. The pointers `i` and `j` are incremented.
   - If `nums1[i]` is less than `nums2[j]`, it means the current element in `nums1` is smaller, so we move to the next element by incrementing `i`.
   - If `nums1[i]` is greater than `nums2[j]`, it means the current element in `nums2` is smaller, so we move to the next element by incrementing `j`.

7. After the loop, the `output` array contains the intersected elements.

8. The function returns the `output` array, which represents the intersection of the two input arrays.

Techniques used in this code include:
- Sorting arrays to enable efficient comparison and intersection.
- Using two pointers (`i` and `j`) to traverse through the arrays while comparing their elements.
- Determining whether to increment pointers based on the comparison of elements.
- Building the intersected array (`output`) as the pointers traverse the input arrays.


* [Go back](../readme.md)