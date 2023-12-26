---
title: Insertion sort
tags: ['algorithms', 'insertion', 'sort']
languages: ['typescript', 'java']
sort: 300
---
# Insertion sort

Insertion Sort is a straightforward sorting algorithm that builds the sorted array one element at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, it has some advantages: it is simple to implement, efficient for small datasets, and performs well for partially sorted arrays.

**How Insertion Sort Works:**

1. **Dividing the Array:**
   - The algorithm starts with the first element of the array considered as the sorted part.

2. **Inserting Elements:**
   - For each element in the unsorted part of the array, Insertion Sort compares it with the elements in the sorted part.
   - It then inserts the element into its correct position in the sorted part, shifting the other elements if necessary.

3. **Iterative Process:**
   - This process is repeated until all elements are sorted.

**Time Complexity:**
   - Insertion Sort has a time complexity of O(n^2) in the worst case, where 'n' is the number of elements in the array. Despite its quadratic time complexity, Insertion Sort is often more efficient on small datasets or partially sorted arrays compared to other quadratic sorting algorithms. It's also an in-place sorting algorithm, meaning it doesn't require additional memory.

```typescript
function insertionSort(array: number[] | string[]) {
    for (let i = 1; i < array.length; i++) {
        let curr = array[i];
        let j = i - 1;
        for (j; j >= 0 && array[j] > curr; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = curr;
    }
    return array;
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
```

```java
    class Solution {
        void insertionSort (int[] arr) {
            int n = arr.length;
            for(int i = 1; i < n; i++) {
                int current = arr[i];
                int position = i - 1;
                while(position >= 0 && arr[position] > current) {
                    arr[position + 1] = arr[position];
                    position--;
                }
                arr[position + 1] = current;
            }
        }
    }
```
* [Go back](../readme.md)