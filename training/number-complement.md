---
title: Number Complement
tags: ['training', 'task']
languages: ['typescript']
---
# Number Complement

```typescript

function findComplement(num: number): number {
  let mask = 1;
  
  while (mask < num) {
    mask = (mask << 1) | 1;
  }
  
  return num ^ mask;
}

```

* [Go back](../readme.md)
