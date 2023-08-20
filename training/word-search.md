---
title: Word search
tags: ["training", "task"]
languages: ["typescript"]
---

# Word search

```typescript
function exist(board: string[][], word: string): boolean {
  const row = board.length;
  const col = board[0].length;
  let index = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (backtrack(board, word, i, j, index, row, col)) {
        return true;
      }
    }
  }
  return false;
}

function backtrack(board, word, i, j, index, row, col) {
  if (index === word.length) return true;
  if (
    i < 0 ||
    j < 0 ||
    i === row ||
    j === col ||
    board[i][j] !== word[index] ||
    board[i][j] == "#"
  )
    return false;

  let t = board[i][j];
  board[i][j] = "#";

  let top = backtrack(board, word, i - 1, j, index + 1, row, col);
  let right = backtrack(board, word, i, j + 1, index + 1, row, col);
  let bottom = backtrack(board, word, i + 1, j, index + 1, row, col);
  let left = backtrack(board, word, i, j - 1, index + 1, row, col);

  board[i][j] = t;

  return top || right || bottom || left;
}
```

- **Inputs**:

  - `board`: A 2D array of characters representing the board.
  - `word`: The target word to search for in the board.

- **Output**:
  - A boolean value indicating whether the given `word` exists in the `board`.

1. **Board Dimensions**:

   - Get the number of rows (`row`) and columns (`col`) of the board.

2. **Main Function - `exist`**:

   - Initialize `index` to keep track of the current character being checked in the `word`.
   - Loop through each cell in the `board`:
     - For each cell at `(i, j)`, call the `backtrack` function to search for the `word` starting from this cell.
     - If `backtrack` returns `true`, the `word` is found, so return `true`.

3. **Backtracking Function - `backtrack`**:

   - Base Cases:
     - If `index` reaches the length of the `word`, return `true` as the word has been completely found.
     - If `(i, j)` is out of bounds or the character at `(i, j)` does not match the current character in the `word`, or the cell has been visited (`'#'`), return `false`.

4. **Mark Cell as Visited**:

   - Store the value of `board[i][j]` in `t` and replace it with `'#'` to mark the cell as visited.

5. **Recursion**:

   - Recursively check the four possible directions (top, right, bottom, left) from the current cell using `backtrack`. Pass the updated `index` and the new `(i, j)` coordinates.
   - If any of the recursive calls returns `true`, the word is found, so return `true`.

6. **Restore Cell Value**:

   - After exploring all possible directions, restore the original value of `board[i][j]`.

7. **Return**:

   - Return the result of logical OR operation between the four direction checks. If any of them returns `true`, then `true` is returned to the previous recursive call.

8. **Final Output**:
   - If none of the cell-based `backtrack` calls in the `exist` function returns `true`, then return `false`, indicating that the word was not found in the board.

**Techniques Used**:

- **Backtracking**: The algorithm explores all possible paths in the board while considering constraints and choices.
- **2D Array Traversal**: The code uses nested loops to traverse through the cells of the 2D board.

**Algorithm**:

1. Get the dimensions of the board.

2. Loop through each cell in the board using nested loops:

   - For each cell `(i, j)`, call the `backtrack` function to search for the word starting from this cell.
   - If `backtrack` returns `true`, return `true` as the word is found.

3. The `backtrack` function performs the recursive backtracking search for the word:

   - Base cases are checked first to terminate the recursion.
   - If the base cases are not met, the current cell is marked as visited and the search continues recursively in the four possible directions.
   - After exploring all directions, the cell value is restored, and the result of direction checks is returned.

4. The `exist` function returns `false` if no cell-based backtrack call returns `true`.

**Time Complexity**:

- The worst-case time complexity is O(N _ M _ 4^k), where N and M are the dimensions of the board and k is the length of the word. This is because the algorithm tries all possible paths in the board, and each path can have at most 4^k branches.

**Space Complexity**:

- The space complexity is O(k), where k is the length of the word. This is due to the recursive call stack depth.

* [Go back](../readme.md)
