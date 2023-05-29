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

    while(node !== null || stack.length > 0) {
        while(node !== null) {
            stack.push(node);
            node = node.left
        }
        list.push(stack[stack.length -1].val);
        let el = stack.pop();
        node = el.right;
    }
    return list;
};
```
* [Go back](../readme.md)
