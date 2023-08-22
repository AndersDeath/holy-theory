# Binary Watch

```java

class Solution {
    public List<String> readBinaryWatch(int turnedOn) {
        List<String> res = new ArrayList<>();
        for(int h = 0; h < 12; h++){
            for(int m = 0; m < 60; m++){
                if(Integer.bitCount(h) + Integer.bitCount(m) == turnedOn){
                    res.add(String.format("%d:%02d", h, m));
                }
            }
        }
        return res;
    }
}
```

**Solution:**
Below is the step-by-step explanation of the code:

1. The `readBinaryWatch` method is defined as a part of the `Solution` class. It takes an integer `turnedOn` as the input.

2. A new `ArrayList` called `res` is created to store the resulting times on the binary watch.

3. The outer `for` loop iterates over the possible values of the hours (0 to 11).

4. The inner `for` loop iterates over the possible values of the minutes (0 to 59).

5. For each combination of hours and minutes, the condition `Integer.bitCount(h) + Integer.bitCount(m) == turnedOn` is checked. This condition ensures that the total number of turned-on LEDs in the binary representation of hours and minutes combined is equal to `turnedOn`.

6. If the condition is satisfied, the current time is added to the `res` list using `String.format("%d:%02d", h, m)`. The `"%d:%02d"` format is used to represent the time in the HH:MM format with leading zeros for minutes.

7. The loops continue until all possible combinations of hours and minutes are checked.

8. Once the loops exit, the `res` list contains all the valid times where the number of turned-on LEDs matches `turnedOn`.

9. The `res` list is returned as the result.

**Techniques used:**

The following techniques are utilized within the code:

1. Using nested `for` loops to iterate over all possible combinations of hours and minutes.
2. Checking the number of turned-on LEDs in the binary representation using `Integer.bitCount`.
3. Formatting the time string using `String.format`.
4. Adding elements to an `ArrayList`.
5. Returning a calculated result.


