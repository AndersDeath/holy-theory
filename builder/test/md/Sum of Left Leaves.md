# Sum of Left Leaves

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

function sumOfLeftLeaves(root: TreeNode | null): number {
    let result = 0;
    const dfs = (root) => {
        if (root === null) {
            return;
        }
        if (root.left !== null && root.left.left === null && root.left.right === null) {
            result += root.left.val;
        }
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return result;
};
```
* [Go back](../readme.md)