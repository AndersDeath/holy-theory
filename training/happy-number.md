---
title: Happy Number
tags: ["training", "task"]
languages: ["typescript"]
---

# Happy Number

```typescript
function isHappy(n: number): boolean {
  let slow = n;
  let fast = getNextSum(n);
  while (fast !== 1 && slow !== fast) {
    slow = getNextSum(slow);
    fast = getNextSum(getNextSum(fast));
  }
  return fast === 1;
}

const getNextSum = (number) => {
  let sum = 0;
  while (number > 0) {
    let digit = number % 10;
    sum += digit * digit;
    number = Math.floor(number / 10);
  }
  return sum;
};
```

The code is an implementation of the "Happy Number" problem. It determines if a given number is a "happy number" or not. A happy number is defined as a number in which the sum of the squares of its digits eventually becomes 1 after a series of calculations. If the sum never becomes 1, it is not a happy number.

Here's a step-by-step explanation of the code:

1. The `isHappy` function takes an integer `n` as input and returns a boolean indicating whether `n` is a happy number or not.

2. Two variables `slow` and `fast` are initialized with the value of `n`. These variables will be used to detect cycles in the sequence of sums of squares of digits.

3. The `getNextSum` function calculates the sum of the squares of the digits of a given number. It takes an integer `number` as input and returns the sum.

4. In the `isHappy` function, a loop is used to calculate the next sum of squares of digits for both `slow` and `fast` in each iteration. The loop continues until `fast` becomes 1 or until `fast` becomes equal to `slow`, indicating the presence of a cycle.

5. In each iteration of the loop, `slow` is updated by calculating the next sum of squares of digits using the `getNextSum` function.

6. `fast` is updated by calculating two consecutive sums of squares of digits using the `getNextSum` function. It is used to detect cycles more quickly.

7. If the loop exits because `fast` becomes 1, it means that the number `n` is a happy number, and the function returns `true`.

8. If the loop exits because `fast` becomes equal to `slow`, it means that there is a cycle in the sequence of sums, and the number `n` is not a happy number. The function returns `false`.

The techniques used in this code include:

- Mathematical operations to calculate the sum of squares of digits.
- Looping to iterate through the sequence of sums of squares of digits.
- Two pointers (slow and fast) to detect cycles in the sequence. This is also known as the Floyd's cycle-finding algorithm, or the "tortoise and hare" algorithm. It's a well-known technique for detecting cycles in linked lists or sequences. In this case, it helps to efficiently determine whether the number is a happy number or not.

* [Go back](../readme.md)
