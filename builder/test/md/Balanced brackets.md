# Balanced brackets
```typescript

const tokens = {
    '{': '}',
    '[': ']',
    '(': ')'
}
function isOpenTerm(s) {
    return tokens[s];
}

function matches(first, second) {
    for(let item in tokens) {
        if(item === first) {
           return tokens[item] === second
       } 
    }
    return false;
}

function isBalanced(s) {
    // Write your code here
   const stack = [];
   for(let i = 0; i < s.length; i++) {
       if(isOpenTerm(s[i])) {
           stack.push(s[i]);
       } else {
           if(stack.length === 0 || !matches(stack.pop(), s[i])) {
               return 'NO';
           }
       }
   }
   return stack.length === 0 ? 'YES' : 'NO'
}

```

** Source: http://hackerrank.com**
* [Go back](../readme.md)
