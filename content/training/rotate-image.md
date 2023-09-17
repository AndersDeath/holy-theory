---
title: Rotate image
tags: ['training', 'task']
languages: ['typescript']
---
# Rotate image

```typescript
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    if(matrix == null || matrix.length == 0 || matrix[0].length == 0) return;

    const rows = matrix.length;
    const cols = matrix[0].length;

    for(let first = 0, last = rows - 1; first < last; first++, last --) {
        const tmp = matrix[first];
        matrix[first] = matrix[last];
        matrix[last] = tmp;
    }

    for(let i = 0; i < rows; i++) {
        for(let j = i + 1; j < cols; j++) {
            const tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
};
```
**Description:**
1. **Input Validation**:
   - The function takes a 2D matrix `matrix` as input.
   - It performs initial checks to ensure the matrix is not null, and that it has non-zero dimensions. If any of these conditions is met, the function returns immediately.

2. **Rows and Columns**:
   - The number of rows and columns in the matrix is stored in variables `rows` and `cols`, respectively.

3. **Matrix Vertical Reflection (Step 1)**:
   - A loop iterates over the top half of the matrix's rows (up to `rows / 2`).
   - In each iteration, the rows at index `first` and `last` are swapped using a temporary variable `tmp`.
   - This step effectively reflects the matrix vertically along its horizontal center.

4. **Matrix Transposition (Step 2)**:
   - A nested loop iterates over each element above the main diagonal (where `i < j`).
   - In each iteration, the element at `matrix[i][j]` is swapped with the element at `matrix[j][i]` using a temporary variable `tmp`.
   - This step effectively transposes the matrix along its main diagonal.

5. **In-Place Rotation Completed**:
   - After both steps, the matrix has been rotated 90 degrees clockwise in-place.

**Techniques used:**
1. In-place manipulation of the matrix elements.
2. Swapping elements using temporary variables.

**Algorithm Complexity:**
- Time Complexity: O(N^2), where N is the number of rows or columns in the matrix.
- Space Complexity: O(1), as the operations are performed in-place without using extra space.

This code performs a two-step process: vertical reflection and matrix transposition, to achieve the desired 90-degree clockwise rotation of the given matrix in-place.

* [Go back](../readme.md)