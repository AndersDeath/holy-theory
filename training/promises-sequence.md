---
title: Promises sequence
tags: ['training', 'task']
languages: ['typescript']
---
# Promises sequence

```typescript
const a = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
        console.log('Promise a');
        resolve();
    }, 5000)
});

const b = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
        console.log('Promise b');
        resolve();
    }, 4000)
});

const c = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
        console.log('Promise c');
        resolve();
    }, 1000)
});

let q = [a,b,c].reduce((acc:any, f: any) => {
    return acc.then(() => {
        return f;
    });
}, Promise.resolve());
```

* [Go back](../readme.md)
