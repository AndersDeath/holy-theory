---
title: Climbing stairs
tags: ["training", "task"]
languages: ["typescript"]
---

# Climbing stairs

```typescript
function climbStairs(n: number): number {
  if (n <= 3) {
    return n;
  }

  let a = 3;
  let b = 2;

  for (let i = 0; i < n - 3; i++) {
    a = a + b;
    b = a - b;
  }
  return a;
}
```

**Solution:**
Below is the step-by-step breakdown of the code:

1. The `climbStairs` function takes an integer `n` as input.

2. If `n` is less than or equal to 3, there are `n` distinct ways to climb the stairs. In this case, `n` is directly returned.

3. If `n` is greater than 3, two variables `a` and `b` are initialized. `a` represents the number of distinct ways to reach the current step, and `b` represents the number of distinct ways to reach the previous step.

4. A loop is started from 0 up to `n - 3` (since the cases for `n <= 3` are handled separately).

5. Inside the loop, `a` is updated to the sum of its current value and `b`. This represents the number of distinct ways to reach the current step based on the number of ways to reach the previous step and the step before that.

6. The value of `b` is updated to `a - b`, which becomes the number of distinct ways to reach the previous step for the next iteration.

7. Once the loop completes, the value of `a` represents the total number of distinct ways to climb the stairs with `n` steps.

8. The final value of `a` is returned as the result.

**Techniques used:**

The following techniques are utilized within the code:

1. Conditional branching using `if` statement.
2. Iterative loop using `for` loop.
3. Updating variables to store intermediate results.
4. Mathematical computation to calculate the number of distinct ways.
5. Efficient variable swapping using `a = a + b; b = a - b;`.

This approach uses a dynamic programming-like approach to solve the problem, avoiding the need for recursion or maintaining an array. By iteratively updating the number of ways to reach each step based on the previous steps, the code calculates the total number of distinct ways to climb the stairs.

The time complexity of this solution is O(n) since the loop iterates `n - 3` times. It has a constant space complexity since it only requires two variables to store the intermediate results.

**Source: https://leetcode.com**

- [Go back](../readme.md)
