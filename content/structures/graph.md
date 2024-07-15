---
title: Graph
tags: ["theory", "structures", "data structures"]
languages: [""]
---

# Graph

![Graph](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/graph.png)
![Graph directed](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/graph-directed.png)
![Graph undirected](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/graph-undirected.png)
![Graph weighted](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/graph-weighted.png)

```typescript
class Graph {
    private adjacencyList: { [key: string]: string[] };

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string): void {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1: string, vertex2: string): void {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    display(): void {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
        }
    }

    getVertices(): string[] {
        return Object.keys(this.adjacencyList);
    }

    getEdges(): { [key: string]: string[] } {
        return this.adjacencyList;
    }
}

```

Basic Operations:
