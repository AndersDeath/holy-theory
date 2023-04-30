---
title: Invert Binary Tree
tags: ['training', 'task', 'tree']
languages: ['typescript']
---
# Invert Binary Tree

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

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root == null) return null;

    const left = root.left;
    const right = root.right;
    root.left = invertTree(right);
    root.right = invertTree(left);
    return root;
};
```
* [Go back](../readme.md)