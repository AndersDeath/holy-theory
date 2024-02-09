---
title: Simple text editor
tags: ["training", "task"]
languages: ["javascript"]
---

# Simple text editor

```javascript
function processData(input) {
  const [numOps, ...queries] = input.split("\n");
  const undoStack = [];
  let str = "";

  for (let query of queries) {
    const [op, param] = query.split(" ");

    switch (op) {
      case "1":
        undoStack.push(str);
        str += param;
        break;
      case "2":
        undoStack.push(str);
        str = str.substring(0, str.length - Number(param));
        break;
      case "3":
        console.log(str[Number(param) - 1]);
        break;
      case "4":
        str = undoStack.pop();
        break;
    }
  }
}
```

**Description:**

1. **Input Parsing**:

   - The `processData` function takes a string `input` as input and processes it to perform various string manipulation operations.

2. **Operations and Stack**:

   - The input is split into an array of lines, where the first line contains the number of operations (`numOps`), and the remaining lines contain the actual queries.
   - A stack named `undoStack` is used to keep track of the history of string changes to support the "undo" operation.

3. **String Manipulation Operations**:
   - The code iterates over each query using a loop and splits the query into an operation `op` and a parameter `param`.
   - Depending on the operation, the following actions are performed:
     - `"1"`: Appends the parameter `param` to the current string `str` and pushes the current `str` onto the `undoStack`.
     - `"2"`: Removes the last `param` characters from the current string `str` and pushes the current `str` onto the `undoStack`.
     - `"3"`: Outputs the character at the `(param - 1)` index of the current string `str`.
     - `"4"`: Restores the previous string state by popping from the `undoStack` and assigning it to `str`.

**Techniques used:**

1. Stack data structure for maintaining a history of string changes.
2. String manipulation and substring operations.

**Algorithm Complexity:**

- Time Complexity: O(Q \* M), where Q is the number of queries and M is the average length of the string being manipulated.
- Space Complexity: O(Q \* M), due to the space used by the `undoStack` to store previous string states.

This code efficiently processes a series of string manipulation operations, including appending, removing, and retrieving characters, while providing support for undoing previous operations. It demonstrates the use of a stack to maintain history and perform string manipulations.
