---
title: Merge two sorted linked lists
tags: ['training', 'task']
languages: ['typescript']
---
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

** Source: http://hackerrank.com**
* [Go back](../readme.md)
