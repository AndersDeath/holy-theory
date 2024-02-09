
# Times function in JS

```javascript
const times = (func, n) => {
  Array.from(Array(n)).forEach(() => {
    func();
  });
};

times(() => {
  randomFunction();
}, 3);
```

- **Input**:

  - `func`: A function to be executed `n` times.
  - `n`: The number of times the `func` function should be executed.

- **Output**: None (as it performs actions but doesn't return any value).

1. **Define the `times` Function**:

   - Create a function named `times` that takes two arguments: `func` and `n`.

2. **Execute the Function `n` Times**:
   - Create an array of length `n` using `Array.from(Array(n))`.
   - Use the `forEach` method to iterate over the array and execute the `func` function for each iteration.
   - The `randomFunction()` is called within each iteration, simulating the execution of a random function.

**Techniques Used**:

- **Higher-Order Function**: The `times` function takes another function as an argument and executes it a specified number of times.
- **Array Iteration**: Using the `forEach` method to iterate over an array.

**Algorithm**:

1. Define the `times` function that takes `func` and `n` as arguments.
2. Create an array of length `n` using `Array.from(Array(n))`.
3. Iterate over the array using the `forEach` method.
4. Inside each iteration, call the `func` function.

**Time Complexity**:

- The time complexity of the `times` function is O(n) due to the iteration.

**Space Complexity**:

- The space complexity is O(n) due to the array created using `Array.from(Array(n))`.
