---
title: Quick sort
tags: ["algorithms", "quick", "sort"]
languages: ["java", "python"]
sort: 400
---

# Quicksort

Quick Sort is an efficient, comparison-based sorting algorithm that follows the divide-and-conquer paradigm. It works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted.

**How Quick Sort Works:**

1. **Choosing a Pivot:**
   - The algorithm selects a pivot element from the array. The choice of pivot can affect the efficiency of the algorithm.

2. **Partitioning:**
   - Elements smaller than the pivot are moved to its left, and elements greater than the pivot are moved to its right. The pivot is now in its final sorted position.

3. **Recursive Sorting:**
   - The algorithm is applied recursively to the sub-arrays on the left and right of the pivot until the entire array is sorted.

**Time Complexity:**
   - Quick Sort has an average and best-case time complexity of O(n log n), where 'n' is the number of elements in the array. In the worst case, it is O(n^2), but this is rare when a good pivot selection strategy is used. Quick Sort is often faster in practice than other O(n log n) algorithms, and it is widely used in various applications due to its efficiency.

![Quick sort](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/quick-sort.png)
<!-- ignore start -->

```java
class Solution {

	int makePartition(int [] arr, int low, int high) {
		int pivot = arr[high];
		int currentIndex = low - 1;
		for(int i = low; i < high; i++) {
			if(arr[i] < pivot) {
				currentIndex++;
				int temp = arr[i];
				arr[i] = arr[currentIndex];
				arr[currentIndex] = temp;
			}

		}
		int temp = arr[high];
		arr[high] = arr[currentIndex + 1];
		arr[currentIndex + 1] = temp;
		return currentIndex + 1;
	}

	void quicksort(int[] arr, int low, int high) {
		if(low < high) {
			int pivot = makePartition(arr, low, high);
			quicksort(arr, low, pivot - 1);
			quicksort(arr, pivot + 1, high);
		}
	}

	void quickSort (int[] arr) {
		int n = arr.length;
		quicksort(arr, 0, n - 1);
	}
}

```

```python
def quicksort(arr):
    if len(arr) < 2:
        return arr
    else:
        pivot = arr[len(arr)/2]
        less = [i for i in arr[1:] if i <= pivot]
        greater = [i for i in arr[1:] if i > pivot]
        return quicksort(less) + [pivot] + quicksort(greater)

print(quicksort([10,2,3,1,5,4]))
```

```java
class Solution {
    static void swap(int[] array, int i, int j) {
		int temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	private static void quickSort(int[] array, int start, int end) {
		if(end <= start) return; // base case

		int pivot = partition(array, start, end);

		quickSort(array, start, pivot -1);
		quickSort(array, pivot + 1, end);
	}

	private static int partition(int[] array, int start, int end) {
		int pivot = array[end];

		int i = start - 1;

		for(int j = start; j <= end -1; j++) {
			if(array[j] < pivot) {
				i++;
				swap(array, i, j);
			}
		}
		i++;
		swap(array, i, end);

		return i;
	}
}
```
<!-- ignore end -->

```typescript
function quicksort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[Math.floor(arr.length / 2)];
    const less = arr.slice(1).filter((i) => i <= pivot);
    const greater = arr.slice(1).filter((i) => i > pivot);
    return [...quicksort(less), pivot, ...quicksort(greater)];
  }
}
```

- [Go back](../readme.md)
