# Length of Last Word

```typescript
function lengthOfLastWord(s: string): number {
    s = s.trim();
    let counter = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] === ' ') {
            break;
        }
        counter++;
    }

    return counter;
};
```
* [Go back](../readme.md)