---
title: Binary search path you took
tags: ["training", "task", "tree"]
languages: ["typescript"]
---

# Binary search path you took

```typescript
function binarySearch(searchList: number[], value: number): number[] | string {
  let path: number[] = [];

  let start: number = 0;
  let end: number = searchList.length - 1;

  while (start <= end) {
    let middle: number = Math.floor((start + end) / 2);
    path.push(searchList[middle]);

    if (searchList[middle] === value) {
      return path;
    } else if (searchList[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return ["Value Not Found"];
}

// Test with the provided array
const testArray: number[] = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70,
];

const result: number[] | string = binarySearch(testArray, 5);
console.log(result); // Output: [4, 6, 5]
```

**Solution:**

1. **Function Definition:**

   - The function `binarySearch` takes two parameters: `searchList` (an array of numbers) and `value` (the target value to search for).
   - It returns either an array of numbers (representing the path followed during the binary search) or a string indicating that the value was not found.

2. **Initialize Variables:**

   - Create an empty array called `path` to store the path followed during the binary search.
   - Initialize `start` to 0, representing the start index of the search list.
   - Initialize `end` to the last index of the search list.

3. **Binary Search Loop:**

   - Enter a while loop that continues as long as `start` is less than or equal to `end`.
   - Calculate the middle index (`middle`) as the floor of the average of `start` and `end`.
   - Push the value at the middle index onto the `path` array.

4. **Check if Value is Found:**

   - If the value at the middle index is equal to the target `value`, return the `path` array.

5. **Adjust Search Range:**

   - If the value at the middle index is less than the target `value`, update `start` to `middle + 1` (narrowing the search to the right half).
   - If the value at the middle index is greater than the target `value`, update `end` to `middle - 1` (narrowing the search to the left half).

6. **Repeat Until Value is Found or Search Range is Empty:**

   - Continue the loop until either the target value is found or the search range becomes empty.

7. **Return "Value Not Found" if Necessary:**
   - If the loop exits without finding the target value, return an array containing the string "Value Not Found".

The algorithm performs a binary search on a sorted array, updating the search range based on whether the middle element is equal to, less than, or greater than the target value. The path followed during the search is recorded in the `path` array, and this path is returned if the value is found. If the value is not found, the function returns an array with the string "Value Not Found".
