---
title: Binary tree in order traversal
tags: ['traversal', 'algorithms', 'binary', 'tree']
languages: ['java']
sort: 900
---
# Binary tree in order traversal

```java
class Solution {
	
	
	List<Integer> getInOrderTraversal(Node root) {
    	List<Integer> list = new ArrayList<Integer>();
		Stack<Node> stack = new Stack<>();
		Node node = root;
		
		while(node != null || !stack.isEmpty()) {
			while(node != null) {
				stack.push(node);
				node = node.left;
			}
			list.add(stack.peek().data);
			node = stack.pop().right;
		}
		
		return list;
	}
}
```

```typescript

class TreeNode {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function getInOrderTraversal(root: TreeNode | null): number[] {
  const list: number[] = [];
  const stack: TreeNode[] = [];
  let node: TreeNode | null = root;

  while (node !== null || stack.length > 0) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }
    list.push(stack[stack.length - 1].data);
    node = stack.pop()!.right;
  }

  return list;
}

```