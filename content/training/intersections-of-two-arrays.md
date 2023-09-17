---
title: Intersection of two arrays 
tags: ['training', 'task']
languages: ['typescript']
---
# Intersection of two arrays 

```typescript

function intersection(nums1: number[], nums2: number[]) {
    let nums1Map = new Set(nums1);
    let result = new Set();
    nums2.forEach(item => {
        if(nums1Map.has(item)){
            result.add(item)
        }
    });
    return Array.from(result);
};


```

The code is a TypeScript function that finds the intersection of two arrays `nums1` and `nums2`. The intersection of two arrays is a set of elements that are common to both arrays.

Here's a step-by-step explanation of the code:

1. The function `intersection` takes two arrays as parameters: `nums1` and `nums2`.

2. A `Set` named `nums1Map` is created to store unique elements from the `nums1` array.

3. Another `Set` named `result` is created to store the intersection of the two arrays.

4. The `forEach` method is used to iterate through each element in the `nums2` array:
   - For each element `item` in `nums2`, it is checked whether `item` exists in the `nums1Map` set using the `has` method.
   - If `item` is found in `nums1Map`, it means it's an intersection element, so it is added to the `result` set using the `add` method.

5. Once all elements in `nums2` have been processed, the `result` set contains the intersection elements.

6. The `Array.from` method is used to convert the `result` set back into an array, which is then returned as the final result.

Techniques used in this code include:
- Using `Set` to efficiently store and check for unique elements in the arrays.
- Iterating through an array using the `forEach` method.
- Determining the intersection of two arrays by comparing elements using `has` method of a `Set`.
- Converting a `Set` back into an array using the `Array.from` method.

Overall, this algorithm finds the intersection of two arrays with a time complexity of O(m + n), where m and n are the lengths of the two arrays.


* [Go back](../readme.md)