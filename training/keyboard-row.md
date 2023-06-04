---
title: Keyboard Row
tags: ['training', 'task']
languages: ['typescript']
---
# Keyboard Row

```typescript
function findWords(words: string[]): string[] {
    const rowMap: Map<string, number> = new Map([
['Q', 1], ['W', 1], ['E', 1], ['R', 1], ['T', 1], ['Y', 1], ['U', 1], ['I', 1], ['O', 1], ['P', 1], ['A', 2], ['S', 2], ['D', 2], ['F', 2], ['G', 2], ['H', 2], ['J', 2], ['K', 2], ['L', 2], ['Z', 3], ['X', 3], ['C', 3], ['V', 3], ['B', 3], ['N', 3], ['M', 3]
    ]);

    const result: string[] = [];

    for (const word of words) {
        if (isInSameRow(word.toUpperCase(), rowMap)) {
            result.push(word);
        }
    }

    return result;
}

function isInSameRow(word: string, rowMap: Map<string, number>): boolean {
    if (word.length <= 1) {
        return true;
    }

    const rowNumber: number = rowMap.get(word[0]) || 0;

    for (let i = 1; i < word.length; i++) {
        const currentChar: string = word[i];
        const currentRowNumber: number = rowMap.get(currentChar) || 0;

        if (currentRowNumber !== rowNumber) {
            return false;
        }
    }

    return true;
}

```
* [Go back](../readme.md)