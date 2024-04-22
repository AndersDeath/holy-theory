---
title: Divide Two Integers
tags: ["training", "task"]
languages: ["typescript"]
---

# Divide Two Integers

```typescript
function divide(dividend: number, divisor: number): number {
  let did = Math.abs(dividend);
  let dis = Math.abs(divisor);
  let sign = (divisor > 0 && dividend > 0) || (divisor < 0 && dividend < 0);
  let res = 0;
  let arr = [dis];

  if (dividend === 0 || did < dis) return 0;
  if (divisor === -1 && dividend === -2147483648) return 2147483647;
  if (dis === 1) return divisor > 0 ? dividend : -dividend;

  while (arr[arr.length - 1] < did)
    arr.push(arr[arr.length - 1] + arr[arr.length - 1]);

  for (var i = arr.length - 1; i >= 0; i--) {
    if (did >= arr[i]) {
      did -= arr[i];
      res += i === 0 ? 1 : 2 << (i - 1);
    }
  }

  return sign ? res : -res;
}
```

**Solution:**

1. **Get Absolute Values:**

   - Calculate the absolute values of `dividend` and `divisor` using `Math.abs()`.

2. **Determine Sign:**

   - Determine the sign of the result based on the signs of `dividend` and `divisor`.

3. **Initialize Result and Array:**

   - Initialize the result (`res`) to 0.
   - Create an array `arr` containing the divisor.

4. **Handle Special Cases:**

   - Check if the dividend is 0 or if `did` (absolute value of dividend) is less than `dis` (absolute value of divisor). In these cases, return 0.
   - Handle a special case where the divisor is -1 and the dividend is -2147483648, returning 2147483647.
   - If the divisor is 1, return the dividend or its negation based on the sign of the divisor.

5. **Calculate Powers of Divisor:**

   - Use a while loop to calculate powers of the divisor and store them in the array until the last element is greater than or equal to `did`.

6. **Iterate Through Array to Calculate Result:**

   - Iterate through the array in reverse order.
   - For each element in the array, subtract it from `did` if `did` is greater than or equal to the element.
   - Update the result accordingly.

7. **Apply Sign and Return Result:**
   - Apply the determined sign to the result and return the final result.
