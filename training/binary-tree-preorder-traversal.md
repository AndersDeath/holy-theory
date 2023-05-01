---
title: Binary Tree Preorder Traversal
tags: ['training', 'task', 'tree']
languages: ['typescript']
---
# Binary Tree Preorder Traversal

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

function preorderTraversal(root: TreeNode | null): number[] {
    const output: any[] = [];
    preorder(root, output);
    return output;
};

function preorder(root: TreeNode | null, output: any[]) {
    if (root == null) return;

    output.push(root.val);
    preorder(root.left, output);
    preorder(root.right, output);
}

```
* [Go back](../readme.md)
