---
title: Ugly Number
tags: ["training", "task"]
languages: ["typescript"]
---

# Ugly Number

```typescript
function isUgly(n: number): boolean {
  if (n == 1) return true;
  if (n <= 0) return false;
  if (n % 2 == 0) return isUgly(n / 2);
  else if (n % 3 == 0) return isUgly(n / 3);
  else if (n % 5 == 0) return isUgly(n / 5);
  else return false;
}
```

- **Input**:

  - `n`: An integer value to determine whether it's an ugly number or not.

- **Output**:
  - A boolean value indicating whether `n` is an ugly number or not.

1. **Check for Base Cases**:

   - If `n` is equal to 1, return `true`, as 1 is considered an ugly number by definition.
   - If `n` is less than or equal to 0, return `false`, as negative or zero values are not considered ugly numbers.

2. **Check Divisibility**:

   - Check if `n` is divisible by 2 using the modulo operator `%`. If it is, call the `isUgly` function recursively with `n / 2`.
   - If `n` is not divisible by 2, check if it's divisible by 3 or 5 in a similar manner and call the `isUgly` function recursively with `n / 3` or `n / 5` respectively.

3. **Return Result**:
   - If `n` is divisible by 2, 3, or 5 and the recursive call for the corresponding divisor returns `true`, then return `true`, indicating that `n` is an ugly number.
   - If none of the conditions are met, return `false`, indicating that `n` is not an ugly number.

**Techniques Used**:

- **Recursion**: The function calls itself with smaller values of `n` to determine whether it's an ugly number or not.

**Algorithm**:

1. Check the base cases:

   - If `n` is 1, return `true`.
   - If `n` is less than or equal to 0, return `false`.

2. Check divisibility:

   - If `n` is divisible by 2, recursively call `isUgly(n / 2)`.
   - If `n` is not divisible by 2, check divisibility by 3 and 5 in the same way.

3. Return the result:
   - If any of the divisibility conditions hold and the corresponding recursive call returns `true`, return `true`.
   - If none of the conditions hold, return `false`.

**Time Complexity**:

- The time complexity depends on the prime factors of `n`, and in the worst case, the function makes multiple recursive calls. The time complexity is proportional to the number of prime factors of `n`.

**Space Complexity**:

- The space complexity is determined by the depth of the recursion stack. In the worst case, the recursion depth could be proportional to `n`. Therefore, the space complexity is O(n).

- [Go back](../readme.md)
