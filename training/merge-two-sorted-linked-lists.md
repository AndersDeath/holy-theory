# Merge two sorted linked lists
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
,,,

** Source: http://hackerrank.com**
* [Go back](../readme.md)
