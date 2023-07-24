---
title: Find the median
tags: ['training', 'task']
languages: ['typescript']
---
# Find the median

```typescript
function findMedian(arr: number[]): number {
    arr = arr.sort((a,b) => a - b);
    return arr[Math.floor(arr.length / 2)];
}
```

**Solution:**

The provided function `findMedian` takes an array of numbers `arr` as input and returns the median of the array.

**Steps:**

1. Sort the input array `arr` in ascending order using the `sort` method with a custom comparison function `(a, b) => a - b`. This ensures that the numbers in the array are arranged in increasing order.

2. Calculate the index of the median element by dividing the length of the sorted array by 2 using `Math.floor(arr.length / 2)`.

3. Return the element at the calculated index, which is the median of the array.

**Example:**

- Input: `arr = [3, 1, 5, 2, 4]`
- After sorting the array: `[1, 2, 3, 4, 5]`
- Median index = `Math.floor(5 / 2) = 2`
- Median element at index 2 is `3`.
- The function returns `3`.

**Note:**

The given code assumes that the input array `arr` is not empty and contains valid numbers.

**Techniques used:**

1. Sorting: The function uses the `sort` method to sort the input array in ascending order.

2. Mathematical Operation: The code uses `Math.floor` to calculate the index of the median element.

* [Go back](../readme.md)
