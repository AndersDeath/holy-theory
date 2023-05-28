# Excel Sheet Column Title
---
# Excel Sheet Column Title

```typescript
function convertToTitle(columnNumber: number): string {
      let output = [];
        while (columnNumber > 0) {
            let j = columnNumber % 26;
            if (j == 0) {
                output.push("Z");
                columnNumber = Math.floor(columnNumber / 26) - 1;
            }
            else {
                output.push(String.fromCharCode((j - 1) + 'A'.charCodeAt(0)));
                columnNumber = Math.floor(columnNumber / 26);
            }
        }
    return output.reverse().join("");
};
```

* [Go back](../readme.md)