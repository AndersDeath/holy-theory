---
title: Guess Number Higher or Lower
tags: ['training', 'task']
languages: ['typescript']
---
# Guess Number Higher or Lower

```typescript

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let left = 1, right = n

    while(left < right) {
        const mid = left + Math.floor((right-left)/2)
        const current = guess(mid)
        if(current === 0) return mid
        if(current === -1) right = mid
        else left = mid+1
    }
    return left
};

```

The code is an implementation of a binary search algorithm to find the number that is guessed correctly within the range of numbers from 1 to `n`. The `guessNumber` function takes an integer `n` as input and returns the correct number.

Here's a step-by-step explanation of the code:

1. `function guessNumber(n: number): number`: This is the main function that takes an integer `n` as input and returns the correct number guessed within the range from 1 to `n`.

2. `let left = 1, right = n`: This initializes two variables `left` and `right` to represent the leftmost and rightmost boundaries of the search range, respectively. Initially, the range is from 1 to `n`.

3. `while (left < right)`: This is a loop that continues until the `left` and `right` boundaries meet or cross each other.

4. `const mid = left + Math.floor((right - left) / 2)`: This calculates the middle index of the current search range.

5. `const current = guess(mid)`: This calls the `guess` API with the `mid` value to check if the guessed number is correct or not. The `guess` API returns -1 if the guessed number is higher than the picked number, 1 if it's lower, and 0 if the guess is correct.

6. `if (current === 0) return mid`: If the guess is correct (i.e., `current === 0`), we found the correct number, and the function returns `mid`.

7. `if (current === -1) right = mid`: If the guessed number is higher than the picked number (i.e., `current === -1`), we update the `right` boundary to `mid`. This means we narrow down the search range to the left half.

8. `else left = mid + 1`: If the guessed number is lower than the picked number (i.e., `current === 1`), we update the `left` boundary to `mid + 1`. This means we narrow down the search range to the right half.

9. The loop continues, and the search range is reduced in each iteration.

10. When the loop ends, the correct number has been found, and the function returns `left`, which holds the correct number.

Techniques used in the code:
- Binary search: The function `guessNumber` uses binary search to efficiently find the correct number by narrowing down the search range in each iteration.

* [Go back](../readme.md)