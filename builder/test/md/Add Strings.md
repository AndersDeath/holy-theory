# Add Strings
---
# Add Strings

```typescript
function addStrings(num1: string, num2: string): string {
 let carry = 0;

    let firstP = num1.length - 1;
    let secondP = num2.length - 1;
    let res = '';

    while (firstP >= 0 || secondP >= 0) {
        let sum = 0;
        let first = firstP >= 0 ? Number(num1[firstP--]) : 0
        let second = secondP >= 0 ? Number(num2[secondP--]) : 0

        sum += first + second + carry;
        carry = 0;

        if (sum > 9) {
            sum %= 10;
            carry++;
        }
        res = sum + res;
    };

    if (carry > 0) {
        res = carry + res;
    }

    return res;
};
```
* [Go back](../readme.md)
