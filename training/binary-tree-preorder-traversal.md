---
title: Binary Tree Preorder Traversal
tags: ["training", "task", "tree"]
languages: ["typescript"]
---

# Binary Tree Preorder Traversal

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

function preorderTraversal(root: TreeNode | null): number[] {
  const output: any[] = [];
  preorder(root, output);
  return output;
}

function preorder(root: TreeNode | null, output: any[]) {
  if (root == null) return;

  output.push(root.val);
  preorder(root.left, output);
  preorder(root.right, output);
}
```

**Solution:**
Below are the step-by-step explanations of the code:

1. A binary tree node is defined using the `TreeNode` class, which has properties:

   - `val`: a number representing the value of the node.
   - `left`: a reference to the left child node.
   - `right`: a reference to the right child node.

2. The `preorderTraversal` function is defined, which takes one parameter:

   - `root`: a reference to the root node of the binary tree.

3. A variable `output` is initialized as an empty array. It will store the preorder traversal values.

4. The `preorder` function is called with the `root` and the `output` array.

5. The `preorder` function is defined, which takes two parameters:

   - `root`: a reference to the current node being processed.
   - `output`: a reference to the array storing the traversal values.

6. The first condition checks if the `root` is `null`. If it is, it means the current subtree is empty, so the function returns without any further processing.

7. The function pushes the value of the current node (`root.val`) to the `output` array using `output.push(root.val)`. This appends the value in the preorder traversal order.

8. The `preorder` function is recursively called with the left child node, which explores the left subtree.

9. Similarly, the `preorder` function is recursively called with the right child node, which explores the right subtree.

10. The recursive calls continue until all nodes are traversed in a preorder manner (current node, left subtree, right subtree).

11. Once all recursive calls are completed, the `output` array contains the preorder traversal values of the binary tree.

12. The `output` array is returned as the result.

**Techniques used:**

The following techniques are utilized within the code:

1. Defining a binary tree node using a class with properties.
2. Initializing variables and arrays to store values and references.
3. Recursive function calls to explore the tree.
4. Conditional branching using `if` statements.
5. Appending values to an array.
6. Returning a calculated result.

- [Go back](../readme.md)
