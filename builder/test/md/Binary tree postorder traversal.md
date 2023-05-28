# Binary Tree Postorder Traversal
---
# Binary Tree Postorder Traversal

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

function postorderTraversal(root: TreeNode | null): number[] {
  var res = [];
  helper(root, res);
  return res;
};

const helper = function (root, res) {
  if (!root) return;
  helper(root.left, res);
  helper(root.right, res);
  res.push(root.val);
};
```
* [Go back](../readme.md)
