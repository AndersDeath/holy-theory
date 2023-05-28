# Minimum Depth of Binary Tree
---
# Minimum Depth of Binary Tree

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

function minDepth(root: TreeNode | null): number {
        let depth = 1;
        
        if(root == null) return 0;
        let que = []
        que.push(root);
        while(que.length > 0){
            let size = que.length;
            while(size>0){
                let node =que.shift();

                if(node.left == null && node.right == null) return depth;
                
                if(node.left != null) que.push(node.left);
                
                if(node.right != null) que.push(node.right);
                size--;
            }
            depth++;
        }
        return depth;
};
```
* [Go back](../readme.md)

