---
title: Symmetric Tree
tags: ["training", "task"]
languages: ["typescript"]
---

# Symmetric Tree

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

function isSymmetric(root: TreeNode | null): boolean {
  return root == null || isMirror(root.left, root.right);
}

function isMirror(node1: TreeNode, node2: TreeNode): boolean {
  if (node1 === null && node2 === null) return true;
  if (node1 === null || node2 === null) return false;
  if (node1.val !== node2.val) return false;

  return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
}
```

**Description:**

1. **Input and Output**:

   - The `isSymmetric` function takes the root of a binary tree as input.
   - It returns `true` if the binary tree is symmetric (mirrored), otherwise `false`.

2. **Base Case and Recursion**:

   - The base case of the recursion is when `node1` and `node2` are both `null`, indicating that the nodes being compared are at the same positions in both subtrees.
   - The base case also covers scenarios where one of the nodes is `null` (asymmetric) or when their values don't match (asymmetric).

3. **Checking Mirror Symmetry**:

   - The `isSymmetric` function first checks if the given binary tree is `null`. If it is, it's considered symmetric.
   - The main recursion is done through the `isMirror` function, which takes two nodes as parameters.
   - It checks if the current nodes (`node1` and `node2`) are symmetric and then recursively checks their subtrees' mirror symmetry.

4. **Techniques used:**
   - Recursive approach to check mirror symmetry.
   - Handling base cases for `null` nodes and non-matching values.
   - Utilizing short-circuiting to optimize the code.

**Example:**

```typescript
// Example of creating a symmetric binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(3), new TreeNode(4));
root.right = new TreeNode(2, new TreeNode(4), new TreeNode(3));

const result = isSymmetric(root); // true
console.log(result); // Output: true
```

This code effectively checks if a given binary tree is symmetric by comparing the subtrees' mirror symmetry.
