---
title: Hamming Distance
tags: ['training', 'task']
languages: ['java']
---
# Hamming Distance

```java

class Solution {
    public int hammingDistance(int x, int y) {
        int xor = x^y;
        int count = 0;
        while (xor > 0) {
            if ((xor&1) == 1) {
                count ++;
            }
            xor = xor >> 1;
        }
        return count; 
    }
}
```

The code is a Java solution to calculate the Hamming distance between two integers `x` and `y`. The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Here's a step-by-step explanation of the code:

1. `public int hammingDistance(int x, int y)`: This is the method that calculates the Hamming distance between the two integers `x` and `y`.

2. `int xor = x ^ y;`: This calculates the bitwise XOR of `x` and `y` and stores the result in the variable `xor`. The XOR operation results in a number where the bits are set to 1 if the corresponding bits in `x` and `y` are different.

3. `int count = 0;`: This initializes a variable `count` to keep track of the number of set bits (1s) in the `xor` variable.

4. `while (xor > 0) {`: This is a loop that continues as long as the `xor` variable is greater than 0.

5. `if ((xor & 1) == 1) {`: This checks if the least significant bit (LSB) of the `xor` variable is 1 (i.e., the rightmost bit is 1). If it is, it means that the corresponding bits in `x` and `y` are different, and the Hamming distance should be increased.

6. `count++;`: If the LSB is 1, we increment the `count` variable to keep track of the number of different bits.

7. `xor = xor >> 1;`: This right-shifts the `xor` variable by 1 bit, effectively moving to the next bit for comparison in the next iteration of the loop.

8. The loop continues, and the `xor` variable is right-shifted in each iteration to check each bit.

9. When the loop ends, the `count` variable holds the Hamming distance, which represents the number of positions at which the bits in `x` and `y` are different.

10. The method returns the `count`, which is the Hamming distance between `x` and `y`.

Techniques used in the provided solution:

1. Bitwise XOR: The code uses the bitwise XOR (`^`) operation to find the differences between the bits of two integers `x` and `y`. The XOR operation sets the corresponding bits to 1 if they are different between `x` and `y`, and 0 if they are the same.

2. Bitwise AND: The code uses the bitwise AND (`&`) operation in the line `if ((xor & 1) == 1)` to check the least significant bit (LSB) of the `xor` variable. The AND operation with 1 extracts the value of the rightmost bit in `xor`.

3. Right Shift: The code uses right-shift (`>>`) to move to the next bit in the `xor` variable. It right-shifts the bits by one position in each iteration of the loop, allowing the code to check all the bits in `xor`.

4. Counting Set Bits: The code counts the number of set bits (1s) in the `xor` variable using bitwise operations. It increments the `count` variable whenever a set bit is found in `xor`.

* [Go back](../readme.md)