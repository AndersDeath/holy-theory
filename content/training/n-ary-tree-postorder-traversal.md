---
title: N-ary Tree Postorder Traversal
tags: ['training', 'task']
languages: ['typescript']
---
# N-ary Tree Postorder Traversal

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

function postorder(root: Node | null): number[] {
  const result: number[] = [];

  function traverse(node: Node | null) {
    if (node === null) {
      return;
    }

    // Traverse children
    for (const child of node.children) {
      traverse(child);
    }

    // Process current node
    result.push(node.val);
  }

  traverse(root);
  return result;
};
```

### Step-by-Step:

1. **Initialization:**
   - Initialize an array called `result` to store the values in postorder traversal.

2. **Define a Recursive Function for Traversal:**
   - The `traverse` function is defined to perform the recursive traversal.

3. **Check if the Node is Null:**
   - Within the `traverse` function, check if the current node is null. If so, return, as there's nothing to process.

4. **Traverse Children:**
   - Use a `for...of` loop to iterate through each child of the current node.
   - Recursively call the `traverse` function on each child. This step ensures that the entire subtree rooted at each child is processed before the current node.

5. **Process Current Node:**
   - After traversing all children, process the current node by pushing its value onto the `result` array.
   - This ensures that the current node is processed after its children, following the postorder traversal strategy.

6. **Start the Traversal with the Root Node:**
   - Call the `traverse` function with the provided `root` parameter to start the postorder traversal from the root of the tree.

7. **Return the Result Array:**
   - Return the final `result` array containing the postorder traversal of the tree.

The algorithm uses a recursive approach to perform postorder traversal. It processes all children of a node before processing the node itself, ensuring a postorder traversal sequence. The result array collects the values in the order they are visited.