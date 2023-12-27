---
title: Interpolation search
tags: ['algorithms', 'interpolation', 'search']
languages: ['java']
sort: 1000
---
# Interpolation search

Interpolation Search is a an algorithm designed for finding a specific target value in a sorted array. Unlike linear or binary search, this algorithm utilizes the characteristics of the data distribution to make more informed decisions about where to look for the target. It is particularly effective when the data has a uniform distribution.

**How Interpolation Search Works:**

1. **Linear Interpolation:**
   - Interpolation Search uses linear interpolation to estimate the likely position of the target value in the array.

2. **Estimate Position:**
   - Instead of uniformly dividing the search space, as in binary search, Interpolation Search estimates the probable position of the target based on its value relative to the minimum and maximum values in the array.

3. **Calculate Position:**
   - It calculates an estimate of the target's position using a formula: 
      \[ \text{pos} = \text{low} + \left\lfloor \frac{(\text{target} - \text{arr}[\text{low}]) \times (\text{high} - \text{low})}{\text{arr}[\text{high}] - \text{arr}[\text{low}]} \right\rfloor \]
      Here, \(\text{low}\) and \(\text{high}\) represent the indices of the current search space.

4. **Refine Search:**
   - Based on the calculated position, the algorithm narrows down the search space and repeats the process until the target is found or the search space is empty.

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
    const probe = low + ((high - low) * (value - array[low])) / (array[high] - array[low]);
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