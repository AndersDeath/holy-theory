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
