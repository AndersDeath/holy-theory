---
title: 2sum
tags: ["training", "task"]
languages: ["typescript"]
---

# 2Sum

```typescript
function twoSum(nums: number[], target: number): number[] {
    const myMap: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (myMap.has(diff)) {
            return [myMap.get(diff)!, i];
        }
        myMap.set(nums[i], i);
    }
    return null;
};
```

**Solution:**

This function, `twoSum`, solves the problem of finding two numbers in an array (`nums`) that add up to a specified `target`. It returns the indices of these two numbers. Let's break it down:

1. **Map initialization**:  
   `const myMap: Map<number, number> = new Map();`  
   A map `myMap` is created to store key-value pairs, where:
   - The key is the number from the `nums` array.
   - The value is the index of that number in the array.

2. **Iteration over the array**:  
   `for (let i = 0; i < nums.length; i++) {...}`  
   A `for` loop iterates over every number in the `nums` array.

3. **Calculate the difference (`diff`)**:  
   `const diff = target - nums[i];`  
   For each number `nums[i]`, the code calculates `diff`, which is the difference between the `target` and `nums[i]`. This is the number that would need to exist in the array for `nums[i]` to sum up to `target`.

4. **Check if the difference exists in the map**:  
   `if (myMap.has(diff)) {...}`  
   It checks if this `diff` value has already been encountered and stored in the map. If it has, this means that there exists a previous number in the array (`nums[myMap.get(diff)]`) that, together with `nums[i]`, adds up to the `target`.

5. **Return the result**:  
   `return [myMap.get(diff)!, i];`  
   If the `diff` is found in the map, it returns an array with two indices: the index of the `diff` (retrieved from the map), and the current index `i`.

6. **Update the map**:  
   `myMap.set(nums[i], i);`  
   If the `diff` is not found in the map, the current number `nums[i]` and its index `i` are added to the map for future reference.

7. **Return `null` if no solution is found**:  
   If the loop finishes and no pair of numbers adds up to the `target`, the function returns `null`.

**Techniques Used:**

1. **Hash Map (Dictionary) for Lookup**:
   - The `Map` is used to store previously seen numbers and their indices. This allows for constant-time lookup (`O(1)`) to check if a complement (`diff`) exists, making the solution efficient.

2. **Single-pass Iteration**:
   - The algorithm only goes through the array once (`O(n)` time complexity), making it optimal in terms of both speed and space.

3. **Mathematical Subtraction for Complement Calculation**:
   - For each element `nums[i]`, the complement (`diff = target - nums[i]`) is calculated, which represents the value that needs to be found in the array.

4. **Early Return for Efficient Execution**:
   - The function returns as soon as a solution is found, avoiding unnecessary iterations once the pair of numbers is identified.
  

**More solutions**

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> myMap = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            int diff = target - nums[i];
            if(myMap.containsKey(diff)) {
                return new int[] { myMap.get(diff), i};
            }
            myMap.put(nums[i], i);
        }
        return null;
    }
}
```

```typescript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const myMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (myMap.has(diff)) {
            return [myMap.get(diff), i];
        }
        myMap.set(nums[i], i);
    }
    return null;
};
```

```kotlin
class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray? {
        val myMap = mutableMapOf<Int, Int>()
        for (i in nums.indices) {
            val diff = target - nums[i]
            if (myMap.containsKey(diff)) {
                return intArrayOf(myMap[diff]!!, i)
            }
            myMap[nums[i]] = i
        }
        return null
    }
}
```