---
title: Fibonacci streaming 
tags: ['training', 'task']
languages: ['typescript']
---
# Fibonacci streaming 

```typescript
export function fibonacciSequence(): Iterator<number> {
    let index = 0;
    let prev = 0;
    let value = 1;
  
    return {
      next: () => {
        if (index >= Infinity) { 
            return { value: value, done: true }; 
        }
  
        let result = { value, done: false };
        let next = value + prev;
        prev = value;
        value = next;
        index++;
  
        return result;
      }
    }
  }
```

* [Go back](../readme.md)