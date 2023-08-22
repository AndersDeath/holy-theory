# Cumulative Sum

```java
class Solution {
	int[] getCumulativeSum (int[] arr) {
		int[] out = new int[arr.length];
		int total = 0;
		for(int i = 0; i < arr.length; i++) {
			total += arr[i];
			out[i] = total;
		}
		return out;
	}
}
```

**Solution:**

Step-by-step breakdown of the code:

1. The `getCumulativeSum` function takes an integer array `arr` as input and returns a new array `out` where each element represents the cumulative sum of elements up to that index.

2. Initialize a new integer array `out` with the same length as the input array `arr`.

3. Initialize a variable `total` to keep track of the running total. Set it to 0.

4. Iterate through each element of the input array `arr` using a for loop.

5. Inside the loop:
   - Add the current element `arr[i]` to the `total` variable, updating the running sum.
   - Assign the value of `total` to the corresponding index `out[i]` in the output array.

6. Repeat steps 5 for each element in the input array until the loop completes.

7. Return the resulting output array `out`, which contains the cumulative sum of elements up to each index.

Techniques used:

1. Array Manipulation: The code initializes and updates the elements of the `out` array to store the cumulative sum values.

2. Looping: The code utilizes a for loop to iterate through each element of the input array and perform the necessary calculations.

3. Accumulation: The code calculates the cumulative sum by continuously adding the current element to the running total.

Summary:

The provided solution efficiently calculates the cumulative sum of the input array by iteratively summing up the elements and storing the cumulative sum at each index in a new array. This approach allows for quick access to the cumulative sum at any given index.



