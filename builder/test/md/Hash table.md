# Hash table
![Hash table](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/hash-table.png)

```typescript
const superPrimitiveHashingFunc = (string: string) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
    return hash;
}

export class HashTable {
    private collection: any = {}

    public add(key: any, value: any) {
        const theHash = superPrimitiveHashingFunc(key);
        if (!this.collection.hasOwnProperty(theHash)) {
            this.collection[theHash] = {};
        }
        this.collection[theHash][key] = value;
    }

    public remove(key: any) {
        const hashedObj = this.collection[superPrimitiveHashingFunc(key)];
        if (hashedObj.hasOwnProperty(key)) {
            delete hashedObj[key];
        }
        if (!Object.keys(hashedObj).length) {
            delete this.collection[superPrimitiveHashingFunc(key)];
        }
    }

    public lookup(key: any) {
        var theHash = superPrimitiveHashingFunc(key);
        if (this.collection.hasOwnProperty(theHash)) {
            return this.collection[theHash][key];
        }
        return null
    }
}
```

* [Go back](../readme.md)