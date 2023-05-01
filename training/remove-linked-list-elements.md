---
title: Remove Linked List Elements
tags: ['training', 'task']
languages: ['typescript']
---
# Remove Linked List Elements

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

function removeElements(head: ListNode | null, val: number): ListNode | null {
        while (head != null && head.val == val) {
            head = head.next;
        }

        if (head == null) {
            return null;
        }

        let temp = head;

        while (temp.next != null) {
            const nextNode = temp.next;
            if (nextNode.val == val) {
                temp.next = nextNode.next;
            } else {
                temp = temp.next;
            }
        }
        return head;
};
```
* [Go back](../readme.md)
