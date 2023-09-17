---
title: Maximum Depth of N-ary Tree
tags: ['training', 'task']
languages: ['typescript']
---
# Maximum Depth of N-ary Tree

```typescript
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node | null): number {
   if (root === null) {
    return 0;
  }
  
  let maxChildDepth = 0;
  
  for (let child of root.children) {
    const childDepth = maxDepth(child);
    maxChildDepth = Math.max(maxChildDepth, childDepth);
  }
  
  return maxChildDepth + 1;  
};
```

**Step-by-Step solution:**

1. Define a function `maxDepth` that takes a node of type `Node` (representing a node in a tree) as input.

2. Check if the `root` node is `null` (indicating an empty subtree). If so, return 0 as the depth of the subtree is 0.

3. If the `root` node is not `null`, initialize a variable `maxChildDepth` to keep track of the maximum depth among the children of the current node.

4. Iterate through each child node of the `root` node using a `for...of` loop.

5. For each child node, recursively calculate its depth using a recursive call to `maxDepth(child)`.

6. Update the value of `maxChildDepth` by taking the maximum between its current value and the depth of the current child node (`childDepth`).

7. After iterating through all the children nodes, return `maxChildDepth + 1`, indicating the maximum depth of the current subtree.

**Techniques Used:**

1. **Recursion:** The algorithm uses recursion to traverse the tree and calculate the maximum depth. The recursive function is applied to each child node.

2. **Looping:** The algorithm uses a `for...of` loop to iterate through the children of the current node.

3. **Math.max:** The algorithm uses the `Math.max` function to compare and update the maximum child depth.

**Summary:**

The `maxDepth` function calculates the maximum depth of a tree represented by nodes of type `Node`. It handles both the base case (empty subtree) and the recursive case (non-empty subtree) to calculate the maximum depth. The algorithm returns the maximum depth of the given tree.

* [Go back](../readme.md)