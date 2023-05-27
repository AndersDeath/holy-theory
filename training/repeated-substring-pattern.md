---
title: Repeated Substring Pattern
tags: ['training', 'task']
languages: ['typescript']
---
# Repeated Substring Pattern

```typescript
function repeatedSubstringPattern(s: string): boolean {
    for (let size=1;size<=s.length/2;size++) {
            if (s.length%size==0) {
                let curr=s.substring(0,size);
                let j=size;
                while (j<s.length && s.substring(j,j+size) === curr) {
                    j+=size;
                }
                if (j==s.length) return true;
            }
        }
        return false;
};
```
* [Go back](../readme.md)
