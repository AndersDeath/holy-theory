---
title: Floyd-Warshall algorithm
tags: ["traversal", "algorithms", "binary", "tree"]
languages: ["typescript"]
sort: 1400
---

# Floyd-Warshall algorithm

The Floyd-Warshall Algorithm is a dynamic programming algorithm used to find the shortest paths between all pairs of vertices in a weighted graph. Unlike Dijkstra's algorithm and Bellman-Ford algorithm, Floyd-Warshall works with graphs that can have both positive and negative edge weights and can handle graphs with cycles. The algorithm iteratively updates the shortest path distances between all pairs until reaching the optimal solution.

**How it works:**

**Step 1:**
Create a matrix to represent the distances between all pairs of vertices. Initialize the matrix with the direct edge weights and set the distances to infinity where there is no direct edge. Initialize the diagonal of the matrix to zeros since the distance from a vertex to itself is zero.

**Step 2:**
For each vertex 'k', iterate through all pairs of vertices 'i' and 'j'. Check if the path from 'i' to 'j' through 'k' is shorter than the current known path from 'i' to 'j'. If yes, update the distance from 'i' to 'j' with the shorter path.

**Step 3:**
Repeat the process for all vertices as intermediate vertices ('k'). After each iteration, the matrix reflects the shortest distances between all pairs of vertices considering all possible intermediate vertices.

**Step 4:**
The final matrix contains the shortest distances between all pairs of vertices.

**Key Characteristics:**

- **Dynamic Programming:**

  - Floyd-Warshall is a dynamic programming algorithm that builds solutions to subproblems to solve the overall problem.

- **Negative Cycles:**
  - The algorithm can detect negative cycles in the graph. If there exists a negative cycle, the algorithm won't converge to a solution.

**Applications:**

- Network Routing.
- Shortest Path Problems.
- Traffic Engineering.

**Time Complexity:**

- The time complexity of Floyd-Warshall Algorithm is \(O(V^3)\), where \(V\) is the number of vertices in the graph.

![Floyd-Warshall algorithm](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/floyd-warshall.png)

```typescript
class Graph {
  private adjacencyMatrix: number[][];

  constructor(numVertices: number) {
    this.adjacencyMatrix = Array.from({ length: numVertices }, () =>
      Array(numVertices).fill(Infinity)
    );

    // Set diagonal elements to 0
    for (let i = 0; i < numVertices; i++) {
      this.adjacencyMatrix[i][i] = 0;
    }
  }

  addEdge(source: number, destination: number, weight: number) {
    this.adjacencyMatrix[source][destination] = weight;
  }

  floydWarshall() {
    const numVertices = this.adjacencyMatrix.length;

    for (let k = 0; k < numVertices; k++) {
      for (let i = 0; i < numVertices; i++) {
        for (let j = 0; j < numVertices; j++) {
          if (
            this.adjacencyMatrix[i][k] + this.adjacencyMatrix[k][j] <
            this.adjacencyMatrix[i][j]
          ) {
            this.adjacencyMatrix[i][j] =
              this.adjacencyMatrix[i][k] + this.adjacencyMatrix[k][j];
          }
        }
      }
    }

    return this.adjacencyMatrix;
  }
}

// Example usage:
const graph = new Graph(4);

graph.addEdge(0, 1, 3);
graph.addEdge(0, 2, 6);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 3, 4);
graph.addEdge(2, 3, 2);

const result = graph.floydWarshall();

console.log("Shortest Path Matrix:");
for (const row of result) {
  console.log(row);
}
```
