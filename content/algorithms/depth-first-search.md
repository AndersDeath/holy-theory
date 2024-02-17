---
title: Depth-first search
tags: ["traversal", "algorithms", "binary", "tree"]
languages: ["java"]
sort: 1200
---

# Depth-first search

Depth-First Search (DFS) is a graph traversal algorithm that systematically explores the vertices of a graph by going as deep as possible along each branch before backtracking. It starts at a chosen vertex, explores as far as possible along one branch, and then backtracks to explore other branches. DFS is commonly used to detect cycles in a graph, topologically sort vertices, and solve problems related to connected components.

**How it works:**

**Step 1:**

Begin by selecting a starting vertex and mark it as visited.

**Step 2:**

Move to an unvisited neighbor of the current vertex and repeat the process. If all neighbors are visited, backtrack to the previous vertex.

**Step 3:**

DFS can be implemented using recursion or an explicit stack to keep track of the vertices to be visited.

**Step 4:**

Mark each visited vertex to avoid revisiting and use backtracking to explore other branches.

**Step 5:**
Continue the process until all reachable vertices are visited.

**Key Characteristics:**

- **LIFO Structure:**
  DFS often uses a Last-In-First-Out (LIFO) stack or recursion to maintain the order in which vertices are visited.
  **Visited Marking:**

Mark each vertex as visited once it is reached, preventing revisiting.

- **Backtracking:**
  Backtrack to the previous vertex when all neighbors are explored.

**Applications:**

- Topological Sorting.
- Cycle Detection.
- Connected Components.
- Maze Solving.

**Time Complexity:**

- The time complexity of DFS is \(O(V + E)\), where \(V\) is the number of vertices and \(E\) is the number of edges. The algorithm visits each vertex and edge once. Recursive DFS has a space complexity of \(O(V)\) due to the call stack, while an explicit stack implementation can have a space complexity of \(O(E + V)\).

![Depth first search](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/depth-first-search.png)

```typescript
class Graph {
  private adjacencyList: Map<string, string[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: string, vertex2: string) {
    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1);
  }

  dfs(startingVertex: string) {
    const visited: Set<string> = new Set();

    const dfsHelper = (vertex: string) => {
      console.log(vertex);
      visited.add(vertex);

      const neighbors = this.adjacencyList.get(vertex) || [];

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };

    dfsHelper(startingVertex);
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

graph.dfs("A");
```
