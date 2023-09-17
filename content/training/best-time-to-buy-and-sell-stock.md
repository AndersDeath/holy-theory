---
title: Best Time to Buy and Sell Stock
tags: ['training', 'task']
languages: ['typescript']
---
# Best Time to Buy and Sell Stock

```typescript
function maxProfit(prices: number[]): number {
        let min = 10000;
        
        let maxDiff = 0;
        for (let i = 0; i < prices.length; i++){
            min = Math.min(prices[i], min);
            maxDiff = Math.max(prices[i] - min, maxDiff);
         }
        return maxDiff;

};
```

**Solution:**
Below are the step-by-step explanations of the code:

1. The `maxProfit` function is defined, which takes one parameter:
   - `prices`: an array of numbers representing the stock prices.

2. A variable `min` is initialized to a high value, 10000, to track the minimum price encountered during the iteration. It will be updated as a new minimum price is found.

3. A variable `maxDiff` is initialized to 0, which will store the maximum difference (profit) encountered during the iteration. It will be updated if a higher difference is found.

4. A `for` loop is used to iterate over the elements of the `prices` array.

5. Inside the loop, the minimum value between the current price (`prices[i]`) and the current minimum (`min`) is calculated using `Math.min(prices[i], min)`. This updates the `min` variable to track the new minimum price encountered.

6. The maximum difference (profit) between the current price and the minimum price (`prices[i] - min`) is calculated using `Math.max(prices[i] - min, maxDiff)`. This updates the `maxDiff` variable if a higher difference is found.

7. The loop continues until all prices in the array are processed.

8. Once the loop exits, the final value of `maxDiff` represents the maximum possible profit that can be obtained by buying and selling the stock.

9. The `maxDiff` value is returned as the result.

**Techniques used:**

The following techniques are utilized within the code:

1. Initializing variables to track minimum prices and maximum differences.
2. Iterating over array elements using a `for` loop.
3. Updating variables based on conditions using `Math.min` and `Math.max`.
4. Returning a calculated result.

**Source: https://leetcode.com**
* [Go back](../readme.md)