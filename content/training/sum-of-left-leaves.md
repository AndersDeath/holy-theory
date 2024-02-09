---
title: Sum of Left Leaves
tags: ["training", "task"]
languages: ["typescript"]
---

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
    if (
      root.left !== null &&
      root.left.left === null &&
      root.left.right === null
    ) {
      result += root.left.val;
    }
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return result;
}
```

**Description:**

1. **Input and Output**:

   - The `sumOfLeftLeaves` function takes the root node of a binary tree and returns an integer, which is the sum of all left leaves' values.

2. **DFS Traversal**:

   - The code uses Depth-First Search (DFS) traversal to traverse the binary tree.
   - The traversal is implemented using a recursive function named `dfs`.

3. **Base Case**:

   - The base case of the recursion is when `root` is null. In that case, the function simply returns without doing anything.

4. **Checking for Left Leaves**:

   - For each node, the code checks if it has a left child (`root.left !== null`) and if that left child is a leaf node (`root.left.left === null` and `root.left.right === null`).
   - If both conditions are met, it means the left child is a left leaf. The value of the left leaf is added to the `result`.

5. **DFS Recursive Calls**:

   - The `dfs` function is recursively called on the left child and then on the right child of the current node.
   - This ensures that all nodes of the binary tree are visited.

6. **Return Result**:
   - After traversing the entire binary tree, the function returns the final `result`, which holds the sum of all left leaves' values.

**Techniques used:**

1. Depth-First Search (DFS) traversal of a binary tree.
2. Recursive function for tree traversal.
3. Condition checking for left leaves.

**Algorithm Complexity:**

- Time Complexity: O(n), where `n` is the number of nodes in the binary tree. Each node is visited exactly once.
- Space Complexity: O(h), where `h` is the height of the binary tree. The maximum space used by the recursive call stack is determined by the height of the tree.

This code efficiently calculates the sum of all left leaves' values in a binary tree.
