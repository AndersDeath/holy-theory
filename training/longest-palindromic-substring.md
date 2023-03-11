
# Longest Palindromic Substring

```typescript
function longestPalindrome(s: string): string {

    let length = s.length;
    let maxLength = 1;
    let start = 0;

    let table = new Array(length);
    for(let i = 0; i < length; i++) {
        table[i] = new Array(length);
    }

    for(let i = 0; i < length; i++) {
        table[i][i] = true;
    }

    for(let i = 0; i < length; i++) {
        if(s[i] === s[i+1]) {
            table[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    for(let k = 3; k <= length; k++) {
        for(let i = 0; i < length - k + 1; i++) {
            let j = i + k - 1;

            if(table[i + 1][j - 1] && s[i] == s[j]) {
                table[i][j] = true;
                if(k > maxLength) {
                    start = i;
                    maxLength = k;
                }

            }
        }
    }

    
    return s.slice(start, start + maxLength);
};
```
* [Go back](../readme.md)
