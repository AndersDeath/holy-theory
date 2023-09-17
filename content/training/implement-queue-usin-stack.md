---
title: Implement Queue using Stacks
tags: ['training', 'task']
languages: ['typescript']
---
# Implement Queue using Stacks

```typescript
class MyQueue {
    stack1: number[] = [];
    stack2: number[] = [];

    constructor() {}

    push(x: number): void {
        this.stack1.push(x);
    }

    pop(): number {
        this.move();
        return this.stack2.pop();
    }

    peek(): number {
        this.move();
        return this.stack2[this.stack2.length - 1];
    }

    empty(): boolean {
        return !this.stack1.length && !this.stack2.length;
    }

    move(): void {
        if (!this.stack2.length) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```

The code is a TypeScript implementation of a queue data structure using two stacks. It defines a class `MyQueue` with various queue operations implemented using two stacks, `stack1` and `stack2`.

Here's a step-by-step explanation of the code:

1. The class `MyQueue` is defined, which represents a queue data structure.

2. The constructor function is defined, but it doesn't do anything since the stacks (`stack1` and `stack2`) are already initialized as empty arrays.

3. The `push` method allows adding an element to the queue. It simply pushes the element onto `stack1`, which acts as the back of the queue.

4. The `pop` method removes and returns the front element from the queue. It first calls the `move` method to transfer elements from `stack1` to `stack2`, ensuring that the order of elements is reversed (first-in, first-out). Then, it pops the last element from `stack2`, which is the front of the queue.

5. The `peek` method returns the front element of the queue without removing it. Similar to `pop`, it also calls the `move` method to transfer elements from `stack1` to `stack2`, and then returns the last element of `stack2`.

6. The `empty` method checks if the queue is empty. It returns `true` if both `stack1` and `stack2` are empty, indicating that the queue has no elements.

7. The `move` method is a private helper function used to transfer elements from `stack1` to `stack2`. It is called by `pop` and `peek` methods when needed. The purpose of this method is to maintain the correct order of elements in the queue, allowing efficient front element retrieval.

Techniques used in this code include:
- Implementing a queue using two stacks to efficiently perform queue operations (enqueue, dequeue, and peek).
- Utilizing the LIFO (Last-In-First-Out) property of stacks to reverse the order of elements when moving them from `stack1` to `stack2`.
- Ensuring that elements are moved to `stack2` only when necessary (on calls to `pop` and `peek`) to avoid unnecessary element transfers.
  
* [Go back](../readme.md)