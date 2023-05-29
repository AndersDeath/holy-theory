# Intersection of Two Linked Lists

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let pointer1 = headA;
    let pointer2 = headB;

    while(pointer1 !== pointer2) {
        pointer1 = pointer1 === null ? headB: pointer1.next;
        pointer2 = pointer2 === null ? headA: pointer2.next;
        
    }
    return pointer1;
};

```
