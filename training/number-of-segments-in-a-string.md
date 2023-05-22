---
title: Number of Segments in a String
tags: ['training', 'task']
languages: ['typescript']
---
# Number of Segments in a String

```typescript

function countSegments(s: string): number {
   s = s.trim();
    if(s.length == 0) {
        return 0
    } else { 
        return s.replace(/  +/g, ' ').trim().split(' ').length
    }
};

```

* [Go back](../readme.md)
