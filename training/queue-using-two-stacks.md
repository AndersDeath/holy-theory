---
title: Merge two sorted linked lists
tags: ['training', 'task']
languages: ['typescript']
---
# Merge two sorted linked lists
```typescript
function processData(input) {
    let arr = input.split('\n');
    const stack = [];
    
    for(let i = 0; i < arr.length; i++) {
        let [cmd, value] = arr[i].split(' ');
        if(cmd == 1) {
            stack.push(value);
        } else if(cmd == 2) {
            stack.splice(0,1);
        } else if(cmd == 3) {
            console.log(stack[0])
        }
    }
} 
,,,

** Source: http://hackerrank.com**
* [Go back](../readme.md)
