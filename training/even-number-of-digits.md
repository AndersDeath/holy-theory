---
title: Even number of digits
tags: ['training', 'task']
languages: ['java']
---
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

**Solution:**

Step-by-step breakdown of the code:

1. `int countOfDigits(int number)`: This method takes an integer `number` as input and calculates the number of digits in that integer.

2. `if(number == 0) { return 1; }`: This is a special case check. If the input number is 0, the method returns 1, as 0 has a single digit.

3. `int count = 0;`: This variable `count` is used to keep track of the number of digits in the input number.

4. `while(number > 0) { count++; number /= 10; }`: This loop iterates until the `number` becomes 0. In each iteration, the `count` is incremented, and the `number` is divided by 10 to remove the rightmost digit. This process continues until all the digits are counted.

5. `return count;`: Once the loop is completed, the method returns the `count`, which represents the number of digits in the input number.

6. `List<Integer> getEvenDigitNumbers (int[] arr)`: This method takes an array of integers `arr` as input and returns a list of integers that have an even number of digits.

7. `List<Integer> output = new ArrayList<Integer>();`: This initializes an `ArrayList` called `output` to store the integers with an even number of digits.

8. `for(int i = 0; i < arr.length; i++) {`: This loop iterates through each element in the input array.

9. `if(countOfDigits(arr[i]) % 2 == 0) { output.add(arr[i]); }`: This line checks if the number of digits in the current element `arr[i]` is even. If it is, the element is added to the `output` list.

10. After processing all elements in the input array, the method returns the `output` list, which contains the integers with an even number of digits.

Techniques used:

1. Java Programming Language: The code is written in the Java programming language, a widely used language for building various applications.

2. ArrayList: The `ArrayList` data structure from the `java.util` package is used to store the integers with an even number of digits.

3. Loop: The code uses a `while` loop to count the number of digits in the input integer and a `for` loop to iterate through the elements in the input array.

4. Conditional Statement: The `if` statement is used to check if the number of digits in an integer is even.

Summary:

The provided Java code contains two methods: `countOfDigits`, which calculates the number of digits in an integer, and `getEvenDigitNumbers`, which returns a list of integers with an even number of digits from the input array.


* [Go back](../readme.md)
