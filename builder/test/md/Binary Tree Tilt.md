# Binary Tree Tilt

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

function findTilt(root: TreeNode | null): number {
  let tilt = 0;

  function calculateTiltAndSum(node: TreeNode | null): number {
    if (node === null) {
      return 0;
    }

    const leftSum = calculateTiltAndSum(node.left);
    const rightSum = calculateTiltAndSum(node.right);

    tilt += Math.abs(leftSum - rightSum);

    return node.val + leftSum + rightSum;
  }

  calculateTiltAndSum(root);

  return tilt;
};

```

