# Balanced Binary Tree

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

function isBalanced(root: TreeNode | null): boolean {
    if(root === null) return true;
    if(height(root) === -1) return false;
    return true;
};

function height(node: TreeNode): number {
    if(node == null) return 0;

    const left = height(node.left)
    const right = height(node.right);

    if(left === -1 || right === -1) return -1;
    if(Math.abs(left - right) > 1) return -1;

    return Math.max(left, right) + 1;
}
```

