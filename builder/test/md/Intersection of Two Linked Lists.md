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

The code is a TypeScript function that finds the intersection node of two singly-linked lists `headA` and `headB`. The intersection node is the node at which the two linked lists meet if they share a common portion.

Here's a step-by-step explanation of the code:

1. The function `getIntersectionNode` takes two parameters: `headA` and `headB`, which are the heads of the two linked lists.

2. Two pointers `pointer1` and `pointer2` are initialized to point to the heads of `headA` and `headB`, respectively.

3. A while loop is used to traverse the linked lists. The loop continues as long as `pointer1` is not equal to `pointer2`, which means they haven't met at the intersection node.

4. Inside the loop:
   - The `pointer1` is moved to the next node (`pointer1.next`), or if it has reached the end of list A (`pointer1` is `null`), it is moved to the head of list B (`headB`).
   - Similarly, the `pointer2` is moved to the next node (`pointer2.next`), or if it has reached the end of list B (`pointer2` is `null`), it is moved to the head of list A (`headA`).

5. The loop continues until `pointer1` and `pointer2` point to the same node, which is the intersection node.

6. Once the intersection node is found, the function returns `pointer1` (or `pointer2`, as they are both pointing to the intersection node).

7. If there is no intersection between the linked lists, both `pointer1` and `pointer2` will eventually become `null`, and the loop will exit.

Techniques used in this code include:
- Using two pointers (`pointer1` and `pointer2`) to traverse the linked lists simultaneously.
- Utilizing the property of linked lists to move one pointer to the head of the other list when it reaches the end, effectively accounting for the difference in lengths between the lists.
- Detecting the intersection point by checking if `pointer1` and `pointer2` are equal.
- Returning the intersection node once it is found.

Overall, this algorithm finds the intersection node of two linked lists with a time complexity of O(m + n), where m and n are the lengths of the two linked lists.


