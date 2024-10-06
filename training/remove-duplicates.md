---
title: Remove duplicates
tags: ["training", "task"]
languages: ["java"]
---

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

1. **Input Array Check**: The function `removeDuplicates` takes an array of integers `nums` as input. It first checks whether the length of the array is zero. If so, it returns 0, indicating that there are no elements in the array.

2. **Initialization**: Two integer pointers `i` and `j` are initialized to 0. The variable `j` is used to keep track of the index where unique elements will be placed.

3. **First Element Assignment**: The value of the first element (at index 0) of the input array `nums` is assigned to the first position (index 0) of the array.

4. **Loop Through Array**: A `for` loop is used to iterate through the array starting from index 1 (i = 1) to the end of the array.

5. **Comparing Elements**: Within the loop, the current element at index `i` is compared with the element at index `j`. If they are not equal, it means a new unique element is found.

6. **Storing Unique Elements**: The value of the current element at index `i` is stored in the next position (index `j + 1`) of the array, and `j` is incremented by 1 to mark the new position for the next unique element.

7. **Returning New Length**: After iterating through the array, the length of the array with duplicates removed is given by `j + 1`, where `j` represents the index of the last unique element. This value is returned.

**Techniques Used**:

1. Array Length Check (`nums.length`): Checking the length of an array.
2. Two-Pointer Technique (`i` and `j`): Using two pointers to traverse and manipulate an array.
3. Element Assignment (`nums[j] = nums[i]`): Assigning the value of one array element to another.
4. Looping (`for` loop): Iterating through an array.
5. Element Comparison (`nums[j] != nums[i]`): Comparing two elements in an array.
6. Updating Pointer (`j = j + 1`): Incrementing a pointer to mark the position of the next unique element.
7. Returning Length: Calculating and returning the new length of the array with duplicates removed.

This function removes duplicates from an input array of integers and returns the new length of the array with only the unique elements remaining.
