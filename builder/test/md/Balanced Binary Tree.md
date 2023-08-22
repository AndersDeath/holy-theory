# Balanced Binary Tree

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

function isBalanced(root: TreeNode | null): boolean {
    if(root === null) return true;
    if(height(root) === -1) return false;
    return true;
};

function height(node: TreeNode): number {
    if(node == null) return 0;

    const left = height(node.left)
    const right = height(node.right);

    if(left === -1 || right === -1) return -1;
    if(Math.abs(left - right) > 1) return -1;

    return Math.max(left, right) + 1;
}
```

**Solution:**
Below are the step-by-step explanations of the code:

1. A binary tree node is defined using the `TreeNode` class, which has properties:
   - `val`: a number representing the value of the node.
   - `left`: a reference to the left child node.
   - `right`: a reference to the right child node.

2. The `isBalanced` function is defined, which takes one parameter:
   - `root`: a reference to the root node of the binary tree.

3. In the `isBalanced` function, the first condition checks if the `root` is `null`. If it is `null`, it means the tree is empty, and an empty tree is considered balanced. In that case, the function returns `true`.

4. The second condition calls the `height` function to calculate the height of the `root` node. If the height is `-1`, it indicates that the subtree rooted at `root` is not balanced, so the function returns `false`.

5. If both conditions are passed, it means the tree is balanced, and the function returns `true`.

6. The `height` function is defined, which takes one parameter:
   - `node`: a reference to the current node being processed.

7. Inside the `height` function, the first condition checks if the `node` is `null`. If it is `null`, it means the current subtree has no nodes, so the height is 0. In that case, the function returns 0.

8. The `height` function recursively calls itself to calculate the height of the left subtree and assigns the result to the variable `left`.

9. Similarly, the function recursively calls itself to calculate the height of the right subtree and assigns the result to the variable `right`.

10. The next condition checks if either `left` or `right` is `-1`. If any of them is `-1`, it means the respective subtree is not balanced, so the function returns `-1`.

11. The next condition checks if the absolute difference between `left` and `right` is greater than 1. If it is, it means the current node's subtree is not balanced, so the function returns `-1`.

12. If none of the above conditions are met, it means the current node's subtree is balanced. The function returns the maximum of `left` and `right` (the height of the taller subtree) plus 1, representing the height of the current node's subtree.

**Techniques used:**

The following techniques are utilized within the code:

1. Defining a binary tree node using a class with properties.
2. Recursive function calls to calculate heights and check subtree balance.
3. Conditional branching using `if` statements.
4. Returning results based on conditions.
5. Performing mathematical calculations using `Math.abs` and `Math.max`.



