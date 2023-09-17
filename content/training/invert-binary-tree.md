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

The code is a TypeScript function that inverts a binary tree. It takes the root of a binary tree as input and returns the root of the inverted binary tree.

Here's a step-by-step explanation of the code:

1. The function `invertTree` takes a single parameter `root`, which represents the root of the binary tree to be inverted.

2. The base case of the recursion is handled at the beginning: if `root` is `null`, indicating an empty subtree, the function immediately returns `null`.

3. If `root` is not `null`, the code proceeds to swap the left and right subtrees of the current node, effectively inverting its children.

4. The values of the `left` and `right` children of the current node are stored in the variables `left` and `right`, respectively.

5. The `left` child of the current node is set to the result of recursively calling `invertTree` on the original `right` child. This step inverts the right subtree and assigns it to the left child position.

6. Similarly, the `right` child of the current node is set to the result of recursively calling `invertTree` on the original `left` child. This step inverts the left subtree and assigns it to the right child position.

7. After swapping the subtrees, the `root` of the inverted subtree is returned.

Overall, this algorithm efficiently performs a recursive inversion of a binary tree by swapping the left and right subtrees at each level of the recursion.

Techniques used in this code include:
- Recursive traversal of a binary tree.
- Swapping values or nodes of the tree.
- Handling base cases to terminate recursion.


* [Go back](../readme.md)