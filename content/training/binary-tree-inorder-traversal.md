---
title: Binary Tree Inorder Traversal
tags: ["training", "task", "tree"]
languages: ["typescript"]
---

# Binary Tree Inorder Traversal

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

function inorderTraversal(root: TreeNode | null): number[] {
  const list = [];
  const stack = [];
  let node = root;

  while (node !== null || stack.length > 0) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }
    list.push(stack[stack.length - 1].val);
    let el = stack.pop();
    node = el.right;
  }
  return list;
}
```

**Solution:**
Below are the step-by-step explanations of the code:

1. A binary tree node is defined using the `TreeNode` class, which has properties:

   - `val`: a number representing the value of the node.
   - `left`: a reference to the left child node.
   - `right`: a reference to the right child node.

2. The `inorderTraversal` function is defined, which takes one parameter:

   - `root`: a reference to the root node of the binary tree.

3. A variable `list` is initialized as an empty array. It will store the inorder traversal values.

4. A stack, `stack`, is initialized as an empty array. It will be used to keep track of the nodes during traversal.

5. A variable `node` is initialized with the value of the `root` node.

6. The outer `while` loop runs as long as `node` is not `null` or the `stack` is not empty.

7. Inside the outer loop, an inner `while` loop is used to traverse to the leftmost node of the current subtree. It keeps pushing the nodes onto the `stack` until reaching a `null` left child.

8. After the inner loop, the value of the rightmost node in the current subtree is retrieved from the `stack` and added to the `list` using `list.push(stack[stack.length - 1].val)`.

9. The rightmost node is popped from the `stack` and stored in a temporary variable `el`.

10. The `node` is updated to the right child of the popped node (`node = el.right`), which will be processed in the next iteration of the outer loop.

11. The outer loop continues until all nodes are processed.

12. Once the loop exits, the `list` array contains the inorder traversal values of the binary tree.

13. The `list` array is returned as the result.

**Techniques used:**

The following techniques are utilized within the code:

1. Defining a binary tree node using a class with properties.
2. Initializing variables and arrays to store values and references.
3. Iterating using `while` loops.
4. Traversing a binary tree in inorder fashion using a stack.
5. Pushing and popping elements from a stack.
6. Accessing properties and values of nodes.
7. Returning a calculated result.

- [Go back](../readme.md)
