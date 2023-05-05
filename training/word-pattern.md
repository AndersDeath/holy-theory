---
title: Word Pattern
tags: ['training', 'task']
languages: ['typescript']
---
# Word Pattern

```typescript
function wordPattern(pattern: string, s: string): boolean {
    const strArr = s.split(' ');
    
    if ( strArr.length != pattern.length) {
        return false;
    }
    
    let hash = {};
    
    for (let i = 0; i < strArr.length; i++) {
        if (hash[pattern[i]]) {
            if (hash[pattern[i]] !== strArr[i]) {
                return false;
           } 
        } else {
            if (Object.values(hash).indexOf(strArr[i]) !== -1){
                return false;
            } else {
                 hash[pattern[i]] = strArr[i];
            }
        }
    }
    
    return true;
};
```
**Source: https://codewars.com**
* [Go back](../readme.md)