# Subtree of Another Tree

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


function isSubtree(s: TreeNode | null, t: TreeNode | null): boolean {
  if (s === null) {
    return false;
  }

  if (isSameTree(s, t)) {
    return true;
  }

  return isSubtree(s.left, t) || isSubtree(s.right, t);
}

function isSameTree(s: TreeNode | null, t: TreeNode | null): boolean {
  if (s === null && t === null) {
    return true;
  }

  if (s === null || t === null) {
    return false;
  }

  if (s.val !== t.val) {
    return false;
  }

  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}
```
