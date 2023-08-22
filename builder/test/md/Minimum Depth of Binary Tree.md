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

The given function `minDepth` aims to find the minimum depth of a binary tree, where the depth is defined as the number of nodes along the shortest path from the root node to any leaf node. Here's a step-by-step explanation of how the function works:

1. The function initializes `depth` with 1, which will be used to track the current depth level of the traversal.

2. The function starts by checking if the `root` node is `null`. If it is, it means the tree is empty, so the function returns 0.

3. Otherwise, the function initializes a queue `que` to perform a level-order traversal (Breadth-First Search) of the binary tree. It pushes the `root` node into the queue.

4. The function enters a loop that continues until the queue is empty. This loop represents the level-order traversal of the tree.

5. Inside the loop, the function retrieves the current size of the queue using `que.length`. This indicates the number of nodes at the current level.

6. The function enters another loop that processes each node at the current level. For each node, it performs the following steps:
   - Dequeues (removes) the front node from the queue.
   - Checks if the current node is a leaf node (both left and right children are `null`). If it is, the function returns the current `depth`, as this represents the minimum depth to a leaf node.
   - If the current node has a left child, it enqueues the left child into the queue.
   - If the current node has a right child, it enqueues the right child into the queue.

7. After processing all nodes at the current level, the function increments the `depth` by 1 to move to the next level.

8. The loop continues until all levels of the tree have been traversed.

9. Finally, the function returns the `depth`, which represents the minimum depth of the binary tree.

**Techniques Used:**

1. **Breadth-First Search (BFS):** The function utilizes BFS to traverse the binary tree level by level. This is important for finding the minimum depth, as BFS ensures that the shortest path to a leaf node is explored first.

2. **Queue Data Structure:** The function uses a queue to keep track of nodes at each level during BFS. This allows for efficient processing of nodes level by level.

**Summary:**

The `minDepth` function employs BFS to traverse the binary tree level by level and calculates the minimum depth by finding the shortest path to a leaf node. It efficiently utilizes a queue data structure to keep track of nodes at each level and returns the minimum depth of the tree.




