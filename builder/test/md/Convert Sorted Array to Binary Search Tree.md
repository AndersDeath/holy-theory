# Convert Sorted Array to Binary Search Tree
---
# Convert Sorted Array to Binary Search Tree

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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return helper(nums, 0, nums.length - 1);
};


function helper(nums: number[], start:number, end: number) {
    if(start > end) return null;
    let mid = Math.trunc((start + end) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = helper(nums, start, mid -1);
    node.right = helper(nums, mid + 1, end);
    return node
}

```