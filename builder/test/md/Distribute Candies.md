# Distribute Candies

```typescript
function distributeCandies(candyType: number[]): number {
  const uniqueCandies = new Set(candyType);
  const maxCandies = candyType.length / 2;
  
  return Math.min(uniqueCandies.size, maxCandies);
};
```

**Solution:**

Step-by-step breakdown of the code:

1. The function `distributeCandies` takes an array `candyType` representing the types of candies available and returns the maximum number of unique candies the sister can receive.

2. The function creates a `Set` called `uniqueCandies` to store the unique types of candies available in the `candyType` array. The `Set` automatically eliminates duplicates, so it contains only unique candy types.

3. The variable `maxCandies` is assigned the value of half the length of the `candyType` array (`candyType.length / 2`). This represents the maximum number of candies the sister can receive if the candies are distributed equally between her and her brother.

4. The function returns the minimum value between the size of the `uniqueCandies` set and `maxCandies`. This step ensures that the sister receives the maximum possible unique candies while adhering to the constraint that she cannot receive more than half of the total candies.

5. The function returns the calculated maximum number of unique candies that the sister can receive.

Techniques used:

1. Data Structure - Set: The code uses a `Set` to store the unique types of candies available in the `candyType` array. The `Set` ensures that only unique candy types are present in the collection.

2. Mathematical Calculation: The code calculates the maximum number of candies the sister can receive (half of the total candies) and compares it with the number of unique candies available. The minimum value of these two is returned as the result.

Summary:

The provided TypeScript code calculates the maximum number of unique candies that the sister can receive when the candies are distributed equally between her and her brother. It ensures that she receives the maximum possible unique candies without exceeding half of the total candies.



