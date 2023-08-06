---
title: Maximum Depth of Binary Tree
tags: ['training', 'task']
languages: ['typescript']
---
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

**Step-by-Step solution:**

1. Define a function `maxDepth` that takes a binary tree node `root` as input.

2. Check if the `root` is `null` (indicating an empty subtree). If so, return 0 as the depth of the subtree is 0.

3. If the `root` is not `null`, recursively calculate the maximum depth of the left and right subtrees using two recursive calls to `maxDepth(root.left)` and `maxDepth(root.right)`.

4. Compare the depths of the left and right subtrees. If the `leftDepth` is greater than the `rightDepth`, return `leftDepth + 1`, indicating the maximum depth of the current subtree. Otherwise, return `rightDepth + 1`.

**Techniques Used:**

1. **Recursion:** The algorithm uses recursion to calculate the maximum depth of the binary tree. It breaks down the problem by considering the left and right subtrees.

2. **Conditional Logic:** The algorithm uses conditional statements to compare the depths of the left and right subtrees and determine the maximum depth of the current subtree.

**Summary:**

The `maxDepth` function calculates the maximum depth of a binary tree using a recursive approach. It handles both the base case (empty subtree) and the recursive case (non-empty subtree) to calculate the maximum depth. The algorithm returns the maximum depth of the given binary tree.

* [Go back](../readme.md)