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

The `isPalindrome` function determines whether a given singly-linked list is a palindrome or not.

Here's how the function works:

1. It defines an inner recursive function `isP` that takes a single argument `rHead`, which represents the current node being checked in the reverse order.

2. If `rHead` is `null`, it means we have reached the end of the reversed list, so it returns `true` since there is nothing more to compare.

3. Inside the `isP` function, it recursively calls itself with the next node in reverse order (`rHead.next`).

4. After the recursive call, it compares the value of the current node `rHead.val` with the value of the corresponding node in the original list `head.val`. If they are not equal, it means the linked list is not a palindrome, and it returns `false`.

5. If the values are equal, it updates the `head` pointer to the next node in the original list (`head.next`) to continue the comparison.

6. The `next` and `valid` values are combined using the logical AND (`&&`) operator. This ensures that both the recursive call (`next`) and the current value comparison (`valid`) are true for the entire linked list to be considered a palindrome.

7. The inner recursive function `isP` returns `true` or `false` based on the palindrome check for the given node.

8. The outer function `isPalindrome` returns the result of the inner recursive function `isP(head)`, which checks if the entire linked list is a palindrome.

**Techniques Used:**

- **Recursion:** The function uses recursion to traverse and compare the linked list in reverse order.

- **Pointer Manipulation:** The function uses pointers (`rHead` and `head`) to traverse and compare nodes in the reversed and original linked lists.

- **Logical Operators:** The function uses logical AND (`&&`) operator to combine the results of the recursive call and the value comparison.

**Summary:**

The `isPalindrome` function uses recursion and pointer manipulation to determine whether a given singly-linked list is a palindrome. It compares the values of nodes in the reversed and original order and returns `true` if the entire list is a palindrome and `false` otherwise.


