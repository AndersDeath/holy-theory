# Construct the Rectangle

```typescript
function constructRectangle(area: number): number[] {
  let width = Math.floor(Math.sqrt(area));

  while (area % width !== 0) {
    width--;
  }

  const length = area / width;
  return [length, width];
};
```

**Solution:**
Below is the step-by-step breakdown of the code:

1. The `constructRectangle` function takes a number `area` as input.

2. The variable `width` is initialized to the square root of the `area` using the `Math.sqrt` function and rounded down to the nearest integer using the `Math.floor` function. This provides an initial estimate for the width of the rectangle.

3. A `while` loop is used to find the exact width of the rectangle. The loop continues as long as the remainder of dividing `area` by `width` is not equal to 0.

4. Inside the loop, `width` is decremented by 1 in each iteration until a width is found that evenly divides the area without any remainder.

5. Once the loop exits, the value of `width` represents the exact width of the rectangle.

6. The variable `length` is calculated by dividing the `area` by the `width`, which gives the corresponding length of the rectangle.

7. The function returns an array `[length, width]` containing the calculated dimensions of the rectangle.

**Techniques used:**

The following techniques are utilized within the code:

1. Mathematical computation using `Math.sqrt` to calculate the square root of a number and `Math.floor` to round down a decimal number to the nearest integer.
2. Looping using a `while` loop to perform iterative computations until a certain condition is met.
3. Conditional branching using the `while` loop condition to check for the remainder of the division.
4. Variable manipulation by decrementing the `width` variable inside the loop.
5. Division and arithmetic computation to calculate the length of the rectangle based on the given area.
6. Array creation and return using `[length, width]` to return the calculated dimensions.

The code efficiently calculates the dimensions of a rectangle given its area by using the square root of the area as an initial estimate for the width and then iteratively adjusting the width until an exact value is found. The calculated width and length guarantee that their product equals the given area.

The time complexity of this solution is O(sqrt(area)) since it uses `Math.sqrt` to calculate the initial width, and the loop has a maximum number of iterations equal to the square root of the area.

**Source: https://leetcode.com**
