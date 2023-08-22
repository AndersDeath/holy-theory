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

The code is a JavaScript function that determines whether a singly-linked list has a cycle (a loop) or not. It uses the "tortoise and hare" approach, also known as Floyd's Cycle Detection Algorithm, to detect cycles in a linked list.

Here's a step-by-step explanation of the code:

1. The `hasCycle` function takes a single parameter `head`, which represents the head of the linked list.

2. It initializes two pointers: `slowNode` and `fastNode`, both pointing to the `head` of the linked list.

3. It enters a `while` loop that continues as long as `fastNode` is not `null` and `fastNode.next` is not `null`. This condition ensures that the fast pointer can make a valid move without encountering a null reference.

4. Inside the loop:
   - The `fastNode` pointer moves two steps ahead by accessing its `.next.next` reference. This simulates the "hare" moving faster in the linked list.
   - The `slowNode` pointer moves one step ahead by accessing its `.next` reference. This simulates the "tortoise" moving slower in the linked list.

5. After each iteration of the loop, the code checks whether the `fastNode` and `slowNode` pointers are pointing to the same node. If they are, it means a cycle has been detected, and the function returns `true`.

6. If the loop completes without finding a cycle, the function returns `false`.

The technique used in this code is the "tortoise and hare" algorithm for cycle detection in linked lists. This algorithm is based on the idea that if there is a cycle in the linked list, the fast and slow pointers will eventually meet at some point within the cycle. If there is no cycle, the fast pointer will reach the end of the list without encountering a null reference.

Overall, this algorithm has a time complexity of O(n), where n is the number of nodes in the linked list, and a space complexity of O(1), as it only uses a constant amount of extra space for the two pointers.


