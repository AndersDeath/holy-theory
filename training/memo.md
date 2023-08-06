---
title: Memo
tags: ['training', 'task']
languages: ['typescript']
---
# Memo

```typescript
function memo(func: any) {
    const cache: any = {};
    return (...args: any[]) =>{
        let key = JSON.stringify(args);
        if(cache[key]) {
            return cache[key];
        }
        const value = func.apply(null, args);
        cache[key] = value;
        return value;
    }
}
```

**Function solution:**

The `memo` function is a higher-order function that takes another function `func` as input and returns a new function with memoization applied.

**Memoization** is an optimization technique where the results of expensive function calls are cached and reused if the same inputs occur again. This can significantly improve the performance of functions that are computationally expensive.

Here's how the `memo` function works:

1. Declare an empty object called `cache` to store memoized results.

2. Return an anonymous function that takes any number of arguments (`...args`) using the rest parameter syntax.

3. Convert the arguments into a unique key by using `JSON.stringify(args)` and store it in the `key` variable.

4. Check if the computed result for the given key is already present in the `cache`. If it is, return the cached result.

5. If the result is not in the cache, execute the original function `func` with the provided arguments using the `apply` method (`func.apply(null, args)`) and store the result in the `value` variable.

6. Store the computed value in the `cache` using the generated key.

7. Finally, return the computed value.

**Usage:**

The `memo` function can be used to wrap any expensive or recursive function, and it will ensure that previously computed results are reused for the same set of input arguments.

For example, if you have a recursive Fibonacci function and you want to improve its performance using memoization:

```typescript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memo(fibonacci);

console.log(memoizedFibonacci(10)); // This will be faster than the non-memoized version
```

**Techniques Used:**

1. **Caching/Memoization:** The `memo` function implements the technique of memoization to optimize the performance of expensive or repetitive function calls by caching their results.

**Summary:**

The `memo` function is a higher-order function that adds memoization to another function, allowing it to efficiently cache and reuse computed results for the same input arguments. This can greatly improve the performance of functions that involve expensive computations or recursion.


* [Go back](../readme.md)
