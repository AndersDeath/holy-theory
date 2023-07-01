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
**Solution:**
Below are the step-by-step explanations of the code:

1. The `Solution` class is defined, containing the `adjListToMatrix` method.

2. The `adjListToMatrix` method takes two parameters:
   - `n`: an integer representing the number of nodes in the graph.
   - `adjList`: an array of `ArrayList<Integer>` representing the adjacency list of the graph.

3. A 2D array, `matrix`, is initialized with dimensions `n` × `n`. It will hold the adjacency matrix representation of the graph.

4. Two nested `for` loops are used to iterate over each node in the adjacency list and its corresponding neighbors.

5. The outer loop iterates from 0 to `n-1`, representing each node in the graph.

6. The inner loop iterates over the neighbors of the current node, accessed through `adjList[i]`, where `i` is the index of the current node.

7. For each neighbor, the corresponding entry in the `matrix` is set to 1 to indicate an edge between the current node and its neighbor.

8. After the nested loops finish, the completed `matrix` representing the adjacency matrix is returned.

**Techniques used:**

The following techniques are utilized within the code:

1. Iterating over arrays using `for` loops.
2. Accessing elements of an array using indices.
3. Accessing elements of an `ArrayList` using the `get` method.
4. Constructing a 2D array with specified dimensions.
5. Assigning values to elements of a 2D array.
6. Converting an adjacency list representation to an adjacency matrix representation.

* [Go back](../readme.md)
