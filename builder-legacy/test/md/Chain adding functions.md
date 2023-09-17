# Chain adding functions

Multiple calls:

add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15

Single call:
add(1); // 1

Mixed thing:
let addTwo = add(2);
addTwo; // 2
addTwo + 5; // 7
addTwo(3); // 5
addTwo(3)(5); // 10

```typescript
function add(x: number): any {
    let sum = x;
    function f(y: number) {
      sum += y;
      return f;
    }
    f.toString = function() {
      return sum;
    };
    return f;
  }
```

The provided code defines a function `add` that returns a special function `f` with a cumulative behavior. Each time `f` is called with a parameter `y`, it adds `y` to the accumulated sum `sum` and returns `f` itself, allowing for chaining multiple function calls. The `toString` method is overridden to return the current value of `sum` when `f` is coerced to a string.

Here's a step-by-step breakdown of the code:

1. The `add` function is defined, which takes a parameter `x` of type number.

2. Inside the `add` function, a local variable `sum` is initialized with the value of `x`. This variable will hold the accumulated sum.

3. The function `f` is defined inside the `add` function. It takes a parameter `y` of type number.

4. Within `f`, the `sum` variable is updated by adding `y` to it (`sum += y`).

5. The `f` function returns itself, allowing for chaining multiple function calls.

6. The `toString` method is defined for the `f` function. It overrides the default `toString` method and returns the value of `sum` when `f` is coerced to a string.

7. Finally, the `f` function is returned from the `add` function.

This code implements a concept called "currying" where functions are transformed to take multiple arguments by returning a series of functions that each take one argument. The returned function `f` allows for a fluent syntax where multiple numbers can be added together by calling `add(x)(y)(z)...` and the final value can be obtained by coercing `add(x)(y)(z)...` to a string.

Example usage:

```typescript
const result = add(1)(2)(3)(4).toString();
console.log(result); // Output: 10
```

In this example, the `add` function is called with the initial value of `1`, and then `f` is repeatedly called with subsequent values `2`, `3`, and `4`. The cumulative sum is `1 + 2 + 3 + 4 = 10`. When `toString()` is called on the returned function, it returns the string representation of the accumulated sum, which is `"10"`.



