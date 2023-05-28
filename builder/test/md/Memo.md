# Memo
---
# Memo

```typescript
export function memo(func: any) {
    const cache: any = {};
    return (...args: any[]) =>{
        let key = JSON.stringify(args);
        if(cache[key]) {
            return cache[key];
        }
        const value = func.apply(null, args);
        cache[key] = value;
        return value;
    }
}
```
* [Go back](../readme.md)
