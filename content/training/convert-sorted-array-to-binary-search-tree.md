---
title: Convert Sorted Array to Binary Search Tree
tags: ['training', 'task', 'tree']
languages: ['typescript']
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

**Solution:**
Below is the step-by-step breakdown of the code:

1. The `sortedArrayToBST` function takes a sorted array `nums` as input and returns the root node of the constructed BST.

2. The function calls a helper function `helper` with the array `nums`, start index 0, and end index `nums.length - 1` as arguments.

3. The `helper` function is a recursive function that constructs a BST from a subarray of `nums`.

4. If the start index `start` is greater than the end index `end`, the `helper` function immediately returns `null` to indicate an empty subarray.

5. If the subarray is not empty, the `helper` function calculates the middle index `mid` as the truncation of the average of `start` and `end`.

6. A new `TreeNode` object is created with the value at the middle index `nums[mid]`.

7. Recursive calls to the `helper` function are made to construct the left subtree and right subtree of the current node:
   - The left subtree is constructed by calling `helper` with `start` and `mid - 1` as the new start and end indices.
   - The right subtree is constructed by calling `helper` with `mid + 1` and `end` as the new start and end indices.

8. The left and right subtrees are assigned to the `left` and `right` properties of the current node, respectively.

9. Finally, the constructed node is returned.

**Techniques used:**

The following techniques are utilized within the code:

1. Recursion: The `helper` function uses recursion to construct the BST. It recursively divides the input array into smaller subarrays to create balanced subtrees.

2. Divide and Conquer: The code follows a divide-and-conquer strategy by splitting the sorted array into halves and constructing balanced subtrees for each half.

3. Binary Search Tree (BST): The code constructs a BST by assigning values from the sorted array to the tree nodes. The left subtree contains smaller values, and the right subtree contains larger values.

The provided solution effectively constructs a height-balanced BST from a sorted array using recursive divide-and-conquer techniques.
