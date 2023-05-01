---
title: Word search
tags: ['training', 'task']
languages: ['typescript']
---
# Word search

```typescript
function exist(board: string[][], word: string): boolean {
    const row = board.length;
    const col = board[0].length;
    let index = 0;
    for(let i = 0; i < row; i++) {
        for(let j = 0; j< col; j++){
            if(backtrack(board, word, i,j,index, row, col)) {
                return true
            }
        }
    }
    return false;
};

function backtrack(board, word, i, j,index, row, col) {
    if(index === word.length) return true;
    if(i < 0 || j < 0 || i === row || j === col || board[i][j] !== word[index] || board[i][j] == '#') return false;

    let t = board[i][j];
    board[i][j] = '#';

    let top = backtrack(board, word, i -1, j, index + 1, row, col);
    let right = backtrack(board, word, i, j + 1, index + 1, row, col);
    let bottom = backtrack(board, word, i + 1, j, index + 1, row, col);
    let left = backtrack(board, word, i, j - 1, index + 1, row, col);

    board[i][j] = t;

    return top || right || bottom || left;

}
```
* [Go back](../readme.md)