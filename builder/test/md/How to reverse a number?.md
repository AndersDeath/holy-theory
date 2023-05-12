# How to reverse a number?
---
# How to reverse a number?

To invert a number in Java, you need to divide the number by 10 in the loop until it equals 0. And in the body of the loop find the remainder of the division by 10 and add to the result from the previous step, increased by a factor of 10.

```java
    int number = 12132;
    int reverse = 0;
    while(number > 0) {
        reverse = reverse * 10 + number % 10;
        number /= 10;
    }
```

* [Go back](../readme.md)