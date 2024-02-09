
# Primes upon to N

```java
class Solution {
	List<Integer> primesUptoN(int n) {
	    boolean isPrime[] = new boolean[n + 1];
		ArrayList<Integer> output = new ArrayList<Integer>();

		for(int i = 2; i <= n; i++) {
			isPrime[i] = true;
		}

		isPrime[0] = false;
		isPrime[1] = false;
		for(int i = 2; i * i <= n; i++) {
           for(int j = i * i; j <= n; j += i) {
               if(isPrime[i] == true) {
                   isPrime[j] = false;
               }
           }
       }
 		for(int i = 2; i <= n; i++) {
           if(isPrime[i] == true) {
               output.add(i);
           }
       }
		return output;
	}
}
```

This Java code defines a class `Solution` with a method `primesUptoN` that generates a list of prime numbers up to a given integer `n`. Here's how the code works:

1. The `primesUptoN` method takes an integer `n` as input and returns a list of prime numbers.

2. It creates a boolean array `isPrime` of size `n + 1`, where each element represents whether the corresponding index is a prime number or not. It initializes all elements to `true`.

3. The code sets `isPrime[0]` and `isPrime[1]` to `false` since 0 and 1 are not prime numbers.

4. The code uses a nested loop structure to mark the multiples of each prime number as non-prime. The outer loop runs from 2 to the square root of `n`, and the inner loop runs through multiples of the current prime number, starting from its square.

5. If `isPrime[i]` is `true`, it means `i` is a prime number. The code then marks its multiples (`j`) as non-prime by setting `isPrime[j]` to `false`.

6. After marking all non-prime numbers, the code creates an `ArrayList` named `output` to store the prime numbers.

7. It iterates through the `isPrime` array and adds the indices with `true` values (which represent prime numbers) to the `output` list.

8. Finally, the `output` list containing prime numbers up to `n` is returned.

**Techniques Used:**

- **Sieve of Eratosthenes:** The code uses the Sieve of Eratosthenes algorithm to efficiently find prime numbers.

**Summary:**

The `primesUptoN` method of the `Solution` class generates a list of prime numbers up to a given integer `n` using the Sieve of Eratosthenes algorithm. It uses a boolean array to mark non-prime numbers and then constructs an `ArrayList` containing the prime numbers found.
