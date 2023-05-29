# Stack
![Stack](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/stack.png)

```typescript
export class Stack {
    private collection:any[] = [];

    public print() {
        return this.collection;
    }

    public push(element: any) {
        this.collection.push(element);
        return element;
    }

    public pop() {
        return this.collection.pop();
    }

    public peek() {
        return this.collection[this.collection.length - 1];
    }

    public isEmpty() {
        return !this.collection.length;
    }

    public clear() {
        this.collection = []
    }
}

```

```java
class Stack {
	
	int[] stack;
	int top, capacity, currentSize;
	
	public Stack (int capacity) {
		this.capacity = capacity;
		top = -1;
		currentSize = 0;
		stack = new int[this.capacity];
	}

	public boolean isEmpty() {
		return currentSize == 0;
	}
	
	public int size() {
		return currentSize;
	}
	
	public int top() {
		if(top < 0){
			return -1;
		}
		return stack[top];
	}
	
	public void push(int element) {
		if(top >= capacity - 1) {
			return;
		}
		stack[++top] = element;
		currentSize++;
	}
	
	public void pop() {
		if(top < 0) {
			return;
		}
		top--;
		currentSize--;
	}
}
```

* [Go back](../readme.md)