---
title: Interpolation search
tags: ["algorithms", "interpolation", "search"]
languages: ["java"]
sort: 1000
---

# Interpolation search

Interpolation Search is a an algorithm designed for finding a specific target value in a sorted array. Unlike linear or binary search, this algorithm utilizes the characteristics of the data distribution to make more informed decisions about where to look for the target. It is particularly effective when the data has a uniform distribution.

**How Interpolation Search Works:**

1. **Linear Interpolation:**

   - Interpolation Search utilizes linear interpolation to estimate the likely position of the target value in the array.

2. **Estimate Position:**

   - Instead of evenly dividing the search space, as in binary search, Interpolation Search estimates the probable position of the target based on its value relative to the minimum and maximum values in the array.

3. **Calculation of Position:**

   - It calculates an estimate of the target's position by considering the relative location of the target with respect to the minimum and maximum values in the current search space.

4. **Refine Search:**
   - Based on the calculated estimate, the algorithm narrows down the search space and repeats the process until the target is found or the search space is exhausted.

**Time Complexity:**

The time complexity of Interpolation Search is O(log log n) on average, where "n" is the number of elements in the array. In the best case, it can be O(1), and in the worst case, it can be O(n). However, the average case is often more relevant, and it is O(log log n) under certain assumptions about the distribution of the data.

![Interpolation search](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/interpolation-search.png)

```java
class Solution {

	private static int interpolationSearch(int[] array, int value) {
		int low = 0;
		int high = array.length - 1;

		while(value >=array[low] && value <= array[high] && low <= high) {
			int probe = low + (high - low) * (value - array[low]) / (array[high] - array[low]);
			if(array[probe] == value) {
				return probe;
			} else if(array[probe] > value) {
				low = probe + 1;
			} else {
				high = probe -1;
			}

		}

		return -1;
	}

}
```

```typescript
function interpolationSearch(array: number[], value: number): number {
  let low = 0;
  let high = array.length - 1;

  while (value >= array[low] && value <= array[high] && low <= high) {
    const probe =
      low + ((high - low) * (value - array[low])) / (array[high] - array[low]);
    const roundedProbe = Math.floor(probe);

    if (array[roundedProbe] === value) {
      return roundedProbe;
    } else if (array[roundedProbe] < value) {
      low = roundedProbe + 1;
    } else {
      high = roundedProbe - 1;
    }
  }

  return -1;
}
```
