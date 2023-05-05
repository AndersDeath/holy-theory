---
title: Linked list
tags: ['theory', 'structures', 'data structures']
languages: ['typescript']
---
# Linked list

![Linked List](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/linked-list.png)

```typescript

export class Noddy {
    public element = null;
    public next = null;
    constructor(element: any) {
        this.element = element;
    }
}

export class LinkedList {
    private length = 0;
    private _head: any = null;

    public size() {
        return this.length;
    }

    public head() {
        return this._head;
    }

    public add(element: any) {
        const node = new Noddy(element);
        if (this._head === null) {
            this._head = node;
        } else {
            let currentNode = this._head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    }

    public remove(element: any) {
        let currentNode = this._head;
        let previousNode = null;
        if (currentNode.element === element) {
            this._head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }
        this.length -= 1;

    }

    public isEmpty() {
        return !(this.size() > 0);
    }

    public indexOf(element: any) {
        if (this._head === null) return -1;
        let current = this._head;
        let index = 0;
        while (current.element !== element && current.next !== null) {
            current = current.next;
            index++
        }
        if (current.element !== element && current.next === null) {
            return -1
        }
        return index;
    }

    public elementAt(index: number) {
        if (this._head === null) return undefined;
        let current = this._head;
        let currentIndex = 0;
        while (currentIndex !== index && current.next !== null) {
            current = current.next;
            currentIndex++
        }
        if (currentIndex !== index && current.next === null) {
            return undefined;
        }
        return current.element;
    }

    public removeAt(index: number) {
        if (this._head === null) return undefined;
        let current = this._head;
        let currentIndex = 0;
        while (currentIndex !== index && current.next !== null) {
            current = current.next;
            currentIndex++
        }
        if (currentIndex !== index && current.next === null) {
            return null;
        }
        this.remove(current.element)
        return current.element;
    }

    public addAt(index: number, element: any) {
        let node = new Noddy(element);
        if (index < 0 || index > length) {
            return false;
        }
        if (index == 0) {
            node.next = this._head
            this._head = node
            length++;
            return true;
        } else {
            let currentnode = this._head;
            let currentindex = 0;
            let previousnode;
            while (index !== currentindex) {
                previousnode = currentnode;
                currentnode = currentnode.next;
                currentindex++;
            }
            previousnode.next = node;
            node.next = currentnode;
            length++;
            return true
        }
    }
}
```

* [Go back](../readme.md)
  