# Convert a Number to Hexadecimal

```java

class Solution {
    public String toHex(int num) {
        if(num == 0) return "0";
        char[] map = {'0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'};
        StringBuilder sb = new StringBuilder();
        while(num != 0){
            sb.insert(0, map[num & 15]);
            num = num >>> 4;
        }
        return sb.toString();
    }
}
```

**Solution:**
Below is the step-by-step breakdown of the code:

1. The `toHex` method takes an integer `num` as input and returns its hexadecimal representation as a string.

2. The code checks if `num` is equal to 0. If it is, the method immediately returns the string "0" since the hexadecimal representation of 0 is "0".

3. An array `map` is initialized with characters representing the hexadecimal digits from 0 to 15. This array allows easy mapping between decimal values and their corresponding hexadecimal characters.

4. A `StringBuilder` object named `sb` is created to build the hexadecimal string.

5. The code enters a `while` loop that continues until `num` becomes 0.

6. Inside the loop, the code performs the following operations:
   - It extracts the last 4 bits of `num` using the bitwise AND operation `num & 15`. The number 15 is represented in binary as 0000 1111, so the AND operation with 15 extracts the rightmost 4 bits.
   - It inserts the hexadecimal character corresponding to the extracted value at the beginning of the `sb` using `sb.insert(0, map[num & 15])`.
   - It right shifts `num` by 4 bits using the logical right shift operator `num >>> 4` to discard the processed bits.

7. After the loop completes, the `sb` contains the hexadecimal representation of the input `num`. It is converted to a string using `sb.toString()` and returned as the result.

**Techniques used:**

The following techniques are utilized within the code:

1. Bitwise operations: The code uses the bitwise AND operation `num & 15` to extract the last 4 bits of `num` and convert them to a hexadecimal digit. It also uses the logical right shift operator `num >>> 4` to discard processed bits during each iteration.

2. StringBuilder: The `StringBuilder` object `sb` is used to efficiently build the hexadecimal string by inserting characters at the beginning.

The provided solution efficiently converts an integer to its hexadecimal representation by extracting the bits and mapping them to their corresponding hexadecimal characters. It utilizes bitwise operations and a `StringBuilder` object to perform the conversion.