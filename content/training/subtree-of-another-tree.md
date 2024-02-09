---
title: Subtree of Another Tree
tags: ["training", "task"]
languages: ["typescript"]
---

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

**Description:**

1. **Input and Output**:

   - The `isSubtree` function takes two binary tree nodes, `s` and `t`, and returns a boolean value indicating whether `t` is a subtree of `s`.

2. **Base Case**:

   - If `s` is null, there's no way `t` can be a subtree, so the function returns `false`.

3. **Check Same Tree**:

   - The code first checks if `t` is the same as `s`. This is done using the `isSameTree` helper function.
   - If `t` is found to be the same as `s`, it means that `t` is a subtree of `s`, so the function returns `true`.

4. **Recursion**:

   - If `t` is not the same as `s`, the code recursively checks whether `t` is a subtree of `s`'s left child or right child.
   - This is done by calling the `isSubtree` function recursively on `s`'s left and right subtrees.

5. **Helper Function `isSameTree`**:

   - This function checks if two binary trees, `s` and `t`, are the same.
   - It handles the base cases when both `s` and `t` are null, and when one of them is null and the other is not.
   - It compares the values of the nodes and recursively checks the left and right subtrees.

6. **Return Result**:
   - If none of the above conditions are met, the function returns `false`, indicating that `t` is not a subtree of `s`.

**Techniques used:**

1. Recursion to traverse and compare binary trees.
2. Base case handling for null nodes.
3. Node value comparison.

**Algorithm Complexity:**

- Time Complexity: O(m _ n), where `m` is the number of nodes in tree `s` and `n` is the number of nodes in tree `t`. In the worst case, the `isSameTree` function can be called `m _ n` times.
- Space Complexity: O(max(m, n)), where `m` and `n` are the heights of trees `s` and `t`, respectively. The maximum space used by the recursive call stack is determined by the height of the taller tree.

This code efficiently determines whether binary tree `t` is a subtree of binary tree `s`.
