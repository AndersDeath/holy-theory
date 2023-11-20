---
title: N-ary Tree Preorder Traversal
tags: ["training", "task"]
languages: ["typescript"]
---

# N-ary Tree Preorder Traversal

```typescript
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
  const result: number[] = [];
  if (!root) {
    return result;
  }

  const stack: Node[] = [root];

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    result.push(currentNode.val);

    for (let i = currentNode.children.length - 1; i >= 0; i--) {
      stack.push(currentNode.children[i]);
    }
  }

  return result;
}
```

### Step-by-Step:

1. **Function Definition:**
   - The function `preorder` takes a parameter `root` which is either a `Node` or `null`.
   - It returns an array of numbers representing the preorder traversal of the tree.

2. **Initialize Result Array:**
   - Create an empty array called `result` to store the preorder traversal.

3. **Check if the Tree is Empty:**
   - If the root is `null` (indicating an empty tree), return the empty result array.

4. **Initialize Stack:**
   - Create a stack called `stack` to help with the iterative traversal.
   - Push the root node onto the stack to start the traversal.

5. **Iterative Traversal Using Stack:**
   - Enter a while loop that continues until the stack is empty.
   - Inside the loop, pop the top node (`currentNode`) from the stack.
   - Push the value of the `currentNode` onto the result array.

6. **Push Children onto Stack:**
   - Iterate through the children of the `currentNode` in reverse order (from right to left).
   - Push each child onto the stack.

7. **Repeat Until Stack is Empty:**
   - Continue the loop until the stack becomes empty. At this point, all nodes in the tree have been processed.

8. **Return Result:**
   - Return the final result array containing the preorder traversal of the tree.

The algorithm uses a stack to keep track of the nodes to be processed. It starts with the root, processes each node and its children, and continues until all nodes are visited. The order of processing is such that a node's value is added to the result array before its children are explored. This follows the preorder traversal strategy for a tree.