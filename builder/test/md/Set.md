# Set
---
# Set

```typescript
export class Set {
    private dictionary: any = {}
    private length = 0
    constructor(...elements: any) {
        if (elements.length > 0) {
            elements.forEach((el: any) => {
                this.add(el);
            });
        }
    }

    public has(element: any) {
        return this.dictionary[element] !== undefined;
    }

    public values() {
        return Object.keys(this.dictionary);
    }

    public add(element: any) {
        if (!this.has(element)) {
            this.dictionary[element] = true;
            this.length++;
            return true;
        }

        return false;
    }

    public delete(element: any) {
        if (this.has(element)) {
            delete this.dictionary[element];
            this.length--;
            return true;
        }

        return false;
    }

    public size() {
        return this.length;
    }

    public union(set: any) {
        const newSet = new Set();
        this.values().forEach((value: any) => {
            newSet.add(value);
        })
        set.values().forEach((value: any) => {
            newSet.add(value);
        })

        return newSet;
    }

    public intersection(set: any) {
        const newSet = new Set();

        let big: any;
        let small: any;
        if (this.dictionary.length > set.length) {
            big = this;
            small = set;
        } else {
            big = set;
            small = this;
        }

        small.values().forEach((value: any) => {
            if (big.dictionary[value]) {
                newSet.add(value);
            }
        })

        return newSet;
    }

    public difference(set:any) {
        const newSet = new Set();

        let big: any;
        let small: any;
        if (this.dictionary.length > set.length) {
            big = this;
            small = set;
        } else {
            big = set;
            small = this;
        }

        small.values().forEach((value: any) => {
            if (!big.dictionary[value]) {
                newSet.add(value);
            }
        })

        return newSet;
    }

    public isSubsetOf(set: any) {
        let counter = 0;
        this.values().forEach((el) => {
            if (set.has(el)) {
                counter++;
            }
        });
        return this.values().length === counter;
    }
}

```

* [Go back](../readme.md)