---
title: Binary tree postorder traversal
tags: ['traversal', 'algorithms', 'binary', 'tree']
languages: ['java']
sort: 1000
---
# Binary tree postorder traversal

```java
class Solution {
	
	void utility(Node root, List<Integer> traversal) {
		if(root == null) {
			return;
		}
		
		utility(root.left, traversal);
		utility(root.right, traversal);
		traversal.add(root.data);

	}
	
	List<Integer> getPostorderTraversal(Node root) {
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

  utility(root.left, traversal);
  utility(root.right, traversal);
  traversal.push(root.data);
}

function getPostorderTraversal(root: Node | null): number[] {
  const traversal: number[] = [];
  utility(root, traversal);
  return traversal;
}

```