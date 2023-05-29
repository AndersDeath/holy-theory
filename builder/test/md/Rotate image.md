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
