
# Power of Four

```typescript
function isPowerOfFour(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  while (n > 3) {
    if (n % 4 != 0) {
      return false;
    }
    n = n / 4;
  }
  return n == 1;
}
```

The provided JavaScript code defines a function `isPowerOfFour` that checks if a given number is a power of 4. Here's how the code works:

1. The function `isPowerOfFour` takes an integer `n` as input.

2. It first checks if `n` is less than or equal to 0. If it is, the function immediately returns `false` since negative numbers and zero are not powers of 4.

3. It enters a `while` loop that continues as long as `n` is greater than 3 (indicating that `n` is at least 4).

4. Inside the loop, it checks if `n` is not divisible by 4. If this condition is met, it means that `n` is not a power of 4, so the function returns `false`.

5. If the `n` is divisible by 4, it divides `n` by 4 to reduce it and potentially continue checking.

6. Once the loop exits, the function checks if `n` is equal to 1. If it is, that means the original number was a power of 4, and the function returns `true`. Otherwise, it returns `false`.

**Techniques Used:**

- **Looping:** The code uses a `while` loop to repeatedly divide `n` by 4 until it becomes less than or equal to 3.

- **Conditional Statements:** The code uses conditional statements to check if `n` is not divisible by 4 and to determine if `n` is equal to 1.

**Summary:**

The `isPowerOfFour` function determines whether a given number is a power of 4 by repeatedly dividing the number by 4 and checking for divisibility and final equality to 1. If the conditions are met, the function returns `true`, indicating that the number is a power of 4; otherwise, it returns `false`.

- [Go back](../readme.md)
