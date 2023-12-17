---
title: Interpolation search
tags: ['algorithms', 'interpolation', 'search']
languages: ['java']
sort: 700
---
# Interpolation search

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