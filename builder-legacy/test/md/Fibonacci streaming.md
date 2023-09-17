# Fibonacci streaming 

```typescript
function fibonacciSequence(): Iterator<number> {
    let index = 0;
    let prev = 0;
    let value = 1;
  
    return {
      next: () => {
        if (index >= Infinity) { 
            return { value: value, done: true }; 
        }
  
        let result = { value, done: false };
        let next = value + prev;
        prev = value;
        value = next;
        index++;
  
        return result;
      }
    }
  }
```

**Solution:**

Step-by-step breakdown of the code:

1. The function `fibonacciSequence` initializes three variables:
   - `index`: Represents the index of the current Fibonacci number in the sequence.
   - `prev`: Represents the previous Fibonacci number in the sequence.
   - `value`: Represents the current Fibonacci number in the sequence.

2. The function returns an object with a `next` method. This method is used to generate the next value in the Fibonacci sequence.

3. The `next` method checks if the `index` is greater than or equal to `Infinity`, which means the sequence has reached a very large value and should be terminated. In such a case, the method returns an object with the current `value` and `done` set to `true`, indicating the end of the sequence.

4. If the `index` is still within a reasonable range, the `next` method proceeds to calculate the next Fibonacci number.

5. The `next` method creates an object `result` with the current `value` and `done` set to `false`.

6. It calculates the next Fibonacci number (`next`) by adding the current `value` to the previous `prev`.

7. It updates the `prev` variable with the current `value` and the `value` variable with the calculated `next`.

8. It increments the `index` to move to the next position in the sequence.

9. The `next` method returns the `result` object, containing the current `value`, and the loop continues to generate the next Fibonacci number.

Summary:

The provided TypeScript function `fibonacciSequence` returns an iterator that generates the Fibonacci sequence. It uses an object with a `next` method to produce the next Fibonacci number in the sequence. The `next` method continuously calculates the next Fibonacci number by adding the current value to the previous one and updates the variables accordingly.

Techniques used:

1. TypeScript: The code is written in the TypeScript programming language, which is a superset of JavaScript with added type annotations.

2. Iterator: The function creates an iterator using an object with a `next` method to generate the Fibonacci sequence.

3. Fibonacci sequence: The function uses the Fibonacci sequence logic to calculate the next number by adding the previous two numbers.

4. Variables: The variables `index`, `prev`, and `value` are used to keep track of the current state and calculate the next Fibonacci number.

5. Infinite sequence: The function can generate Fibonacci numbers until the index reaches a very large value (Infinity).

