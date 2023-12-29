---
title: Bubble sort
tags: ['algorithms', 'bubble', 'sort']
languages: ['typescript', 'java']
sort: 100
---
# Bubble sort

**Bubble Sort: A Simple Sorting Algorithm**

Bubble Sort is one of the simplest sorting algorithms that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items, and swapping them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, indicating that the list is sorted.

**How Bubble Sort Works:**

1. **Comparing Adjacent Elements:**
   - Bubble Sort starts by comparing the first two elements of an array. If the first element is greater than the second, they are swapped. If not, they remain in their positions.

2. **Iterative Process:**
   - This process is then repeated for every pair of adjacent elements throughout the entire array. After the first iteration, the largest element will have "bubbled up" to the last position.

3. **Subsequent Passes:**
   - The algorithm then repeats the process for the remaining elements (excluding the already sorted ones at the end of the array). In each pass, the next largest element is placed in its correct position.

4. **Termination:**
   - The algorithm terminates when a pass through the entire array is made without any swaps, indicating that the array is now sorted.

**Time Complexity:**
   - Bubble Sort has a time complexity of O(n^2) in the worst and average cases, where 'n' is the number of elements in the array. This makes it inefficient for large datasets but is useful for educational purposes due to its simplicity.


![Bubble sort](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/bubble-sort.png)

```typescript
function bubbleSort(array: number[] | string[]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

console.log(bubbleSort([2,5,2,6,7,2,22,5,7,9,0,2,3]))

```

```java
	public static void bubbleSort(int[] array) {
		for(int i = 0; i < array.length - 1; i++) {
			for(int j = 0; j < array.length - i - 1; j++) {
				if(array[j] > array[j + 1]) {
					int temp = array[j];
					array[j] = array[j + 1];
					array[j + 1] = temp;
				}
			}
		}
	}
```

* [Go back](../readme.md)