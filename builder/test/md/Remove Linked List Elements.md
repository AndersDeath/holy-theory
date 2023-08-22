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

1. **Input Linked List Modification**: The function `removeElements` takes a singly-linked list `head` and an integer `val` as input. It aims to remove all nodes with the specified value `val` from the linked list.

2. **Initial Value Check**: In the beginning, a `while` loop is used to repeatedly check if the current `head` node is not `null` and if its `val` is equal to the given value `val`. If so, the current `head` node is moved to the next node (`head = head.next`) to remove nodes with the specified value from the beginning of the linked list.

3. **Empty List Check**: After the initial removal of nodes with the specified value from the beginning, a check is performed to see if the `head` node has become `null` (i.e., the list is empty). If so, `null` is returned, indicating an empty list.

4. **Traversal and Removal**: A temporary node `temp` is initialized to the `head` of the linked list. A `while` loop is used to traverse the linked list until the end. For each node, the following checks are performed:
   - If the value of the next node (`nextNode.val`) is equal to the specified value `val`, the `next` pointer of the current node (`temp`) is updated to skip the next node (i.e., `temp.next = nextNode.next`), effectively removing the node with the specified value from the list.
   - If the value of the next node is not equal to the specified value, the `temp` pointer is moved to the next node.

5. **Returning Modified List**: After completing the traversal and removal process, the modified linked list is returned, starting from the `head` node.

**Techniques Used**:

1. Looping (`while` loop): Iterating through a linked list and checking conditions.
2. Linked List Traversal and Modification: Iterating through a linked list and modifying its nodes by updating pointers.
3. Conditional Checks (`head != null`, `head.val == val`, `nextNode.val == val`): Checking conditions involving linked list nodes and values.
4. Returning Modified Linked List: Returning the modified linked list after removal of nodes with the specified value.

This function removes all nodes with a specified value from a given singly-linked list and returns the modified linked list.


