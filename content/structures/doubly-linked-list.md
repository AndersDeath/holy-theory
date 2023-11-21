---
title: Doubly Linked Lists
tags: ["theory", "structures", "data structures"]
languages: ["typescript"]
---

# Doubly Linked Lists

```typescript
class Node<T> {
  data: T;
  prev: Node<T> | null;
  next: Node<T> | null;

  constructor(data: T, prev: Node<T> | null) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }
}

class DoublyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data: T): void {
    if (!this.head) {
      this.head = new Node(data, null);
      this.tail = this.head;
    } else {
      const newNode = new Node(data, this.tail);
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(data: T): void {
    if (!this.head) {
      this.head = new Node(data, null);
      this.tail = this.head;
    } else {
      const newNode = new Node(data, null);
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }
  }

  delete(data: T): void {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        return;
      }

      current = current.next!;
    }
  }

  display(): void {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next!;
    }
  }

  reverse(): void {
    let current = this.head;
    let temp: Node<T> | null = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev!;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp!;
  }
}

```

# Doubly Linked Lists

A linked list is a fundamental data structure that consists of a sequence of elements, each connected to the next by pointers or references. Among the variations of linked lists, the doubly linked list stands out for its bidirectional navigation, providing easy traversal in both forward and backward directions. Let's explore the concept of a doubly linked list using a TypeScript implementation.

## Anatomy of a Doubly Linked List

The TypeScript code provided defines two classes: `Node` and `DoublyLinkedList`.

### Node Class

The `Node` class represents an individual element in the doubly linked list. It contains three properties:

- `data`: Holds the actual data of the node.
- `prev`: Points to the previous node in the sequence.
- `next`: Points to the next node in the sequence.

### DoublyLinkedList Class

The `DoublyLinkedList` class is the container for the nodes. It contains two pointers:

- `head`: Points to the first node in the list.
- `tail`: Points to the last node in the list.

Additionally, the class has methods for common operations:

- `append(data: T)`: Adds a new node with the given data to the end of the list.
- `prepend(data: T)`: Inserts a new node with the given data at the beginning of the list.
- `delete(data: T)`: Removes the node containing the specified data from the list.
- `display()`: Displays the elements of the linked list.
- `reverse()`: Reverses the order of the linked list.

## Example Usage

The code concludes with an example demonstrating the usage of the doubly linked list:

```typescript
const doublyLinkedList = new DoublyLinkedList<number>();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.prepend(0);
doublyLinkedList.display(); // Output: 0 1 2
doublyLinkedList.reverse();
doublyLinkedList.display(); // Output: 2 1 0
```

This example initializes a doubly linked list, appends and prepends nodes, displays the list, performs a reversal, and then displays the reversed list.

## Advantages of Doubly Linked Lists

Doubly linked lists offer advantages in certain scenarios. The bidirectional navigation allows for efficient traversal in both directions, facilitating operations that involve searching, insertion, or deletion near a specific element.

Understanding and implementing doubly linked lists in TypeScript provides valuable insights into data structures and algorithms. The versatility of linked lists makes them powerful tools for various applications, from low-level memory management to high-level algorithmic problem-solving.