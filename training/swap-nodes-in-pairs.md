---
title: Swap Nodes in Pairs
tags: ['training', 'task']
languages: ['typescript']
---
# Swap Nodes in Pairs

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

function swapPairs(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);

    dummy.next = head;
    let current = dummy;
    while(current.next && current.next.next) {
        let first = current.next;
        let second = current.next.next;
        first.next = second.next;
        current.next = second;
        current.next.next = first;
        current = current.next.next;

    }

    return dummy.next;
};
```

* [Go back](../readme.md)