---
title: Key Characteristics of algorithms
tags: [ "algorithms","characteristics" ]
languages: []
sort: 700
---

# Key Characteristics of algorithms

**Divide and Conquer Approach**: When an algorithm follows the principle of "divide and conquer." It repeatedly separate the search interval in half until the target element is found or the interval is empty.

**Efficiency**: An algorithm is highly efficient, particularly for large datasets, because it eliminates half of the remaining elements in each step.

**Requirement of Sorted Data**: The algorithm requires the data to be sorted beforehand. This ensures that the algorithm can reliably make decisions about which half of the array to search in.

**Iterative or Recursive Implementation**: An algorithm can be implemented either iteratively or recursively. Both approaches follow the same logic but differ in their implementation details.

**Midpoint Calculation**: In each iteration, the algorithm calculates the midpoint of the search interval to determine whether the target element lies in the left or right half of the interval.

**Termination Condition**: Binary search terminates when the search interval is empty, indicating that the target element is not present in the array, or when the target element is found.

**Space Complexity**: The algorithm has a space complexity of O(1), meaning it requires constant extra space for storing variables regardless of the size of the input array.

**Works on Random Access Data Structures**: Binary search is ideal for arrays or other data structures that allow random access to elements, such as arrays or certain types of lists.

