---
title: Diameter of Binary Tree
tags: ["training", "task"]
languages: ["typescript"]
---

# Diameter of Binary Tree

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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  function depth(node: TreeNode | null): number {
    if (node === null) {
      return 0;
    }

    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);

    diameter = Math.max(diameter, leftDepth + rightDepth);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  depth(root);

  return diameter;
}
```

**Solution:**

Step-by-step breakdown of the code:

1. The function `diameterOfBinaryTree` takes a `root` node of the binary tree as input and returns the diameter of the tree.

2. The function initializes a variable `diameter` to 0. This variable will store the maximum diameter found during the depth traversal of the tree.

3. The function defines an inner helper function `depth` which calculates the depth of a given node in the binary tree.

4. The `depth` function takes a `node` as input and returns the depth (height) of the node.

5. If the `node` is `null`, indicating an empty subtree, the function returns 0.

6. The `depth` function recursively calculates the depth of the left and right subtrees of the current node using the `depth` function.

7. The `leftDepth` and `rightDepth` variables store the depths of the left and right subtrees, respectively.

8. The variable `diameter` is updated by comparing its current value with the sum of `leftDepth` and `rightDepth`. This step finds the maximum diameter among all nodes of the binary tree.

9. The function returns the maximum depth of the current node by adding 1 to the maximum of `leftDepth` and `rightDepth`. This represents the depth of the current subtree rooted at the current node.

10. The function `depth(root)` is called to start the recursive depth traversal from the root of the binary tree.

11. The function returns the calculated `diameter`, which represents the diameter of the binary tree.

Techniques used:

1. Function Declaration: The code defines the function `diameterOfBinaryTree` to calculate the diameter of the binary tree.

2. Helper Function: The code defines an inner helper function `depth` to calculate the depth (height) of a node in the binary tree.

3. Recursive Approach: The code uses a recursive approach to calculate the depth of the binary tree nodes and to find the maximum diameter.

4. Tree Traversal: The code traverses the binary tree to calculate the depth of each node and update the maximum diameter.

Summary:

The provided TypeScript code calculates the diameter of a binary tree by finding the maximum depth of each node and updating the maximum diameter accordingly. The function returns the calculated diameter value.

- [Go back](../readme.md)
