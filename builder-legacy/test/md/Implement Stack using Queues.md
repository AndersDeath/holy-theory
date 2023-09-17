# Implement Stack using Queues

```typescript
class MyStack {
    public arr: any = [];
    constructor() {

    }

    push(x: number): void {
        const newq = [];
        newq.push(x);
        while (this.arr.length > 0) {
            newq.push(this.arr.shift());
        }
        this.arr = newq;
    }

    pop(): number {
        return this.arr.shift();
    }

    top(): number {
        return this.arr[0];
    }

    empty(): boolean {
        return this.arr.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```

The code is a TypeScript implementation of a stack data structure using a single array. It defines a class `MyStack` with various stack operations implemented using the array `arr`.

Here's a step-by-step explanation of the code:

1. The class `MyStack` is defined, which represents a stack data structure.

2. The constructor function is defined, but it doesn't do anything since the stack array (`arr`) is already initialized as an empty array.

3. The `push` method allows adding an element to the stack. It creates a new array `newq`, pushes the given element `x` to it, and then iteratively pops elements from the existing `arr` and pushes them to `newq`. This process effectively reverses the order of elements, making the newly pushed element `x` the top of the stack. Finally, it updates `arr` to be the new reversed array `newq`.

4. The `pop` method removes and returns the top element from the stack. It does this by using the `shift` method, which removes the first element (top) of the array `arr`, effectively simulating the behavior of popping the top element from the stack.

5. The `top` method returns the top element of the stack without removing it. It simply accesses the first element (top) of the array `arr`.

6. The `empty` method checks if the stack is empty. It returns `true` if the array `arr` is empty, indicating that the stack has no elements.

Techniques used in this code include:
- Implementing a stack using a single array.
- Reversing the order of elements in the array using another array to achieve stack behavior (LIFO - Last-In-First-Out).
- Utilizing array methods `push`, `shift`, and array indexing to perform stack operations efficiently.


