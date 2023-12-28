---
title: Ford Fulkerson algorithm
tags: ["traversal", "algorithms", "binary", "tree"]
languages: ["typescript"]
sort: 1500
---

# Ford Fulkerson algorithm

The Ford-Fulkerson Algorithm is an iterative method to compute the maximum flow in a flow network. It was initially designed to solve the max-flow min-cut problem, where the objective is to find the maximum amount of flow that can be sent from a designated source to a designated sink in a directed graph. The algorithm iteratively augments paths from the source to the sink, increasing the flow until it reaches its maximum value.

**How Ford-Fulkerson Algorithm Works:**

1. **Initialization:**

   - Begin with an initial flow of zero.
   - Determine the residual graph, which represents the remaining capacity for each edge.

2. **Augmenting Paths:**

   - Find an augmenting path from the source to the sink in the residual graph. An augmenting path is a path with available capacity on all its edges.

3. **Flow Augmentation:**

   - Determine the maximum flow that can be added along the augmenting path. This is the minimum capacity value of the edges on the path.

4. **Update Residual Graph:**

   - Update the residual graph by subtracting the flow added along the augmenting path and adding the reverse flow.

5. **Repeat:**

   - Repeat steps 2-4 until there are no more augmenting paths.

6. **Result:**
   - The final flow is the maximum flow in the network.

**Key Characteristics:**

- **Residual Graph:**

  - The residual graph is crucial for the Ford-Fulkerson Algorithm. It represents the remaining capacity for each edge after the initial flow has been determined.

- **Augmenting Paths:**

  - The algorithm focuses on finding augmenting paths, paths in the residual graph with available capacity.

- **Termination:**
  - The algorithm terminates when no more augmenting paths can be found in the residual graph.

**Applications:**

- Network Flows.
- Transportation Networks.
- Telecommunication Networks.

**Time Complexity:**

- The time complexity of the Ford-Fulkerson Algorithm is not strictly defined, as it depends on the choice of augmenting paths. In the worst case, the algorithm may not terminate if the paths are not chosen carefully. When implemented with the Edmonds-Karp variant, where the shortest augmenting paths are chosen using Breadth-First Search, the time complexity is \(O(VE^2)\), where \(V\) is the number of vertices and \(E\) is the number of edges.

```typescript
class FordFulkerson {
  private graph: number[][];
  private numVertices: number;

  constructor(graph: number[][]) {
    this.graph = graph;
    this.numVertices = graph.length;
  }

  fordFulkerson(source: number, sink: number): number {
    let maxFlow = 0;

    // Create a residual graph and initialize it with the original capacities.
    const residualGraph = this.graph.map((row) => [...row]);

    while (true) {
      const path = this.bfs(source, sink, residualGraph);
      if (!path) {
        break; // No augmenting path found, terminate the algorithm
      }

      // Find the minimum capacity along the augmenting path
      let minCapacity = Number.POSITIVE_INFINITY;
      for (let i = 0; i < path.length - 1; i++) {
        const u = path[i];
        const v = path[i + 1];
        minCapacity = Math.min(minCapacity, residualGraph[u][v]);
      }

      // Update residual capacities and reverse edges along the path
      for (let i = 0; i < path.length - 1; i++) {
        const u = path[i];
        const v = path[i + 1];
        residualGraph[u][v] -= minCapacity;
        residualGraph[v][u] += minCapacity;
      }

      // Add the flow of the augmenting path to the total flow
      maxFlow += minCapacity;
    }

    return maxFlow;
  }

  bfs(source: number, sink: number, graph: number[][]): number[] | null {
    const visited: boolean[] = new Array(this.numVertices).fill(false);
    const queue: number[] = [source];
    const parent: number[] = new Array(this.numVertices).fill(-1);

    while (queue.length > 0) {
      const u = queue.shift()!;

      for (let v = 0; v < this.numVertices; v++) {
        if (!visited[v] && graph[u][v] > 0) {
          queue.push(v);
          parent[v] = u;
          visited[v] = true;
        }
      }
    }

    if (!visited[sink]) {
      return null; // No augmenting path found
    }

    const path: number[] = [];
    for (let v = sink; v !== source; v = parent[v]) {
      path.unshift(v);
    }
    path.unshift(source);

    return path;
  }
}

// Example usage:
const graph = [
  [0, 16, 13, 0, 0, 0],
  [0, 0, 10, 12, 0, 0],
  [0, 4, 0, 0, 14, 0],
  [0, 0, 9, 0, 0, 20],
  [0, 0, 0, 7, 0, 4],
  [0, 0, 0, 0, 0, 0],
];

const fordFulkerson = new FordFulkerson(graph);
const maxFlow = fordFulkerson.fordFulkerson(0, 5);
console.log("Maximum Flow:", maxFlow);
```
