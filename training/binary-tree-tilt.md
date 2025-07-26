---
title: Binary Tree Tilt
tags: ["training", "task", "tree"]
languages: ["typescript"]
---

# Binary Tree Tilt

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

function findTilt(root: TreeNode | null): number {
  let tilt = 0;

  function calculateTiltAndSum(node: TreeNode | null): number {
    if (node === null) {
      return 0;
    }

    const leftSum = calculateTiltAndSum(node.left);
    const rightSum = calculateTiltAndSum(node.right);

    tilt += Math.abs(leftSum - rightSum);

    return node.val + leftSum + rightSum;
  }

  calculateTiltAndSum(root);

  return tilt;
}
```

**Solution:**
Below are the step-by-step explanations of the code:

1. A binary tree node is defined using the `TreeNode` class, which has properties:

   - `val`: a number representing the value of the node.
   - `left`: a reference to the left child node.
   - `right`: a reference to the right child node.

2. The `findTilt` function is defined, which takes one parameter:

   - `root`: a reference to the root node of the binary tree.

3. A variable `tilt` is initialized to 0. It will store the total tilt of the binary tree.

4. The `calculateTiltAndSum` function is defined inside the `findTilt` function. It takes one parameter:

   - `node`: a reference to the current node being processed.

5. The `calculateTiltAndSum` function calculates the sum of the node's value, left subtree values, and right subtree values recursively. It also updates the `tilt` variable by adding the absolute difference between the sum of left subtree values and right subtree values.

6. The first condition checks if the `node` is `null`. If it is, it means the current subtree is empty, so the function returns 0.

7. The function recursively calls `calculateTiltAndSum` with the left child node and assigns the returned value to the variable `leftSum`.

8. Similarly, the function recursively calls `calculateTiltAndSum` with the right child node and assigns the returned value to the variable `rightSum`.

9. The absolute difference between `leftSum` and `rightSum` is calculated using `Math.abs(leftSum - rightSum)`, and the result is added to the `tilt` variable.

10. The sum of the current node's value, `leftSum`, and `rightSum` is calculated and returned (`node.val + leftSum + rightSum`).

11. The `calculateTiltAndSum` function is initially called with the `root` node.

12. The `tilt` value now contains the total tilt of the binary tree.

13. The `tilt` value is returned as the result.

**Techniques used:**

The following techniques are utilized within the code:

1. Defining a binary tree node using a class with properties.
2. Initializing variables to store values.
3. Recursive function calls to explore the tree.
4. Conditional branching using `if` statements.
5. Calculating absolute differences using `Math.abs`.
6. Updating variables with calculated values.
7. Returning a calculated result.

- [Go back](../readme.md)
