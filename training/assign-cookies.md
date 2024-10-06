---
title: Assign Cookies
tags: ["training", "task"]
languages: ["typescript"]
---

# Assign Cookies

```typescript
function findContentChildren(g: number[], s: number[]): number {
  const sortedG: number[] = g.sort((a, b) => a - b);
  const sortedS: number[] = s.sort((a, b) => a - b);
  let gCount: number = 0;
  let sCount: number = 0;
  while (gCount < sortedG.length && sCount < sortedS.length) {
    if (sortedG[gCount] <= sortedS[sCount]) {
      gCount++;
      sCount++;
    } else {
      sCount++;
    }
  }
  return gCount;
}
```

**Solution:**
Below are the step-by-step explanations of the code:

1. The `findContentChildren` function is defined, which takes two parameters:

   - `g`: an array of numbers representing the greed factor of children.
   - `s`: an array of numbers representing the size of cookies.

2. Two new arrays, `sortedG` and `sortedS`, are initialized to store the sorted versions of arrays `g` and `s` respectively. The sorting is done in ascending order using the `sort` method with a comparator function `(a, b) => a - b`.

3. Two variables, `gCount` and `sCount`, are initialized to 0. They will keep track of the indices being compared in the sorted arrays.

4. A `while` loop is used to iterate while there are elements remaining in both `sortedG` and `sortedS`.

5. Inside the loop, an `if` statement checks if the greed factor of the current child (`sortedG[gCount]`) is less than or equal to the size of the current cookie (`sortedS[sCount]`).

6. If the condition is true, it means the child can be content with the cookie. Therefore, both `gCount` and `sCount` are incremented to move on to the next child and cookie respectively.

7. If the condition is false, it means the current cookie is not enough to satisfy the child's greed. In this case, only `sCount` is incremented to move on to the next cookie.

8. The loop continues until either `gCount` reaches the end of `sortedG` or `sCount` reaches the end of `sortedS`.

9. Once the loop exits, the value of `gCount` represents the maximum number of children that can be content with the available cookies.

10. The value of `gCount` is returned as the result.

**Techniques used:**

The following techniques are utilized within the code:

1. Sorting arrays using the `sort` method with a comparator function.
2. Iterating over arrays using a `while` loop and comparing array indices.
3. Conditional branching using an `if` statement.
4. Incrementing variables to move to the next element in the array.
5. Returning a calculated result.

- [Go back](../readme.md)
