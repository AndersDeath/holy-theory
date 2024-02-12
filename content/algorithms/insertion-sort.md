---
title: Insertion sort
tags: ["algorithms", "insertion", "sort"]
languages: ["typescript", "java"]
sort: 300
---

# Insertion sort

Insertion Sort is a straightforward sorting algorithm that builds the sorted array one element at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, it has some advantages: it is simple to implement, efficient for small datasets, and performs well for partially sorted arrays.

**How it works:**

**Step 1:**
Consider the first element to be a sorted subarray and the rest as an unsorted subarray

**Step 2:**
Sequentially iterate over the unsorted elements of the array and move them to the sorted subarray.

**Step 3:**
For each unsorted element, compare the current element with the elements before it

**Step 4:**
If the current element is greater than its preceding element, leave it there, as it is already at the desired position. If not, keep comparing it with the elements before it until:
_ A smaller or equal element is found: Insert the current element after it
_ All comparisons are made, and no smaller element is found: Insert the current element at the beginning of the array
**Step 5:**
Repeat the above process for every element of the unsorted subarray until the array is sorted

**Time Complexity:**

Insertion Sort has a time complexity of O(n^2) in the worst case, where 'n' is the number of elements in the array. Despite its quadratic time complexity, Insertion Sort is often more efficient on small datasets or partially sorted arrays compared to other quadratic sorting algorithms. It's also an in-place sorting algorithm, meaning it doesn't require additional memory.

![Insertion sort](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/insertion-sort.png)

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

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32]));
```

<!-- ignore start -->

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
<!-- ignore end -->
