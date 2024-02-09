---
title: Binary tree preorder traversal
tags: ["traversal", "algorithms", "binary", "tree"]
languages: ["java"]
sort: 1100
ignore: true
---

# Binary tree preorder traversal

```java
class Solution {

	void utility(Node root, List<Integer> traversal) {
		if(root == null) {
			return;
		}

		traversal.add(root.data);
		utility(root.left, traversal);
		utility(root.right, traversal);
	}

	List<Integer> getPreorderTraversal(Node root) {
		List<Integer> traversal = new ArrayList<Integer>();
		utility(root, traversal);
		return traversal;
	}
}
```

```typescript
class Node {
  data: number;
  left: Node | null;
  right: Node | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function utility(root: Node | null, traversal: number[]): void {
  if (root === null) {
    return;
  }

  traversal.push(root.data);
  utility(root.left, traversal);
  utility(root.right, traversal);
}

function getPreorderTraversal(root: Node | null): number[] {
  const traversal: number[] = [];
  utility(root, traversal);
  return traversal;
}
```
