
# Queue using two stacks

```typescript
function processData(input) {
  let arr = input.split("\n");
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    let [cmd, value] = arr[i].split(" ");
    if (cmd == 1) {
      stack.push(value);
    } else if (cmd == 2) {
      stack.splice(0, 1);
    } else if (cmd == 3) {
      console.log(stack[0]);
    }
  }
}
```

This JavaScript code defines a function `processData` that processes input commands to perform stack operations. Here's a breakdown of how the code works:

1. The `processData` function takes a single argument `input`, which is expected to be a string containing newline-separated commands.

2. The `input` string is split into an array of strings `arr` using the newline character as the delimiter.

3. A stack (`stack`) is initialized to hold elements.

4. A loop iterates over each element in the `arr` array:

   - Each element in `arr` is split into two parts: `cmd` and `value`, using the space character as the delimiter.
   - If `cmd` is `'1'`, it indicates a push operation. The `value` is pushed onto the stack.
   - If `cmd` is `'2'`, it indicates a pop operation. The first element (top) of the stack is removed using the `splice` method.
   - If `cmd` is `'3'`, it indicates a print operation. The value at the top of the stack (index 0) is printed to the console.

5. The code processes each command and performs the specified stack operation based on the `cmd` value.

**Techniques Used:**

- **String Manipulation:** The `split` method is used to split the input string into an array of commands and values.

- **Stack:** The code uses an array (`stack`) to implement a stack data structure and performs push, pop, and print operations.

**Example:**

If the `input` string is:

```
3
1 42
2
3
```

The output will be:

```
42
```

This is because the commands `1 42` push `42` onto the stack, the command `2` pops an element from the stack (which is now empty), and the command `3` prints the value `42` that was previously pushed onto the stack.

Please note that the provided code assumes valid input and does not include error handling for cases where commands are invalid or the stack is empty during a pop operation.

- [Go back](../readme.md)
