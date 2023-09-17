# Curry function

```typescript
function curry(func: any) {
    const curried = (...args: any) => {
        if(args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return (...args2: any) => {
                return curried.apply(this, args.concat(args2))
            }
        }
    };
    return curried;
}
```

**Solution:**

Step-by-step breakdown of the code:

1. The `curry` function takes a function `func` as input and returns a curried version of the function.

2. Inside the `curry` function, a new function `curried` is defined using arrow function syntax. This function will be the curried version of the original function.

3. The `curried` function accepts any number of arguments using the rest parameter syntax `...args`. These arguments will be passed to the original function `func`.

4. Inside the `curried` function, a check is performed to determine if the number of arguments passed (`args.length`) is greater than or equal to the expected number of arguments of the original function (`func.length`).

5. If the condition is true:
   - The original function `func` is called using the `apply` method, passing `this` as the context and `args` as the arguments.
   - The result of the function call is returned.

6. If the condition is false:
   - A new function is returned using arrow function syntax. This new function accepts additional arguments `args2`.
   - The `curried` function is recursively called with the combined arguments of `args` and `args2` using the `apply` method.

7. The process of checking the number of arguments and either returning the result or returning a new function is repeated until the required number of arguments is met.

8. The curried function `curried` is returned.

Techniques used:

1. Higher-Order Functions: The `curry` function takes a function `func` as input and returns a new function `curried` as the result.

2. Rest Parameter: The rest parameter syntax `...args` allows the `curried` function to accept any number of arguments and collect them into an array.

3. Arrow Function: The arrow function syntax is used to define the `curried` function, which simplifies the syntax and provides lexical scoping of `this`.

4. Conditional Statements: The code uses a conditional statement to check the number of arguments and determine whether to return the result or a new curried function.

Summary:

The provided solution implements the concept of currying by creating a curried version of a function. It allows the function to be called with a partial set of arguments, returning a new function that accepts the remaining arguments until the required number of arguments is provided.



