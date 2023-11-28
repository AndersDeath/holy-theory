---
title: Minimum Index Sum of Two Lists
tags: ['training', 'task']
languages: ['typescript']
---
# Minimum Index Sum of Two Lists

```typescript
function findRestaurant(list1: string[], list2: string[]): string[] {
    const indexSumMap: Map<string, number> = new Map();
    let minIndexSum = Infinity;
    
    for (let i = 0; i < list1.length; i++) {
        const restaurant = list1[i];
        if (list2.includes(restaurant)) {
            const indexSum = i + list2.indexOf(restaurant);
            indexSumMap.set(restaurant, indexSum);
            minIndexSum = Math.min(minIndexSum, indexSum);
        }
    }
    
    const result: string[] = [];
    for (const [restaurant, indexSum] of indexSumMap) {
        if (indexSum === minIndexSum) {
            result.push(restaurant);
        }
    }
    
    return result;
};
```

1. **Initialize Data Structures:**
   - Create a `Map` called `indexSumMap` to store the sum of indices for common restaurants between the two lists.
   - Initialize a variable `minIndexSum` to `Infinity` to keep track of the minimum index sum.

2. **Iterate Through First List:**
   - Use a `for` loop to iterate through each restaurant in the first list (`list1`).
   - For each restaurant:
      - Check if it also exists in the second list (`list2`).

3. **Calculate Index Sum:**
   - If the restaurant is common between both lists:
      - Calculate the index sum by adding the current index in `list1` (`i`) and the index of the restaurant in `list2` (using `list2.indexOf(restaurant)`).

4. **Update Data Structures:**
   - Store the calculated index sum in the `indexSumMap` using the restaurant name as the key.
   - Update `minIndexSum` to be the minimum value between its current value and the calculated index sum using `Math.min()`.

5. **Initialize Result Array:**
   - Create an empty array called `result` to store the final result.

6. **Iterate Through `indexSumMap`:**
   - Use a `for...of` loop to iterate through each entry in `indexSumMap`, which contains restaurant names and their corresponding index sums.

7. **Filter by Minimum Index Sum:**
   - For each entry, check if the index sum is equal to the minimum index sum.
   - If it is, add the restaurant name to the `result` array.

8. **Return Result:**
   - Return the `result` array containing the names of restaurants with the minimum index sum.