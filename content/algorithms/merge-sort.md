---
title: Merge sort
tags: ["algorithms", "merge", "sort"]
languages: ["java"]
sort: 500
---

# Merge sort

Merge Sort is a comparison-based sorting algorithm that follows the divide-and-conquer paradigm. It works by dividing the unsorted array into 'n' sub-arrays, each containing one element. It then repeatedly merges these sub-arrays to produce new sorted sub-arrays until there is only one sub-array remaining - the fully sorted array.

**How it works:**

**Step 1:**
Divide - The unsorted array is recursively divided into two halves until each sub-array contains only one element. This is the base case of the recursion.

**Step 2:**
Conquer - The adjacent sub-arrays are then recursively merged to produce new sorted sub-arrays. This process continues until there is only one sub-array remaining the fully sorted array.

**Step 3:**
Merge - The key operation in Merge Sort is the merging of two sorted sub-arrays to produce a single, sorted sub-array. This involves comparing elements from the two sub-arrays and placing them in the correct order.

**Time Complexity:**
Merge Sort has a consistent time complexity of O(n log n) in all cases, where 'n' is the number of elements in the array. It is a stable sorting algorithm, meaning that equal elements maintain their relative order in the sorted output. While Merge Sort has a slightly higher space complexity due to the need for additional memory, its stability and predictable performance make it a widely used and reliable sorting algorithm.

![Merge sort](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/merge-sort.png)

<!-- ignore start -->

```java
class Solution {

	void merge(int[] arr, int low, int mid, int high) {
		int subArr1Size = mid - low + 1;
		int subArr2Size = high - mid;

		int [] subArr1 = new int[subArr1Size];
		int [] subArr2 = new int[subArr2Size];

		for (int i = 0; i < subArr1Size; i++) {
           subArr1[i] = arr[low + i];
      	 }
      	 for (int i = 0; i < subArr2Size; i++) {
           subArr2[i] = arr[mid + 1 + i];
		}
		int i = 0, j = 0, k = low;

		while(i < subArr1Size && j < subArr2Size) {
			if(subArr1[i] <= subArr2[j]) {
				arr[k] = subArr1[i];
				i++;
			} else {
				arr[k] = subArr2[j];
				j++;
			}
			k++;
		}
		while(i < subArr1Size) {
			arr[k++] = subArr1[i++];
		}
		while (j < subArr2Size) {
           arr[k++] = subArr2[j++];
       }
	}

	void mergesort(int[] arr, int low, int high){
		if(high > low) {
			int mid = (high + low) / 2;
			mergesort(arr, low, mid);
			mergesort(arr, mid + 1, high);
			merge(arr, low, mid, high);
		}
	}

	void mergeSort (int[] arr) {
		int n = arr.length;
		mergesort(arr, 0, n - 1);
	}
}

```

<!-- ignore end -->

```typescript
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```
