
# Even number of digits
```java
class Solution {
	int countOfDigits(int number) {
		if(number == 0) {
			return 1;
		}
		int count = 0;
		while(number > 0) {
			count++;
			number /= 10;
		}
		return count;
	}
		
	
	List<Integer> getEvenDigitNumbers (int[] arr) {
		// add your logic here
		List<Integer> output = new ArrayList<Integer>();

		for(int i = 0; i < arr.length; i++) {
			if(countOfDigits(arr[i]) % 2 == 0) {
				output.add(arr[i]);
			}
		}
		return output; 
	}
}

```
* [Go back](../readme.md)
