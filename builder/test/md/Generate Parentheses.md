# Generate Parentheses

```typescript
function generateParenthesis(n: number): string[] {
    const result = [];
    generator(result, "", 0,0,n)
    return result;
};

function generator(result, s, open, close, n) {
    if(open === n && close === n) {
        result.push(s);
        return;
    }
    if(open < n) {
         generator(result, s + '(', open +1, close, n);
    }
    if(close < open) {
         generator(result, s + ')', open, close + 1, n);
    }
    
}
```

* [Go back](../readme.md)
