# String to integer (atoi)
---
# String to integer (atoi)

```typescript
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    if(!s) { return 0; }

    s = s.trim();
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    let i = 0;

    const isNegative = s[0] === '-';
    const isPositive = s[0] === '+';

    if (isNegative) {
        i++;
    } else if (isPositive) {
        i++;
    }

    let number = 0;

    while(i < s.length && s[i] >= '0' && s[i] <= '9') {
        number = number * 10 + (s[i] - '0');
        i++;
    }

    number = isNegative ? -number : number;

    if(number < INT_MIN) {
        return INT_MIN;
    }
    if(number > INT_MAX) {
        return INT_MAX;
    }
    return number;
};
```
* [Go back](../readme.md)