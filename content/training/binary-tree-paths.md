---
title: Binary Tree Paths
tags: ["training", "task", "tree"]
languages: ["typescript"]
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
}

function helper(root: TreeNode, path: string, responce: string[]) {
  if (root == null) {
    return;
  }

  if (root.left == null && root.right == null) {
    responce.push(path + root.val);
    return;
  }

  helper(root.left, path + root.val + "->", responce);
  helper(root.right, path + root.val + "->", responce);
}
```

**Solution:**
Below are the step-by-step explanations of the code:

1. A binary tree node is defined using the `TreeNode` class, which has properties:

   - `val`: a number representing the value of the node.
   - `left`: a reference to the left child node.
   - `right`: a reference to the right child node.

2. The `binaryTreePaths` function is defined, which takes one parameter:

   - `root`: a reference to the root node of the binary tree.

3. A variable `response` is initialized as an empty array of strings. It will store the paths from the root to the leaf nodes.

4. The `helper` function is called with the `root`, an empty string `""`, and the `response` array.

5. The `helper` function is defined, which takes three parameters:

   - `root`: a reference to the current node being processed.
   - `path`: a string representing the current path from the root to the current node.
   - `response`: a reference to the array storing the paths.

6. The first condition checks if the `root` is `null`. If it is, it means the current subtree is empty, so the function returns without any further processing.

7. The second condition checks if the `root` is a leaf node, i.e., it has no left or right child. If it is a leaf node, the current path (`path + root.val`) is appended to the `response` array using `response.push(path + root.val)`.

8. If neither of the above conditions is true, it means the current node is not a leaf node. The `helper` function is recursively called with the left child node, updating the `path` by appending the current node's value and a "->" separator. This explores the left subtree.

9. Similarly, the `helper` function is recursively called with the right child node, updating the `path` in the same way. This explores the right subtree.

10. The recursive calls continue until all paths from the root to the leaf nodes are traversed.

11. Once all recursive calls are completed, the `response` array contains all the paths from the root to the leaf nodes.

12. The `response` array is returned as the result.

**Techniques used:**

The following techniques are utilized within the code:

1. Defining a binary tree node using a class with properties.
2. Initializing variables and arrays to store values and references.
3. Recursive function calls to explore the tree.
4. Conditional branching using `if` statements.
5. Appending strings and values to an array.
6. Returning a calculated result.

- [Go back](../readme.md)
