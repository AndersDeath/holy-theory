---
title: Selection sort
tags: ["algorithms", "selection", "sort"]
languages: ["java", "typescript", "python"]
sort: 200
---

# Selection sort

Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list.

**How it works:**

1. **Step 1:**

   - Set Min to location 0 in Step 1.

2. **Step 2**

   - Look for the smallest element on the list.

3. **Step 3:**

   - Replace the value at location Min with a different value.

4. **Step 4:**
   - Increase Min to point to the next element
5. **Step 5:**
   - Continue until the list is sorted.

![Selection sort](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/selection-sort.png)

```typescript
function selectionSort(array: any[]) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) min = j;
    }
    [array[i], array[min]] = [array[min], array[i]];
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
