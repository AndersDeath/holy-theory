---
title: Letter Combinations of a Phone Number
tags: ["training", "task"]
languages: ["typescript"]
---

# Letter Combinations of a Phone Number

```typescript
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  const digitMap: { [key: string]: string[] } = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  const result: string[] = [];

  function backtrack(combination: string, index: number) {
    if (index === digits.length) {
      result.push(combination);
      return;
    }

    const currentDigit = digits[index];
    const letters = digitMap[currentDigit];
    for (const letter of letters) {
      backtrack(combination + letter, index + 1);
    }
  }

  backtrack("", 0);
  return result;
}
```

**1. Input Validation:**

- The function takes a string of digits as input.

**2. Base Case Check:**

- If the input `digits` string is empty, the function returns an empty array, as there are no combinations to generate.

**3. Digit to Letter Mapping:**

- Create a mapping of digits to their corresponding letters according to the telephone keypad. For example, '2' corresponds to ['a', 'b', 'c'].

**4. Initialize Result Array:**

- Initialize an empty array called `result` to store the final combinations.

**5. Backtracking Function:**

- Implement a recursive backtracking function. This function takes two parameters:
  - `combination`: A string representing the current combination being constructed.
  - `index`: An integer representing the index of the current digit in the input `digits` string.

**6. Recursive Backtracking:**

- The backtracking function proceeds recursively, exploring all possible combinations.
- If the `index` becomes equal to the length of the input `digits` string, the current `combination` is complete and is added to the `result` array.
- If the `index` is not at the end of the `digits` string, get the letters corresponding to the current digit from the `digitMap`.
- For each letter obtained, append it to the current `combination` and make a recursive call to the backtracking function with the updated `combination` and the next index (`index + 1`).

**7. Exploration and Recursion:**

- The recursive calls explore all possible combinations by trying different letters for each digit in the input string.
- The backtracking approach ensures that all possible combinations are explored.

**8. Final Result:**

- After backtracking, the `result` array contains all valid letter combinations.
- Return the `result` array as the output of the function.
