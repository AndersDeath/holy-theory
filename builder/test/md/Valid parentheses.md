# Valid parentheses

```typescript
function isValid(s: string): boolean {
    const temp = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(' || s[i] == '{' || s[i] == '[') {
            temp.push(s[i]);
        } else if(s[i] == ')' && temp.length && temp[temp.length -1 ] === '(') {
            temp.pop();
        } else if(s[i] == ']' && temp.length && temp[temp.length -1 ] === '[') {
            temp.pop();
        } else if(s[i] == '}' && temp.length && temp[temp.length -1 ] === '{') {
            temp.pop();
        } else {
            return false;
        }
    }

    return temp.length === 0;
};
```
**Source: https://leetcode.com**
