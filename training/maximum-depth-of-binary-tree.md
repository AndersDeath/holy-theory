# Maximum Depth of Binary Tree

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

function maxDepth(root: TreeNode | null): number {
    if(root === null) return 0;
    else {
        let leftDepth = maxDepth(root.left);
        let rightDepth = maxDepth(root.right);
        if(leftDepth > rightDepth) return leftDepth + 1;
        else return rightDepth + 1;
    }

};
```
**Source: https://leetcode.com**
* [Go back](../readme.md)