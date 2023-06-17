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


