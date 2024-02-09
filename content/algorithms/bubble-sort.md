---
title: Bubble sort
tags: ["algorithms", "bubble", "sort"]
languages: ["typescript", "java"]
sort: 100
---

# Bubble sort

Bubble sorting is one of the simplest sorting algorithms that is not used in practice, but is actively used for training purposes. It works by repeatedly going through the sorted list, comparing each pair of neighboring elements and replacing them if they are in the wrong order. The pass through the list is repeated until no permutations are needed, indicating that the list is sorted.

**How it works:**

1. **Comparing neighboring elements:**

   - The algorithm starts by comparing the first two elements of the array. If the first element is greater than the second, they are swapped. Otherwise, they remain in their positions.

2. **Iterative process:**

   - This process is then repeated for each pair of neighboring elements throughout the array. After the first iteration, the largest element will "pop up" to the last position.

3. **Next passes:**

   - The algorithm then repeats the process for the remaining elements (excluding those already sorted at the end of the array). At each pass, the next largest element is placed in the correct position.

4. **Termination:**
   - The algorithm terminates when a pass through the entire array is made without any swaps, indicating that the array is now sorted.

**Time complexity:** - Bubble sort has a time complexity of O(n^2) in the worst and average cases, where n is the number of elements in the array. This makes it inefficient for large datasets but useful for educational purposes because of its simplicity.

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

console.log(bubbleSort([2, 5, 2, 6, 7, 2, 22, 5, 7, 9, 0, 2, 3]));
```

<!-- ignore start -->

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

<!-- ignore end -->

