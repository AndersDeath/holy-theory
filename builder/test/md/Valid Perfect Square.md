# Valid Perfect Square
---
# Valid Perfect Square

```typescript
function isPerfectSquare(num: number): boolean {
    let i = 1;
    while (num > 0) {
        num -= i;
        i += 2;
    }
    return num == 0;
};
```
**Source: https://leetcode.com**
* [Go back](../readme.md)