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
* [Go back](../readme.md)
