
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
  while (current.next && current.next.next) {
    let first = current.next;
    let second = current.next.next;
    first.next = second.next;
    current.next = second;
    current.next.next = first;
    current = current.next.next;
  }

  return dummy.next;
}
```

**Description:**

1. **Input and Output**:

   - The `swapPairs` function takes the head of a singly-linked list as input and returns the head of the modified list after swapping adjacent nodes.

2. **Dummy Node**:

   - The code starts by creating a dummy node (`dummy`) and setting its `next` pointer to the input `head`.

3. **Swapping Pairs**:

   - The `while` loop iterates through the list while there are at least two nodes available for swapping (`current.next` and `current.next.next`).
   - Inside the loop, it creates references to the first (`first`) and second (`second`) nodes of the pair.
   - It then updates the `next` pointers to perform the swap:
     - `first.next` points to the node after `second`.
     - `current.next` points to `second`.
     - `second.next` points to `first`.
   - Finally, it moves `current` two steps ahead to the next pair's position.

4. **Returning Modified List**:
   - After processing all pairs, the function returns the modified list's head, which is `dummy.next`.

**Techniques used:**

1. Linked list manipulation.
2. Using a dummy node.
3. Iterative traversal with pointer manipulation.

**Algorithm Complexity:**

- Time Complexity: O(n), where `n` is the number of nodes in the linked list. Each node is processed and swapped once.
- Space Complexity: O(1), as only a constant amount of extra space is used, regardless of the size of the input linked list.

This code efficiently swaps adjacent nodes in a singly-linked list using a constant amount of extra space.

- [Go back](../readme.md)
