---
title: Palindrome linked list
tags: ['training', 'task']
languages: ['typescript']
---
# Palindrome linked list

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

function isPalindrome(head: ListNode | null): boolean {
    const isP = (rHead) => {
        if (rHead == null) {
            return true;
        }

        const next = isP(rHead.next);

        const valid = rHead.val === head.val;

        head = head.next;
        return next && valid;
    }
    return isP(head);
};

```

* [Go back](../readme.md)
