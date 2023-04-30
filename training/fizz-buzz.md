---
title: Fizz Buzz
tags: ['training', 'task']
languages: ['typescript']
---
# Fizz Buzz

```typescript
function fizzBuzz(n: number): string[] {

    let output: any = [];
      for (let i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                output.push("FizzBuzz");
            } else if (i % 3 == 0) {
                output.push("Fizz");
            } else if (i % 5 == 0) {
                output.push("Buzz");
            } else {
                output.push(i.toString());
            }
        }
        return output;
};
```

* [Go back](../readme.md)
