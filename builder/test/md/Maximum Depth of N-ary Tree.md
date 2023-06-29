# Maximum Depth of N-ary Tree

```typescript
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node | null): number {
   if (root === null) {
    return 0;
  }
  
  let maxChildDepth = 0;
  
  for (let child of root.children) {
    const childDepth = maxDepth(child);
    maxChildDepth = Math.max(maxChildDepth, childDepth);
  }
  
  return maxChildDepth + 1;  
};
```
**Source: https://leetcode.com**
