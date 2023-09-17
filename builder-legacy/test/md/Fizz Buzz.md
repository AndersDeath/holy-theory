# Fizz Buzz

```typescript
function fizzBuzz(n: number): string[] {

    let output: any = [];
      for (let i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                output.push("FizzBuzz");
            } else if (i % 3 == 0) {
                output.push("Fizz");
            } else if (i % 5 == 0) {
                output.push("Buzz");
            } else {
                output.push(i.toString());
            }
        }
        return output;
};
```
The function `fizzBuzz` takes an integer `n` as input and returns an array of strings with the following conditions:

1. If the number is divisible by 3 and 5 (i.e., a multiple of 15), it adds "FizzBuzz" to the array.
2. If the number is divisible by 3 (i.e., a multiple of 3), it adds "Fizz" to the array.
3. If the number is divisible by 5 (i.e., a multiple of 5), it adds "Buzz" to the array.
4. Otherwise, it adds the number itself as a string to the array.

Here's a step-by-step explanation of the code:

1. Initialize an empty array called `output` to store the result.

2. Use a `for` loop to iterate from `1` to `n`, inclusive.

3. Inside the loop, check the following conditions:
   - If the current number `i` is divisible by both 3 and 5 (i.e., `i % 15 === 0`), add "FizzBuzz" to the `output` array.
   - Else, if the current number `i` is divisible by 3 (i.e., `i % 3 === 0`), add "Fizz" to the `output` array.
   - Else, if the current number `i` is divisible by 5 (i.e., `i % 5 === 0`), add "Buzz" to the `output` array.
   - If none of the above conditions are true, add the current number `i` as a string to the `output` array.

4. After the loop completes, return the `output` array containing the FizzBuzz sequence for the numbers from `1` to `n`.

The technique used in this code is:
- Iteration: The code uses a `for` loop to iterate through the numbers from `1` to `n`, applying the FizzBuzz conditions and adding the corresponding strings to the `output` array.



