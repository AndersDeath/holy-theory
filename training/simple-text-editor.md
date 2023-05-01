---
title: Simple text editor
tags: ['training', 'task']
languages: ['javascript']
---
# Simple text editor

```javascript
function processData(input) {
     const [numOps, ...queries] = input.split('\n')
     const undoStack = [];
     let str = '';
     
      for (let query of queries) {
        const [op, param] = query.split(' ')
        
        switch (op) {
            case '1': 
                undoStack.push(str)
                str += param  
                break
            case '2': 
                undoStack.push(str)
                str = str.substring(0, str.length - Number(param))
                break
            case '3': 
                console.log(str[Number(param) - 1])
                break
            case '4': 
                str = undoStack.pop()
                break
        }
    }
} 

```

**Source: https://hackerrank.com**
* [Go back](../readme.md)