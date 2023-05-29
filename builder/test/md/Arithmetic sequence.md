# Arithmetic sequence

```java
class Solution {
	boolean isArithmeticSequence (int[] arr) {
		int length = arr.length;
		if(length == 1) {
			return true;
		}
		
		Arrays.sort(arr);
		int diff = arr[1] - arr[0];
		for(int i = 1; i < length; i++) {
			if(arr[i] - arr[i-1] != diff) {
				return false;
			}
		}
		return true;
	}
}
```

