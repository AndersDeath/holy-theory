---
title: Arranging Coins
tags: ['training', 'task']
languages: ['typescript']
---
# Arranging Coins

```typescript
function arrangeCoins(n: number): number {
    let i = 1;
    let coins = 0;
    let cnt = 0;
    
    while((n-coins) >= i) {
        coins += i;
        i++;
        cnt++;
    }
    
    return cnt;
};
```

**Solution:**
Below are the step-by-step explanations of the code:

1. The `arrangeCoins` function is defined, which takes one parameter:
   - `n`: a number representing the total number of coins.

2. Three variables are initialized:
   - `i` is set to 1 and represents the number of coins in the current row.
   - `coins` is set to 0 and will keep track of the total number of coins arranged.
   - `cnt` is set to 0 and will be used to count the number of complete rows.

3. A `while` loop is used to iterate while the number of remaining coins (`n-coins`) is greater than or equal to the number of coins in the current row (`i`).

4. Inside the loop, the number of coins in the current row (`i`) is added to the `coins` variable, representing the accumulation of coins as each row is added.

5. The `i` variable is incremented by 1 to move to the next row.

6. The `cnt` variable is incremented by 1 to count the completion of a full row.

7. The loop continues until the number of remaining coins is no longer sufficient to form a complete row.

8. Once the loop exits, the final value of `cnt` represents the maximum number of complete rows that can be arranged.

9. The `cnt` value is returned as the result.

**Techniques used:**

The following techniques are utilized within the code:

1. Variable initialization and assignment.
2. Incrementing a variable using the `++` operator.
3. Comparison and subtraction operations to control the `while` loop.
4. Accumulation of values using the `+=` operator.
5. Returning a calculated result.


* [Go back](../readme.md)
