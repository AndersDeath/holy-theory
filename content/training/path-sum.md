---
title: Path Sum
tags: ['training', 'task']
languages: ['typescript']
---
# Path Sum

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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {

    if(root === null) {
        return false;
    }

    if(
        root.left === null &&
        root.right === null &&
        targetSum - root.val === 0
    ) {
        return true;
    }

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)

};

```
The given `hasPathSum` function is designed to determine whether there exists a path from the root of a binary tree to a leaf node such that the sum of values along the path is equal to the given `targetSum`.

Here's how the function works:

1. If the `root` node is `null`, it means we have reached a null node in the tree. In this case, return `false` as there is no valid path to consider.

2. If the `root` node is a leaf node (both left and right children are `null`), check if the `targetSum` minus the value of the current `root` node is `0`. If it is, return `true`, indicating that a valid path with the desired sum has been found.

3. Recursively call the `hasPathSum` function for both the left and right children of the current `root` node, with the `targetSum` reduced by the value of the current `root` node.

4. The function returns `true` if either the left or right subtree has a valid path with the remaining `targetSum`, otherwise it returns `false`.

**Techniques Used:**

- **Binary Tree Traversal:** The function traverses the binary tree using a recursive approach to check for the existence of a path with the desired sum.

- **Recursive Approach:** The function utilizes recursion to explore each possible path in the binary tree and check whether the sum along that path matches the `targetSum`.

**Summary:**

The `hasPathSum` function recursively explores the binary tree to find a path from the root to a leaf node such that the sum of values along the path is equal to the given `targetSum`. It employs a depth-first search approach to navigate the tree and determine whether a valid path exists.

* [Go back](../readme.md)
