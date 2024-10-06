---
title: Container With Most Water
tags: ["training", "task"]
languages: ["typescript"]
---

# Container With Most Water

```typescript
function maxArea(height: number[]): number {
  let maximumArea = Number.MIN_SAFE_INTEGER;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let shorterLine = Math.min(height[left], height[right]);

    maximumArea = Math.max(maximumArea, shorterLine * (right - left));

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maximumArea;
}
```

**Solution:**
Below is the step-by-step breakdown of the code:

1. The `maxArea` function takes an array `height` as input.

2. The variable `maximumArea` is initialized to the minimum safe integer value using `Number.MIN_SAFE_INTEGER`. This variable will be used to track the maximum area encountered.

3. The variables `left` and `right` are initialized to 0 and `height.length - 1` respectively. These variables represent the left and right pointers that will traverse the array.

4. A `while` loop is used to iterate until the `left` pointer is less than the `right` pointer. This ensures that all possible container configurations are explored.

5. Inside the loop, the variable `shorterLine` is calculated as the minimum value between the heights at `height[left]` and `height[right]`. This represents the height of the shorter line in the container.

6. The maximum area is updated by taking the maximum value between the current `maximumArea` and the product of `shorterLine` and the distance between the `right` and `left` pointers. This accounts for the width of the container.

7. Depending on the comparison between `height[left]` and `height[right]`, either the `left` pointer is incremented (if `height[left]` is smaller) or the `right` pointer is decremented (if `height[right]` is smaller). This allows the pointers to move towards the center, exploring potentially higher lines.

8. Once the loop exits, the value of `maximumArea` represents the maximum area of water that can be contained in the container formed by the vertical lines.

9. The maximum area is returned as the result.

**Techniques used:**

The following techniques are utilized within the code:

1. Two-pointer technique using `left` and `right` pointers to traverse the array from both ends towards the center.
2. Conditional branching using an `if` statement to compare the heights of the lines and determine which pointer to move.
3. Updating variables to track the maximum area encountered and the height of the shorter line.
4. Mathematical computation to calculate the area based on the shorter line's height and the width of the container.
5. Looping using a `while` loop to iterate until a certain condition is met.
6. Efficient variable initialization using `Number.MIN_SAFE_INTEGER` to initialize `maximumArea`.

This approach efficiently explores all possible configurations of the container by utilizing the two-pointer technique and calculating the area based on the shorter line and the width. By gradually moving the pointers towards the center, the algorithm examines potentially higher lines and keeps track of the maximum area encountered.

The time complexity of this solution is O(n) since it uses a single loop to traverse the `height` array. The space complexity is O(1) as the algorithm uses a constant amount of additional space to store variables.

**Source: https://leetcode.com**

- [Go back](../readme.md)
