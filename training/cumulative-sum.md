---
title: Cumulative Sum
tags: ['training', 'task']
languages: ['java']
---
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
* [Go back](../readme.md)
