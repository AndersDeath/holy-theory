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

**Solution:**
Below are the step-by-step explanations of the code:

1. The `Solution` class is defined, containing the `isArithmeticSequence` method.

2. The `isArithmeticSequence` method takes one parameter:
   - `arr`: an array of integers to be checked for being an arithmetic sequence.

3. The length of the array, `length`, is assigned to the `length` variable.

4. An `if` statement is used to check if the length of the array is equal to 1. If so, it means there is only one element in the array, and the method immediately returns `true` since a single element can be considered an arithmetic sequence.

5. The `Arrays.sort()` method is called to sort the array in ascending order. This step is necessary to ensure that the elements are in increasing order for checking the difference.

6. The difference between the second element (`arr[1]`) and the first element (`arr[0]`) is computed and assigned to the `diff` variable. This represents the expected constant difference between consecutive elements in an arithmetic sequence.

7. A `for` loop is used to iterate over the elements of the array starting from the second element (`i = 1`) up to the last element (`i < length`).

8. Inside the loop, an `if` statement is used to check if the difference between the current element and the previous element (`arr[i] - arr[i-1]`) is not equal to the expected difference (`diff`). If the difference is not equal, it means the array does not form an arithmetic sequence, and the method immediately returns `false`.

9. If the loop completes without encountering any mismatch in differences, it means all elements satisfy the condition for an arithmetic sequence, and the method returns `true`.

**Techniques used:**

The following techniques are utilized within the code:

1. Performing operations on array lengths and accessing elements of an array.
2. Sorting an array using `Arrays.sort()`.
3. Computing the difference between two consecutive elements in an array.
4. Using a `for` loop to iterate over array elements.
5. Performing equality checks and conditional branching using `if` statements.
6. Returning boolean values based on the outcome of the checks.


