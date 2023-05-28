# Binary Tree Paths
---
# Binary Tree Paths

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

function binaryTreePaths(root: TreeNode | null): string[] {
    const responce: string[] = [];
    helper(root, "", responce);
    return responce;
};

function helper(root: TreeNode, path: string, responce: string[]) {
    if (root == null) { return; }

    if (root.left == null && root.right == null) {
        responce.push(path + root.val);
        return;
    }

    helper(root.left, path + root.val + "->", responce);
    helper(root.right, path + root.val + "->", responce);
}
```
* [Go back](../readme.md)
