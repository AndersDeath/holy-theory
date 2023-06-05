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


