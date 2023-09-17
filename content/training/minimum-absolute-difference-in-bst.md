---
title: Minimum Absolute Difference in BST
tags: ['training', 'task']
languages: ['typescript']
---
# Minimum Absolute Difference in BST

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

function getMinimumDifference(root: TreeNode | null): number {
    let minDiff = Infinity;
    let prevVal = null;

    const inorderTraversal = (node: TreeNode | null): void => {
        if (node === null) {
            return;
        }

        inorderTraversal(node.left);

        if (prevVal !== null) {
            minDiff = Math.min(minDiff, node.val - prevVal);
        }
        prevVal = node.val;

        inorderTraversal(node.right);
    };

    inorderTraversal(root);

    return minDiff;
};
```

The given function `getMinimumDifference` is intended to find the minimum absolute difference between any two nodes in a binary search tree (BST). Here's how the function works:

1. The function initializes `minDiff` with a value of positive infinity (to store the minimum absolute difference) and `prevVal` with `null` (to keep track of the previous visited node's value during the in-order traversal).

2. The function defines an `inorderTraversal` function that performs an in-order traversal of the BST. It takes a `node` as an argument and does the following:
   - If `node` is `null`, it returns, indicating the end of the traversal.
   - Recursively calls `inorderTraversal` on the `left` child of `node`.
   - Calculates the absolute difference between the current node's value (`node.val`) and the previous visited node's value (`prevVal`). If `prevVal` is not `null`, it updates `minDiff` with the minimum of the current `minDiff` and the calculated absolute difference.
   - Updates `prevVal` to the current node's value.
   - Recursively calls `inorderTraversal` on the `right` child of `node`.

3. The main function, `getMinimumDifference`, starts by invoking the `inorderTraversal` function on the root node of the BST.

4. Finally, the function returns the calculated `minDiff`, which represents the minimum absolute difference between any two nodes in the BST.

**Techniques Used:**

1. **Binary Search Tree Traversal (In-Order):** The function uses in-order traversal to visit nodes in increasing order of their values. This is a key property of BSTs, and it allows efficient calculation of the minimum absolute difference between adjacent nodes.

2. **Tracking Previous Value:** The function keeps track of the previous visited node's value (`prevVal`) during the in-order traversal. This is essential for calculating the absolute differences between adjacent nodes.

3. **Updating Minimum Difference:** The function calculates the absolute difference between adjacent nodes and updates the `minDiff` with the minimum value encountered so far.

**Summary:**

The `getMinimumDifference` function utilizes in-order traversal on a binary search tree to calculate the minimum absolute difference between any two nodes. It takes advantage of the BST's properties to efficiently traverse the tree and calculate the required difference.


* [Go back](../readme.md)

