
# Find Mode in Binary Search Tree

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

class ModeCounter {
  maxCount: number;
  currentCount: number;
  currentVal: number;
  modes: number[];

  constructor() {
    this.maxCount = 0;
    this.currentCount = 0;
    this.currentVal = 0;
    this.modes = [];
  }

  update(val: number) {
    if (val === this.currentVal) {
      this.currentCount++;
    } else {
      this.currentVal = val;
      this.currentCount = 1;
    }

    if (this.currentCount > this.maxCount) {
      this.maxCount = this.currentCount;
      this.modes = [this.currentVal];
    } else if (this.currentCount === this.maxCount) {
      this.modes.push(this.currentVal);
    }
  }
}

function findMode(root: TreeNode | null): number[] {
  const counter = new ModeCounter();
  let current = root;
  let prev: TreeNode | null = null;

  while (current !== null) {
    if (current.left === null) {
      counter.update(current.val);
      current = current.right;
    } else {
      prev = current.left;

      while (prev.right !== null && prev.right !== current) {
        prev = prev.right;
      }

      if (prev.right === null) {
        prev.right = current;
        current = current.left;
      } else {
        prev.right = null;
        counter.update(current.val);
        current = current.right;
      }
    }
  }

  return counter.modes;
}
```

**Solution:**

The provided TypeScript code is used to find the mode(s) in a binary search tree. The binary search tree (BST) is defined using the `TreeNode` class, which has a value (`val`) and two children (`left` and `right`). The code implements an iterative approach to find the mode(s) in the BST.

**Class ModeCounter:**

- `maxCount`: Keeps track of the maximum frequency of a value seen so far.
- `currentCount`: Keeps track of the frequency of the current value being processed.
- `currentVal`: Keeps track of the current value being processed.
- `modes`: An array to store the mode(s) found so far.

**Method `update(val: number)`:**

This method is used to update the `ModeCounter` object when a new value `val` is encountered while traversing the BST.

- If the value `val` is equal to the current value (`currentVal`), increment the `currentCount`.
- If the value `val` is different from the current value (`currentVal`), update `currentVal` to `val` and set `currentCount` to 1.
- If the `currentCount` becomes greater than `maxCount`, update `maxCount` to `currentCount`, and reset the `modes` array with the current value `val`.
- If the `currentCount` is equal to `maxCount`, add the current value `val` to the `modes` array since it is another mode.

**Function `findMode(root: TreeNode | null): number[]`:**

This function takes the root of the binary search tree (`root`) and returns an array containing the mode(s) of the BST.

- Create a `ModeCounter` object named `counter` to keep track of the modes and their frequencies.
- Initialize `current` to `root` and `prev` to `null`.
- Use a while loop to traverse the tree using Morris Inorder Traversal:
  - If `current` does not have a left child, update the `counter` with the value of `current`, and move to its right child.
  - If `current` has a left child, find its inorder predecessor (rightmost node in the left subtree) named `prev`:
    - If `prev.right` is `null`, set `prev.right` to `current`, and move to the left child of `current`.
    - If `prev.right` is `current`, it means we have visited the left subtree, so set `prev.right` to `null`, update the `counter` with the value of `current`, and move to its right child.
- Return the `modes` array from the `counter`, which contains the mode(s) of the BST.

**Summary:**

The given code implements an iterative Morris Inorder Traversal approach to find the mode(s) in a binary search tree. It uses the `ModeCounter` class to keep track of the modes and their frequencies during the traversal.

**Techniques used:**

1. Binary Search Tree (BST): The code works with a binary search tree data structure, where each node's left child is less than the node, and each node's right child is greater than the node.

2. Morris Inorder Traversal: This approach allows for traversing the BST without using recursion or an explicit stack, reducing space complexity to O(1). It helps find the mode(s) efficiently while maintaining the order of traversal.


- [Go back](../readme.md)
