---
title: Array
tags: ["theory", "structures", "data structures"]
languages: [""]
---

# Array

An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).

![Array](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/array.png)

Basic Operations:

1. **Traverse** - print all the array elements one by one
2. **Insertion** - adds an element at the given index
3. **Deletion** - deletes an element at the given index
4. **Search** - searches an elem,ent using the given index or by the value
5. **Update** - updates an element at the given index

````typescript
class CustomArray<T> {
    private items: T[];
    private count: number;

    constructor() {
        this.items = [];
        this.count = 0;
    }

    add(element: T): void {
        this.items[this.count] = element;
        this.count++;
    }

    remove(index: number): T | null {
        if (index < 0 || index >= this.count) {
            console.log('Index out of bounds');
            return null;
        }
        const removedElement = this.items[index];
        for (let i = index; i < this.count - 1; i++) {
            this.items[i] = this.items[i + 1];
        }
        this.items.length--;
        this.count--;
        return removedElement;
    }

    get(index: number): T | null {
        if (index < 0 || index >= this.count) {
            console.log('Index out of bounds');
            return null;
        }
        return this.items[index];
    }

    display(): void {
        console.log(this.items.slice(0, this.count));
    }

    size(): number {
        return this.count;
    }
}
```
