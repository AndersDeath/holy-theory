---
title: Map
tags: ['theory', 'structures', 'data structures']
languages: ['typescript']
---
# Map

```typescript
export class Map {

    private collection: any = {}

    public add(key: any, value: any) {
        this.collection[key] = value;

    }

    public delete(key: any) {
        delete this.collection[key]

    }

    public get(key: any) {
        return this.collection[key]

    }

    public has(key: any) {
        return Object.keys(this.collection).includes(key);

    }

    public values() {
        return Object.values(this.collection)

    }

    public size() {
        return Object.keys(this.collection).length

    }

    public clear() {
        this.collection = []

    }
}
```
