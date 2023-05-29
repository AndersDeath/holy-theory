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

**Source: https://leetcode.com**
