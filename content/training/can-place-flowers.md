---
title: Can Place Flowers
tags: ['training', 'task']
languages: ['typescript']
---
# Can Place Flowers

```typescript
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count = 0;
    
    for (let i = 0; i < flowerbed.length; i += 2) {
        if (flowerbed[i] === 0) {
            if (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) {
               
                count++;
                i++;
            }
        }
    }
    
    return count >= n;
};
```

1. **Initialize Counter:**
   - Initialize a counter variable `count` to keep track of the number of flowers placed.

2. **Iterate Through Flowerbed:**
   - Use a `for` loop to iterate through the `flowerbed` array, incrementing the index by 2 in each iteration (skipping every two positions).

3. **Check Current Position:**
   - Check if the current position in the flowerbed is empty (`flowerbed[i] === 0`).

4. **Check Next Position:**
   - If the current position is empty, check if it is the last position in the flowerbed or if the next position is also empty (`flowerbed[i + 1] === 0`).

5. **Place Flower:**
   - If the conditions are met, place a flower at the current position, increment the `count`, and skip the next position (increment `i`).

6. **Repeat Until End:**
   - Continue iterating through the flowerbed, checking and placing flowers in every valid position.

7. **Check if Enough Flowers Placed:**
   - After the iteration, check if the number of placed flowers (`count`) is greater than or equal to the required number of flowers (`n`).

8. **Return Result:**
   - Return `true` if enough flowers are placed; otherwise, return `false`.