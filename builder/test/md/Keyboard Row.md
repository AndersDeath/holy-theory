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
The code is a TypeScript function that takes an array of words and returns an array of words that can be typed using only one row of a keyboard. The function checks if the characters of each word are all located in the same row of the keyboard.

Here's a step-by-step explanation of the code:

1. The `findWords` function takes an array of `words` as a parameter.

2. It initializes a `rowMap` using a `Map` data structure. Each key in the map represents a character, and the corresponding value represents the row number on the keyboard where the character is located.

3. It initializes an empty array called `result` to store the words that can be typed using a single row of the keyboard.

4. The function uses a `for...of` loop to iterate through each `word` in the input `words` array.

5. Inside the loop, it calls the `isInSameRow` function with the uppercase version of the current `word` and the `rowMap`.

6. If the `isInSameRow` function returns `true` for the current `word`, it means that all characters in the word can be typed using the same row of the keyboard. Therefore, the `word` is added to the `result` array.

7. After iterating through all words, the function returns the `result` array.

8. The `isInSameRow` function takes a `word` and the `rowMap` as parameters.

9. If the length of the `word` is less than or equal to 1, the function immediately returns `true` because a word with one or zero characters can be typed using a single row.

10. The function retrieves the row number of the first character of the `word` using the `rowMap`.

11. It then iterates through the remaining characters of the `word` using a `for` loop.

12. For each character, it retrieves its row number from the `rowMap`.

13. If the row number of the current character does not match the row number of the first character, the function returns `false`, indicating that the characters are not in the same row.

14. If the loop completes without returning `false`, it means all characters are in the same row, and the function returns `true`.

Techniques used in this code include:
- Using a `Map` data structure to store keyboard rows and characters.
- Iterating through arrays using `for...of` and `for` loops.
- Converting strings to uppercase using the `toUpperCase` method.
- Checking conditions and returning boolean values.


