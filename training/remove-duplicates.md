# Remove duplicates

```java
class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums.length == 0) {
            return 0;
        }
        int i = 0, j = 0;
        nums[j] = nums[i];
        for(i = 1; i < nums.length; i++) {
            if(nums[j] != nums[i]) {
                j = j + 1;
                nums[j] = nums[i];
            }
        }
        return j + 1;
    }
}
```
* [Go back](../readme.md)
