---
title: Can Place Flowers
tags: ["training", "task"]
languages: ["typescript"]
---

# Can Place Flowers

```typescript
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const prevEmpty = i === 0 || flowerbed[i - 1] === 0;
      const nextEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (prevEmpty && nextEmpty) {
        flowerbed[i] = 1;
        count++;
      }
    }
  }

  return count >= n;
}
```

1. **Initialize Counter:**

   - Initialize a counter variable `count` to keep track of the number of flowers placed.

2. **Iterate Through Flowerbed:**

   - Use a `for` loop to iterate through the `flowerbed` array.

3. **Check Current Position:**

   - Check if the current position in the flowerbed is empty (`flowerbed[i] === 0`).

4. **Check Previous and Next Positions:**

   - Check if the previous position is empty (`i === 0 || flowerbed[i - 1] === 0`) and if the next position is empty (`i === flowerbed.length - 1 || flowerbed[i + 1] === 0`).

5. **Place Flower:**

   - If both the previous and next positions are empty, place a flower at the current position (`flowerbed[i] = 1`) and increment the `count`.

6. **Repeat Until End:**

   - Continue iterating through the flowerbed, checking and placing flowers in every valid position.

7. **Check if Enough Flowers Placed:**

   - After the iteration, check if the number of placed flowers (`count`) is greater than or equal to the required number of flowers (`n`).

8. **Return Result:**
   - Return `true` if enough flowers are placed; otherwise, return `false`.
