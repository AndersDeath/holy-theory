---
title: Same tree
tags: ['training', 'task']
languages: ['typescript']
---
# Same tree

```typescript
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(p === null && q === null) return true;

    if (p === null || q === null || p.val !== q.val){
        return false;
     }
    
    return isSameTree(p.left,q.left) && isSameTree(p.right, q.right);
};
```

**Description:**
1. **Base Case Check**:
   - The function takes two binary tree nodes `p` and `q` as inputs.
   - The first base case checks if both `p` and `q` are `null`, which indicates that the corresponding subtrees are identical. In this case, the function returns `true`.

2. **Comparison and Recursion**:
   - If both `p` and `q` are not `null` and their values are not equal, it means that the subtrees are not identical, and the function returns `false`.
   - If the values are equal, the function proceeds to check whether the left and right subtrees of `p` and `q` are identical by making recursive calls to `isSameTree`.

3. **Recursive Call**:
   - The function recursively calls itself for the left and right subtrees of `p` and `q`.
   - The function checks if the left subtrees of both trees are the same (`isSameTree(p.left, q.left)`) and if the right subtrees of both trees are the same (`isSameTree(p.right, q.right)`).

4. **Return Result**:
   - The final result is the logical AND (`&&`) of the comparisons for both left and right subtrees. This means that for both subtrees to be the same, both left and right subtrees must be the same.

**Techniques used:**
1. Recursive traversal of binary trees.
2. Comparison of tree nodes and their values.

**Algorithm Complexity:**
- Time Complexity: O(N), where N is the total number of nodes in the smaller of the two trees. Each node is visited exactly once.
- Space Complexity: O(H), where H is the height of the smaller of the two trees. The space is used for the recursive call stack.

This code checks if two binary trees `p` and `q` are the same by comparing their structures and values through recursive traversal. If the trees have identical structures and node values, the function returns `true`, otherwise, it returns `false`.


* [Go back](../readme.md)