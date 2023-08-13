---
title: Plus minus
tags: ["training", "task"]
languages: ["typescript"]
---

# Plus minus

```typescript
function plusMinus(arr: number[]): void {
  // Write your code here
  const length = arr.length;
  let tempArr: number[] = [0, 0, 0];

  for (let i = 0; i < length; i++) {
    if (arr[i] > 0) {
      tempArr[0]++;
    } else if (arr[i] < 0) {
      tempArr[1]++;
    } else {
      tempArr[2]++;
    }
  }

  console.log((tempArr[0] / length).toFixed(6));
  console.log((tempArr[1] / length).toFixed(6));
  console.log((tempArr[2] / length).toFixed(6));
}
```

The code defines a function `plusMinus` that calculates the fractions of positive, negative, and zero elements in an array. It then prints these fractions with a precision of 6 decimal places.

Here's how the code works:

1. The function `plusMinus` takes an array of numbers `arr` as input.

2. It initializes an array `tempArr` with three elements representing the counts of positive, negative, and zero elements, respectively. The initial values of all elements are set to 0.

3. A loop iterates through each element of the input array `arr`.

4. Inside the loop, the code checks whether the current element is positive, negative, or zero. Based on the comparison, the corresponding element in `tempArr` is incremented.

5. After the loop, the code calculates the fractions by dividing the count of positive, negative, and zero elements by the total length of the array.

6. The `toFixed(6)` method is used to format the fractions with a precision of 6 decimal places.

7. Finally, the code prints the calculated fractions using the `console.log` function.

**Techniques Used:**

- **Looping:** The code uses a loop to iterate through each element of the input array.

- **Conditional Statements:** Conditional statements (if-else) are used to determine whether each element is positive, negative, or zero and update the corresponding count.

**Summary:**

The `plusMinus` function calculates and prints the fractions of positive, negative, and zero elements in an array, each with a precision of 6 decimal places. It provides insights into the distribution of elements in the array.

- [Go back](../readme.md)
