# Plus One

```typescript

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    let i = digits.length - 1;

    while(i >= 0 && digits[i] === 9) {
        i--;
    }

    if (i == -1) {
        const result = new Array(digits.length + 1).fill(0);
        result[0] = 1;
        return result;
    }

    let result = new Array(digits.length).fill(0);
        result[i] = digits[i] + 1;
        for (let j = 0; j < i; j ++) {
            result[j] = digits[j];
        }
    return result;
};

```
* [Go back](../readme.md)
