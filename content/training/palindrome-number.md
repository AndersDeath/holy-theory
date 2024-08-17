---
title: Palindrome number
tags: ["training", "task"]
languages: ["java"]
---

# Palindrome number

```java
 class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0) {
            return false;
        }
        int number = x;
        int reverse = 0;
        while(number > 0) {
            reverse = reverse * 10 + number % 10;
            number /= 10;
        }
        return x == reverse;
    }
}
```

The `Solution` class contains a method `isPalindrome` that determines whether a given integer `x` is a palindrome or not.

Here's how the method works:

1. It first checks if the input integer `x` is negative. If it's negative, it immediately returns `false` because negative numbers cannot be palindromes.

2. It creates two integer variables: `number` (initialized with the value of `x`) and `reverse` (initialized with `0`). The `number` variable will be used to extract the digits from the input integer, and the `reverse` variable will be used to build the reversed number.

3. It enters a loop that continues as long as `number` is greater than `0`. Inside the loop:

   - It updates the `reverse` variable by multiplying it by 10 and adding the last digit of `number` (`number % 10`).
   - It divides the `number` by 10 to remove the last digit.

4. After the loop finishes, the value of `reverse` will be the integer obtained by reversing the digits of the input `x`.

5. Finally, it compares the original input `x` with the reversed value `reverse`. If they are equal, it means the input integer is a palindrome, and the method returns `true`. Otherwise, it returns `false`.

**Techniques Used:**

- **Looping and Arithmetic Operations:** The method uses a loop to reverse the digits of the input integer by repeatedly extracting the last digit and updating the reverse value.

- **Comparisons:** The method compares the original input integer with the reversed value to determine if it's a palindrome.

**Summary:**

The `isPalindrome` method in the `Solution` class checks if a given integer is a palindrome by reversing its digits and comparing it with the original input. It returns `true` if the integer is a palindrome and `false` otherwise.


**Other solutions**

```typescript
function isPalindrome(x: number): boolean {
        if(x < 0) {
            return false;
        }
        let number:number = x;
        let reverse:number = 0;
        while(number > 0) {
            reverse = reverse * 10 + number % 10;
            number = Math.floor(number / 10);
        }
        return x === reverse;
};
```

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
        if(x < 0) {
            return false;
        }
        let number = x;
        let reverse = 0;
        while(number > 0) {
            reverse = reverse * 10 + number % 10;
            number = Math.floor(number / 10);
        }
        return x === reverse;
};
```