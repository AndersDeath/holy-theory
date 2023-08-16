---
title: Reshape the Matrix
tags: ['training', 'task']
languages: ['typescript']
---
# Reshape the Matrix

```typescript
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  
  if (m * n !== r * c) {
    return mat;
  }
  
  const reshapedMatrix: number[][] = [];
  let row: number[] = [];
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      row.push(mat[i][j]);
      
      if (row.length === c) {
        reshapedMatrix.push(row);
        row = [];
      }
    }
  }
  
  return reshapedMatrix;
};
```

1. **Input and Matrix Dimensions**: The function `matrixReshape` takes a matrix `mat` and two integers `r` and `c` as input. It aims to reshape the given matrix into a new matrix with `r` rows and `c` columns. It first calculates the dimensions of the input matrix `mat` using `m` for the number of rows and `n` for the number of columns.

2. **Reshaping Validation**: If the total number of elements in the input matrix (`m * n`) is not equal to the total number of elements in the target reshaped matrix (`r * c`), then the reshaping is not possible. In this case, the function returns the original matrix `mat` as it cannot be reshaped.

3. **Reshaped Matrix Initialization**: If the reshaping is possible, an empty array `reshapedMatrix` is created to hold the new matrix. Additionally, an empty array `row` is initialized to temporarily store elements of each row during the reshaping process.

4. **Reshaping Loop**: The function uses nested `for` loops to traverse through each element of the input matrix `mat` row by row. For each element, it adds the element's value to the `row` array.

5. **Row Completion**: After adding an element to the `row` array, it checks if the length of `row` has reached the desired number of columns (`c`). If so, it appends the completed `row` to the `reshapedMatrix` and resets `row` to an empty array.

6. **Returning the Reshaped Matrix**: Once the reshaping process is complete, the function returns the `reshapedMatrix`, which now holds the desired reshaped matrix.

**Techniques Used**:

1. Nested Looping (`for` loop): Iterating through each element of the input matrix and constructing the reshaped matrix row by row.
2. Conditional Statements (`if` statements): Checking whether the reshaping is possible and whether the `row` has reached the desired number of columns.
3. Array Initialization and Manipulation: Creating arrays to store the reshaped matrix and the temporary row during reshaping.
4. Arithmetic Operations (`m * n` and `r * c`): Calculating the total number of elements in the input and reshaped matrices to validate if reshaping is possible.

This function reshapes a given matrix into a new matrix with the specified number of rows and columns, preserving the original order of elements.

* [Go back](../readme.md)
