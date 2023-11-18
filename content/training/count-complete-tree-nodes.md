---
title: Count Complete Tree Nodes
tags: ['training', 'task']
languages: ['typescript']
---
# Count Complete Tree Nodes

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function countNodes(root: any | null): number {
  if (!root) {
    return 0;
  }

  const leftDepth = getLeftDepth(root);
  const rightDepth = getRightDepth(root);

  if (leftDepth === rightDepth) {
    // If the left and right subtrees have the same depth, the tree is complete.
    return Math.pow(2, leftDepth) - 1;
  }

  // If the left and right subtrees have different depths, recursively count nodes.
  return 1 + countNodes(root.left) + countNodes(root.right);
}

function getLeftDepth(node: any | null): number {
  let depth = 0;
  while (node) {
    depth++;
    node = node.left;
  }
  return depth;
}

function getRightDepth(node: any | null): number {
  let depth = 0;
  while (node) {
    depth++;
    node = node.right;
  }
  return depth;
}

```

**Solution:**
This code defines a function `countNodes` to count the total number of nodes in a binary tree. The binary tree is represented using the `TreeNode` class, which has a `val` property for the node value and `left` and `right` properties for the left and right child nodes.

Breakdown:

1. **`countNodes` Function:**
   - The function takes a binary tree's root node as an argument (`root: TreeNode | null`).
   - If the tree is empty (i.e., `root` is `null`), it returns 0.
   - It then calculates the depth of the left and right subtrees using the helper functions `getLeftDepth` and `getRightDepth`.
   - If the left and right subtrees have the same depth, the tree is complete, and it returns the total number of nodes using the formula \(2^{\text{leftDepth}} - 1\).
   - If the left and right subtrees have different depths, it recursively counts nodes in the left and right subtrees and adds 1 for the current node.

2. **`getLeftDepth` and `getRightDepth` Helper Functions:**
   - These functions take a node as an argument and return the depth of the left or right subtree, respectively.
   - They use a while loop to traverse the tree and count the depth by moving to the left or right child nodes until reaching the deepest node.

The overall logic of the code is based on the observation that in a complete binary tree, if the left and right subtrees have the same depth, then the tree is complete, and the total number of nodes can be calculated directly. Otherwise, it recursively counts nodes in the left and right subtrees.