---
title: Island Perimeter
tags: ['training', 'task']
languages: ['typescript']
---
# Island Perimeter

```typescript
function islandPerimeter(grid: number[][]): number {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4; 

        if (j > 0 && grid[i][j - 1] === 1) {
          perimeter -= 2;
        }

        if (i > 0 && grid[i - 1][j] === 1) {
          perimeter -= 2;
        }
      }
    }
  }

  return perimeter;
};
```

The code is a TypeScript function that calculates the perimeter of an island represented by a grid. The grid is a two-dimensional array where each cell contains either 0 or 1. The function calculates the perimeter of the island by counting the number of sides that form the boundary of the island.

Here's a step-by-step explanation of the code:

1. The function `islandPerimeter` takes a single parameter `grid`, which is a 2D array representing the island.

2. It initializes the `perimeter` variable to 0. This variable will hold the final perimeter count.

3. The code then uses nested loops to iterate through each cell in the grid. The outer loop iterates through the rows, and the inner loop iterates through the columns.

4. For each cell `(i, j)` in the grid, if it is land (i.e., `grid[i][j]` is equal to 1), the perimeter is increased by 4. This is because each land cell contributes 4 sides to the perimeter.

5. The code then checks adjacent cells to see if they are also land cells. If the cell to the left `(i, j - 1)` is also land, then the perimeter is decreased by 2. Similarly, if the cell above `(i - 1, j)` is also land, the perimeter is decreased by 2. This adjustment is made because each common side between two adjacent land cells contributes 2 sides to the total perimeter.

6. The iteration continues until all cells in the grid have been visited.

7. Finally, the function returns the calculated `perimeter`, which represents the total perimeter of the island.

Techniques used in this code include:
- Nested loops to iterate through a 2D array.
- Conditional statements to check cell values and adjust perimeter accordingly.


* [Go back](../readme.md)