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

**Source: https://leetcode.com**
* [Go back](../readme.md)