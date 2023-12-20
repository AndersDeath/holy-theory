---
title: Dijkstra's algorithm
tags: ["traversal", "algorithms", "binary", "tree"]
languages: ["typescript"]
sort: 1100
---

# Dijkstra's algorithm

```typescript
class Graph {
  private adjacencyList: Map<string, Map<string, number>>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Map());
    }
  }

  addEdge(vertex1: string, vertex2: string, weight: number) {
    this.adjacencyList.get(vertex1)?.set(vertex2, weight);
    this.adjacencyList.get(vertex2)?.set(vertex1, weight);
  }

  dijkstra(startingVertex: string) {
    const distances: Map<string, number> = new Map();
    const previous: Map<string, string | null> = new Map();
    const priorityQueue = new PriorityQueue();

    for (const vertex of this.adjacencyList.keys()) {
      distances.set(vertex, vertex === startingVertex ? 0 : Infinity);
      previous.set(vertex, null);
      priorityQueue.enqueue(vertex, distances.get(vertex)!);
    }

    while (!priorityQueue.isEmpty()) {
      const currentVertex = priorityQueue.dequeue()!;
      const neighbors = this.adjacencyList.get(currentVertex);

      if (neighbors) {
        for (const neighbor of neighbors.keys()) {
          const distance = distances.get(currentVertex)! + neighbors.get(neighbor)!;

          if (distance < distances.get(neighbor)!) {
            distances.set(neighbor, distance);
            previous.set(neighbor, currentVertex);
            priorityQueue.enqueue(neighbor, distance);
          }
        }
      }
    }

    return { distances, previous };
  }

  shortestPath(startingVertex: string, targetVertex: string) {
    const { distances, previous } = this.dijkstra(startingVertex);

    const path: string[] = [];
    let currentVertex = targetVertex;

    while (currentVertex !== null) {
      path.unshift(currentVertex);
      currentVertex = previous.get(currentVertex)!;
    }

    return { path, distance: distances.get(targetVertex) };
  }
}

class PriorityQueue {
  private items: [string, number][] = [];

  enqueue(element: string, priority: number) {
    this.items.push([element, priority]);
    this.sort();
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  private sort() {
    this.items.sort((a, b) => a[1] - b[1]);
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "C", 2);
graph.addEdge("B", "D", 5);
graph.addEdge("C", "D", 1);

const { path, distance } = graph.shortestPath("A", "D");
console.log("Shortest Path:", path); // Output: Shortest Path: [ 'A', 'B', 'C', 'D' ]
console.log("Distance:", distance); // Output: Distance: 4


```
