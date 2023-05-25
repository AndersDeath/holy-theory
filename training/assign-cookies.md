---
title: Assign Cookies
tags: ['training', 'task']
languages: ['typescript']
---
# Assign Cookies

```typescript
function findContentChildren(g: number[], s: number[]): number {
    const sortedG: number[] = g.sort((a,b) => a-b);
    const sortedS: number[] = s.sort((a,b) => a-b);
    let gCount: number = 0;
    let sCount: number = 0;
    while(gCount < sortedG.length && sCount < sortedS.length) {
        if(sortedG[gCount] <= sortedS[sCount]) {
            gCount++;
            sCount++;
        } else {
            sCount++
        }
    }
    return gCount;
};

```
* [Go back](../readme.md)
