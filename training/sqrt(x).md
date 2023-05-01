---
title: Sqrt(x)
tags: ['training', 'task']
languages: ['typescript']
---
# Sqrt(x)

```typescript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x;

    let start = 0;
    let end = x;
    while(start <= end) {
        let mid = (start + end) / 2;
        mid = Math.floor(mid);
        
        if(mid === x/mid) {
            return mid;
        }
       
       if(mid < x/mid) {
           start = mid + 1;
       } else {
           end = mid - 1;
       }
    }

    if(start > x/start) {
        return start - 1;
    }
    return start;
};
```

* [Go back](../readme.md)