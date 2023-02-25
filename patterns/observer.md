# Observer

```typescript
export class Observer {
    private observers: any[] = [];

    public subscribe(fn: any) {
        this.observers.push(fn);
    }

    public unsubscribe(fn:any) {
        this.observers = this.observers.filter(subscriber => subscriber!==fn);
    }

    public next(data:any) {
        this.observers.forEach(subscriber => subscriber(data));
    }
}

```

* [Go back](../readme.md)