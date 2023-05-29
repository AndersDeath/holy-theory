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
* [Go back](../readme.md)