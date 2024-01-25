---
title: Selection sort
tags: ['algorithms', 'selection', 'sort']
languages: ['java', 'typescript', 'python']
sort: 200
---
# Selection sort

Selection Sort is a straightforward sorting algorithm that works by dividing the input array into two parts: the sorted and the unsorted subarrays. The algorithm repeatedly selects the minimum (or maximum, depending on the sorting order) element from the unsorted subarray and swaps it with the first unsorted element. This process is iteratively applied until the entire array is sorted.

**How it works:**

1. **Dividing the Array:**
   - The algorithm starts with the entire array considered as unsorted.

2. **Finding the Minimum Element:**
   - In each iteration, Selection Sort finds the minimum element from the unsorted part of the array.

3. **Swapping:**
   - Once the minimum element is identified, it is swapped with the first element in the unsorted part, effectively extending the sorted subarray.

4. **Iterative Process:**
   - The above steps are repeated for the remaining unsorted part of the array until the entire array is sorted.

![Selection sort](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/selection-sort.png)

```typescript
function selectionSort(array: any[]) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) min = j;
    }
    [array[i], array[min]] =[array[min], array[i]]
  }
  return array;
}

```
<!-- ignore start -->

```java
	public static void selectionSort(int[] array) {
		for(int i = 0; i < array.length - 1; i++) {
			int min = i;
			for(int j = i + 1; j < array.length; j++) {
				if(array[min] > array[j]) {
					min = j;
				}
			}
			int temp = array[i];
			array[i] = array[min];
			array[min] = temp;
		}
	}
```

```python
print('This is selection sort')

def find_smallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index

def selection_sort(arr):
    newArr = []
    for i in range(len(arr)):
        smallest = find_smallest(arr)
        newArr.append(arr.pop(smallest))
    return newArr

```

<!-- ignore end -->

* [Go back](../readme.md)