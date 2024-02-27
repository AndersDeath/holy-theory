---
title: Binary search
tags: ["search", "algorithms", "binary"]
languages: ["typescript", "java", "python"]
sort: 800
---

# Binary search

Binary Search is defined as a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted,.

## How it works:

**Step 1:** Read the search element from the user.

**Step 2:** Find the middle element in the sorted list.

**Step 3:** Compare the search element with the middle element in the sorted list.

**Step 4:** If both are matched, then display "Given element is found!!!" and terminate the function.

**Step 5:** If both are not matched, then check whether the search element is smaller or larger than the middle element.

**Step 6:** If the search element is smaller than middle element, repeat steps 2, 3, 4 and 5 for the left sublist of the middle element.

**Step 7:** If the search element is larger than middle element, repeat steps 2, 3, 4 and 5 for the right sublist of the middle element.

**Step 8:** Repeat the same process until we find the search element in the list or until sublist contains only one element.

**Step 9:** If that element also doesn't match with the search element, then returns -1;

## Key Characteristics:

**Divide and Conquer Approach**: Binary search follows the principle of "divide and conquer." It repeatedly divides the search interval in half until the target element is found or the interval is empty.

**Efficiency**: Binary search is highly efficient, particularly for large datasets, because it eliminates half of the remaining elements in each step. It has a time complexity of O(log n), where n is the number of elements in the array.

**Requirement of Sorted Data**: Binary search requires the data to be sorted beforehand. This ensures that the algorithm can reliably make decisions about which half of the array to search in.

**Iterative or Recursive Implementation**: Binary search can be implemented either iteratively or recursively. Both approaches follow the same logic but differ in their implementation details.

**Midpoint Calculation**: In each iteration, binary search calculates the midpoint of the search interval to determine whether the target element lies in the left or right half of the interval.

**Termination Condition**: Binary search terminates when the search interval is empty, indicating that the target element is not present in the array, or when the target element is found.

**Space Complexity**: Binary search has a space complexity of O(1), meaning it requires constant extra space for storing variables regardless of the size of the input array.

**Works on Random Access Data Structures**: Binary search is ideal for arrays or other data structures that allow random access to elements, such as arrays or certain types of lists.

**Efficient for Large Datasets**: Due to its logarithmic time complexity, binary search performs well even on large datasets, making it a preferred choice for many searching applications.

**Not Suitable for Unsorted Data**: Since binary search relies on the sorted nature of the data, it's not suitable for unsorted arrays or lists. Pre-sorting the data is a prerequisite for using binary search effectively.

## Applications:

**Educational Purposes**: Bubble sort is often used in educational settings to introduce students to the concept of sorting algorithms. Its straightforward implementation and easy-to-understand logic make it a suitable starting point for learning about sorting algorithms.

**Small Datasets**: Bubble sort can be suitable for sorting very small datasets where efficiency is not a primary concern. Its simplicity and ease of implementation make it viable for sorting arrays or lists with a small number of elements.

**Benchmarking and Performance Testing**: While bubble sort is not efficient for large datasets, it can still be used as a baseline for benchmarking and performance testing of more complex sorting algorithms. Comparing the performance of more advanced algorithms against bubble sort can provide insights into the efficiency gains achieved by those algorithms.

**Adaptive Sorting**: In some cases, bubble sort can be adapted to take advantage of certain properties of the input data. For example, if the input data is nearly sorted or already partially sorted, bubble sort can perform relatively well compared to other sorting algorithms. It may require fewer swaps in such scenarios.

**Teaching Sorting Optimization Techniques**: Despite its inefficiency, bubble sort can be used to demonstrate optimization techniques for sorting algorithms. For instance, discussions on how to improve bubble sort's performance by adding early termination conditions or enhancements like the cocktail shaker sort (a variation of bubble sort) can be insightful for understanding algorithmic optimization.

**Embedded Systems with Limited Resources**: In scenarios where computational resources are extremely limited, such as embedded systems with constrained memory and processing power, bubble sort might be preferred due to its simplicity and low memory overhead compared to more complex sorting algorithms.

**Debugging and Testing**: Bubble sort can be useful for debugging and testing sorting-related functionalities in software applications. Its predictable behavior and simplicity make it a suitable choice for verifying the correctness of sorting algorithms or understanding the behavior of sorting-related code snippets.

**Time Complexity:**

- Worst case: O(log n)
- Average case: O(log n)
- Best case: O(1)

![Binary search](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/binary-search.png)

## Example:

```typescript
function binarySearch(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
}
```

<!-- ignore start -->

```java

class Solution {
    private static int binarySearch(int[] array, int target) {

		int low = 0;
		int high = array.length - 1;

		while(low <= high) {
			int middle = low + (high - low) / 2;
			int value = array[middle];

			if(value < target) {
				low = middle + 1;
			} else if(value > target) {
				high = middle - 1;

			} else {
				return middle;
			}
		}
		return -1;
	}
}
```

```python

def binary_search(list, item):
    low = 0
    high = len(list) - 1
    while low <= high:
        mid = (low+high)/2
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid +1
    return None

my_list = [1, 3, 5, 7, 9]

res = binary_search(my_list, 3)

print(my_list[res])
```

<!-- ignore end -->
