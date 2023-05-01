---
title: Primes upon to N
tags: ['training', 'task']
languages: ['java']
---
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

* [Go back](../readme.md)
