# Linked List Cycle
---
# Linked List Cycle

```typescript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    let slowNode = head;
    let fastNode = head;

    while(fastNode !== null && fastNode.next !== null) {
        fastNode = fastNode.next.next;
        slowNode = slowNode.next;

        if(fastNode === slowNode) {
            return true
        }
    }
    
    return false;
};
```

* [Go back](../readme.md)
