---
title: Linear search
tags: ['search', 'algorithms', 'binary']
languages: ['typescript', 'java', 'python']
sort: 600
---
# Linear search

Linear Search, also known as sequential search, is a simple searching algorithm that finds the position of a target value within a list or array. It works by iterating through the elements one by one until the target value is found or the entire list has been searched.

**How Linear Search Works:**

1. **Start at the Beginning:**
   - Linear Search begins by looking at the first element in the list.

2. **Compare with Target:**
   - It compares the current element with the target value that we are searching for.

3. **Search Iteratively:**
   - If the current element is equal to the target value, the search is successful, and the index or position of the element is returned.
   - If the current element is not equal to the target value, the search continues by moving to the next element in the list.
   - This process is repeated until either the target value is found or the end of the list is reached.

**Time Complexity:**

The time complexity of Linear Search is O(n), where 'n' is the number of elements in the array. In the worst case, the algorithm may need to iterate through the entire list to find the target value. While Linear Search is simple, it may not be the most efficient for large datasets, especially when compared to more advanced search algorithms like binary search on sorted lists. However, it is easy to understand and implement.

```typescript

function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; 
    }
  }

  return -1;
}
```