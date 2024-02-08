---
title: Breadth-first search
tags: ["traversal", "algorithms", "binary", "tree"]
languages: ["java"]
sort: 1100
---

# Breadth-first search

Breadth-First Search (BFS) is a graph traversal algorithm that systematically explores all the vertices of a graph in breadthward motion, level by level. It starts at a chosen vertex and visits all its neighbors before moving on to their neighbors. BFS is commonly used to find the shortest path in an unweighted graph and to explore the structure of a graph.

**How Breadth-First Search Works:**

1. **Queue Initialization:**

   - Begin by selecting a starting vertex and enqueue it into a queue.

2. **Explore Neighbors:**

   - Dequeue a vertex from the front of the queue and explore all its neighbors.
   - Enqueue any unvisited neighbors, marking them as visited to avoid duplication.

3. **Level-wise Exploration:**

   - Continue the process level by level, exploring all vertices at the current level before moving on to the next level.

4. **Termination:**
   - Repeat until the queue is empty, ensuring that all reachable vertices are visited.

**Key Characteristics:**

- **FIFO Structure:**

  - BFS uses a First-In-First-Out (FIFO) queue to maintain the order in which vertices are discovered and processed.

- **Visited Marking:**

  - To avoid revisiting vertices, mark each vertex as visited once it is dequeued from the queue.

- **Shortest Path:**
  - BFS guarantees that the shortest path to any reachable vertex is discovered first, making it valuable for pathfinding in unweighted graphs.

**Applications:**

- Shortest Pathfinding.
- Connected Components.
- Web Crawling.
- Network Broadcasting.

**Time Complexity:**

- The time complexity of BFS is \(O(V + E)\), where \(V\) is the number of vertices and \(E\) is the number of edges. The algorithm visits each vertex and edge once.

![Breadth first search](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/breadth-first-search.png)

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

  bfs(startingVertex: string) {
    const visited: Set<string> = new Set();
    const queue: string[] = [];

    visited.add(startingVertex);
    queue.push(startingVertex);

    while (queue.length > 0) {
      const currentVertex = queue.shift()!;
      console.log(currentVertex);

      const neighbors = this.adjacencyList.get(currentVertex) || [];

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
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

graph.bfs("A");
```
