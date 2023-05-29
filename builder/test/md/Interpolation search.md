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
* [Go back](../readme.md)