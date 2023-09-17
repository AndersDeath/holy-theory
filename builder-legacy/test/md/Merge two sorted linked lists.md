# Merge two sorted linked lists

## Solution 1
```typescript
function mergeLists(head1, head2) {

  let newList = new SinglyLinkedList()
  
 while (head1 && head2) {
    if (head1.data < head2.data) {
      newList.insertNode(head1.data)
      head1 = head1.next
    } else {
      newList.insertNode(head2.data)
      head2 = head2.next
    }
  }

  newList.tail.next = (head1) ? head1 : head2
  return newList.head;
}

```
The given function `mergeLists` is intended to merge two sorted singly linked lists `head1` and `head2` into a single sorted linked list. Here's an explanation of how the function works:

1. Create a new instance of a singly linked list named `newList`.

2. Use a while loop to iterate while both `head1` and `head2` are not null. This loop compares the data of the current nodes of both lists.

3. If the data of the current node in `head1` is less than the data of the current node in `head2`, insert the data of the current node from `head1` into the `newList`, and then move `head1` to the next node.

4. If the data of the current node in `head2` is less than or equal to the data of the current node in `head1`, insert the data of the current node from `head2` into the `newList`, and then move `head2` to the next node.

5. After the loop finishes, if there are any remaining nodes in either `head1` or `head2`, attach the remaining nodes to the `newList`.

6. Return the `head` of the `newList`, which is the starting node of the merged sorted linked list.

**Techniques Used:**

1. **Linked List Manipulation:** The function iterates through the two input linked lists `head1` and `head2`, and constructs a new merged linked list.

2. **Comparison and Insertion:** The function compares the data of the nodes from `head1` and `head2`, and inserts the smaller data into the `newList`.

**Summary:**

The `mergeLists` function takes two sorted singly linked lists `head1` and `head2`, and it merges the nodes from both lists to create a single sorted linked list. The function achieves this by iteratively comparing node data and constructing the merged list using the `SinglyLinkedList` data structure.


## Solution 2

```typescript
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
    if(!list1) return list2;
    if(!list2) return list1;

    let head = null;
    let temp = head;

    if (list1.val < list2.val) {
        temp = head = new ListNode(list1.val);
        list1 = list1.next;
    } else {
        temp = head = new ListNode(list2.val);
        list2 = list2.next;
    }

    while (list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = new ListNode(list1.val);
            list1 = list1.next;
            temp = temp.next
        } else {
            temp.next = new ListNode(list2.val);
            list2 = list2.next;
            temp = temp.next
        }
    }
    while (list1) {
        temp.next = new ListNode(list1.val);
        list1 = list1.next;
        temp = temp.next;
    }
    while (list2) {
        temp.next = new ListNode(list2.val);
        list2 = list2.next;
        temp = temp.next;
    }
    return head;

};
```

The given function `mergeTwoLists` is intended to merge two sorted linked lists `list1` and `list2` into a single sorted linked list. Here's an explanation of how the function works:

1. First, it handles base cases. If either `list1` or `list2` is empty, it directly returns the other list as the merged result.

2. Next, it initializes variables `head` and `temp` to keep track of the merged list.

3. It compares the values of the first nodes of `list1` and `list2` and creates the head node of the merged list accordingly. The `temp` variable is updated to point to the head node.

4. Using a `while` loop, the function iterates through both `list1` and `list2` while comparing the values of their nodes.

5. Inside the loop, if the value of the current node in `list1` is less than the value of the current node in `list2`, a new node with the value of `list1` is created and attached to the `temp.next`. Then, `list1` and `temp` are moved to the next nodes.

6. If the value of the current node in `list2` is less than or equal to the value of the current node in `list1`, a new node with the value of `list2` is created and attached to the `temp.next`. Then, `list2` and `temp` are moved to the next nodes.

7. After merging both lists, if there are any remaining nodes in `list1`, they are appended to the merged list.

8. Similarly, if there are any remaining nodes in `list2`, they are also appended to the merged list.

9. Finally, the merged list is returned by returning the `head` node.

**Techniques Used:**

1. **Linked List Manipulation:** The function constructs the merged list by iterating through both input linked lists `list1` and `list2`.

2. **Comparison and Insertion:** The function compares the values of the nodes from `list1` and `list2` and inserts the smaller value into the merged list.

**Summary:**

The `mergeTwoLists` function takes two sorted linked lists `list1` and `list2`, and it merges the nodes from both lists to create a single sorted linked list. The function iterates through the nodes of both lists, comparing values and constructing the merged list using linked list manipulation.


