---
title: Ternary search
tags: ['search', 'algorithms', 'ternary']
languages: ['typescript', 'java', 'python']
sort: 900
---
# Ternary search

Ternary Search is a divide-and-conquer algorithm designed for efficiently finding the position of a target value in a sorted array. It operates by dividing the array into three parts and recursively narrowing down the search space until the target is found or determined to be absent.

**How Ternary Search Works:**

1. **Divide the Array:**
   - Ternary Search starts by dividing the sorted array into three parts.

2. **Compare with the Target:**
   - It then compares the target value with the elements at two points within the array, dividing it into three segments.
   - If the target is found at one of these points, the search is successful.

3. **Determine Search Space:**
   - Based on the comparisons, Ternary Search identifies whether the target lies in the first, second, or third segment of the array.

4. **Recursive Search:**
   - The algorithm then recursively applies the same process to the identified segment.
   - This recursion continues until the target is found or the search space is reduced to an empty array, indicating that the target is not present.


**Time Complexity:**
   - Ternary Search has a time complexity of O(log3 n), where 'n' is the size of the array. This is an improvement over binary search when the search space can be significantly reduced at each step. However, it's worth noting that constant factors play a role, and in practice, binary search might be faster for smaller datasets due to simpler arithmetic operations. Ternary Search is particularly beneficial when the dataset is large and the search space can be significantly reduced with each iteration.


![Ternary search](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/ternary-search.png)

```typescript

function ternarySearch(func: (x: number) => number, left: number, right: number, epsilon: number): number {
  while (right - left > epsilon) {
    const mid1 = left + (right - left) / 3;
    const mid2 = right - (right - left) / 3;

    const value1 = func(mid1);
    const value2 = func(mid2);

    if (value1 < value2) {
      left = mid1;
    } else {
      right = mid2;
    }
  }

  return (left + right) / 2;
}
```
