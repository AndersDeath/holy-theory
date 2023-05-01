---
title: Add Two Numbers
tags: ['training', 'task']
languages: ['typescript']
---
# Add Two Numbers

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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let head = null

    let temp = null;

    let carry = 0;

    while(l1 !== null || l2 !== null) {
        let sum = carry;
        if(l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null) {
             sum += l2.val;
            l2 = l2.next;
        }

        const node = new ListNode(Math.floor(sum) % 10);
        carry = Math.floor(sum / 10);
        if(temp === null) {
            temp = node;
            head = node;
        } else {
            temp.next = node;
            temp = temp.next;
        }
    }

    if(carry > 0) {
        temp.next = new ListNode(carry);
    }


    return head;

};
```
* [Go back](../readme.md)
