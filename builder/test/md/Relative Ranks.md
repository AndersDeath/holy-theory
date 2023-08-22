# Relative Ranks

```typescript
function findRelativeRanks(score: number[]): string[] {
 const sortedNums = [...score].sort((a, b) => b - a);
    const ranks: string[] = new Array(score.length);

    for (let i = 0; i < score.length; i++) {
        const rank = sortedNums.indexOf(score[i]) + 1;

        if (rank === 1) {
            ranks[i] = "Gold Medal";
        } else if (rank === 2) {
            ranks[i] = "Silver Medal";
        } else if (rank === 3) {
            ranks[i] = "Bronze Medal";
        } else {
            ranks[i] = rank.toString();
        }
    }

    return ranks;
};
```

1. **Sorting the Array**: The input `score` array is copied using the spread operator `[...score]` to create a new array `sortedNums`. This new array is sorted in descending order using the `sort()` method, which takes a comparison function `(a, b) => b - a`. This ensures that the largest scores come first in the sorted array.

2. **Initializing an Empty Array**: An empty array `ranks` is created with a length equal to the length of the input `score` array. This array will store the corresponding rank or medal label for each score.

3. **Iterating Through the Scores**: A `for` loop is used to iterate through each element in the `score` array. The loop variable `i` represents the index of the current score being processed.

4. **Calculating Rank**: The `indexOf()` method is used on the `sortedNums` array to find the index of the current score within the sorted array. Adding 1 to this index gives the rank of the current score.

5. **Assigning Medals or Rank**: Conditional statements (`if`, `else if`, `else`) are used to assign the appropriate medal or rank label to the `ranks` array based on the calculated rank value. If the rank is 1, "Gold Medal" is assigned; if the rank is 2, "Silver Medal" is assigned; if the rank is 3, "Bronze Medal" is assigned; otherwise, the rank is converted to a string using `toString()` and assigned.

6. **Returning the Result**: After iterating through all scores and assigning their corresponding ranks or medal labels, the `ranks` array is returned as the output of the function.

**Techniques Used**:

1. Array Copy (`[...score]`): Copying an array using the spread operator.
2. Array Sorting (`sort()`): Sorting an array in descending order using a comparison function.
3. Array Initialization (`new Array()`): Creating an empty array with a specified length.
4. Iterative Looping (`for` loop): Iterating through elements of an array using a loop.
5. Array Indexing (`indexOf()`): Finding the index of an element within an array.
6. Conditional Statements (`if`, `else if`, `else`): Making decisions based on different conditions.
7. String Conversion (`toString()`): Converting a value to a string.
8. Returning a Value: Using the `return` statement to provide a function's output.

This function processes an array of scores, calculates ranks, and assigns medal labels or rank values based on the calculated ranks, returning an array with the corresponding information.


