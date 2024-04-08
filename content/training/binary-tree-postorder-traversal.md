---
title: Binary Tree Postorder Traversal
tags: ["training", "task", "tree"]
languages: ["typescript"]
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
}

const helper = function (root, res) {
  if (!root) return;
  helper(root.left, res);
  helper(root.right, res);
  res.push(root.val);
};
```

**Solution:**
Below are the step-by-step explanations of the code:

1. A binary tree node is defined using the `TreeNode` class, which has properties:

   - `val`: a number representing the value of the node.
   - `left`: a reference to the left child node.
   - `right`: a reference to the right child node.

2. The `postorderTraversal` function is defined, which takes one parameter:

   - `root`: a reference to the root node of the binary tree.

3. A variable `res` is initialized as an empty array. It will store the postorder traversal values.

4. The `helper` function is called with the `root` and the `res` array.

5. The `helper` function is defined, which takes two parameters:

   - `root`: a reference to the current node being processed.
   - `res`: a reference to the array storing the traversal values.

6. The first condition checks if the `root` is `null`. If it is, it means the current subtree is empty, so the function returns without any further processing.

7. The `helper` function is recursively called with the left child node, which explores the left subtree.

8. Similarly, the `helper` function is recursively called with the right child node, which explores the right subtree.

9. The recursive calls continue until all nodes are traversed in a postorder manner (left subtree, right subtree, current node).

10. After the recursive calls, the function pushes the value of the current node (`root.val`) to the `res` array using `res.push(root.val)`. This appends the value in the postorder traversal order.

11. Once all recursive calls are completed, the `res` array contains the postorder traversal values of the binary tree.

12. The `res` array is returned as the result.

**Techniques used:**

The following techniques are utilized within the code:

1. Defining a binary tree node using a class with properties.
2. Initializing variables and arrays to store values and references.
3. Recursive function calls to explore the tree.
4. Conditional branching using `if` statements.
5. Appending values to an array.
6. Returning a calculated result.

- [Go back](../readme.md)
