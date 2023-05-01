---
title: Adjacency list to adjacency matrix
tags: ['training', 'task', 'matrix', 'graph']
languages: ['java']
---
# Adjacency list to adjacency matrix

```java
class Solution {
    int[][] adjListToMatrix(int n, ArrayList<Integer>[] adjList) {
		int [][] matrix = new int[n][n];

		for(int i = 0; i < n; i++) {
			for(int j = 0; j < adjList[i].size(); j++) {
				matrix[i][adjList[i].get(j)] = 1;
			}
		}
		
		return matrix;
    }
}
```
* [Go back](../readme.md)
