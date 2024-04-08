---
title: Add Two Numbers
tags: ["training", "task"]
languages: ["typescript"]
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head = null;

  let temp = null;

  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let sum = carry;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    const node = new ListNode(Math.floor(sum) % 10);
    carry = Math.floor(sum / 10);
    if (temp === null) {
      temp = node;
      head = node;
    } else {
      temp.next = node;
      temp = temp.next;
    }
  }

  if (carry > 0) {
    temp.next = new ListNode(carry);
  }

  return head;
}
```

**Solution:**
Below are the step-by-step explanations of the code:

1. The code begins with the definition of the `ListNode` class, representing a node in the singly-linked list. It has a `val` property to store the node value and a `next` property to reference the next node in the list.

2. The `addTwoNumbers` function is defined, taking two parameters: `l1` (a ListNode representing the first linked list) and `l2` (a ListNode representing the second linked list). It returns a ListNode representing the sum of the two linked lists.

3. Several variables are initialized:

   - `head` is initially set to `null` and will be used to keep track of the head node of the resulting linked list.
   - `temp` is initially set to `null` and will be used to traverse the linked list and add new nodes.
   - `carry` is initially set to 0 and will hold the carry value during addition.

4. A `while` loop is used to iterate as long as either `l1` or `l2` is not `null`.

5. Inside the `while` loop, the variable `sum` is initialized with the current carry value.

6. Conditional statements are used to handle cases where either `l1` or `l2` is not `null`. If `l1` is not `null`, the value of `l1` is added to `sum`, and `l1` is moved to the next node. Similarly, if `l2` is not `null`, the value of `l2` is added to `sum`, and `l2` is moved to the next node.

7. A new `ListNode` is created with the value of `Math.floor(sum) % 10` (to handle carry) and assigned to the `node` variable.

8. The carry value is updated by calculating `Math.floor(sum / 10)`.

9. Depending on whether `temp` is `null` or not, the `node` is either assigned to `temp` and `head` (in the case of the first node), or it is assigned to `temp.next` (for subsequent nodes), and `temp` is moved to the next node.

10. After the `while` loop ends, if there is a remaining carry (i.e., `carry > 0`), a new `ListNode` with the carry value is appended to the linked list by assigning it to `temp.next`.

11. Finally, the `head` node of the resulting linked list is returned.

**Techniques used:**

The following techniques are utilized within the code:

1. Definition and usage of a `ListNode` class for representing a node in a singly-linked list.
2. Iterating over linked lists using a `while` loop.
3. Accessing properties (`val` and `next`) of a linked list node.
4. Performing arithmetic operations (addition, modulo, division) on numbers.
5. Handling carry values during addition.
6. Creating new linked list nodes using the `ListNode` constructor.
7. Updating references between linked list nodes to form the resulting linked list.

- [Go back](../readme.md)
