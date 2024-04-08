---
title: Contains Duplicates 2
tags: ["training", "task"]
languages: ["typescript"]
---

# Contains Duplicates 2

```typescript
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const seen: any = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (i - seen.get(nums[i]) <= k) {
      return true;
    }
    seen.set(nums[i], i);
  }
  return false;
}
```

**Solution:**
Below is the step-by-step breakdown of the code:

1. The `containsNearbyDuplicate` function takes an array `nums` and a distance `k` as input.

2. A `Map` object named `seen` is initialized to keep track of previously seen elements and their indices.

3. A `for` loop is used to iterate over the elements of the `nums` array.

4. For each element at index `i`, the code checks if there exists a previous occurrence of the same element within the distance `k` from the current index. This is done by retrieving the index of the previous occurrence from the `seen` Map using `seen.get(nums[i])` and comparing it with the current index `i`.

5. If the condition `i - seen.get(nums[i]) <= k` is satisfied, it means that a duplicate element within the given distance `k` has been found. In such a case, the function returns `true` to indicate the presence of nearby duplicates.

6. If no duplicate element is found within the distance `k`, the current element and its index `i` are added to the `seen` Map using `seen.set(nums[i], i)`. This allows tracking of the latest occurrence of each element.

7. Once the loop completes without finding any duplicates, the function returns `false` to indicate the absence of nearby duplicates.

**Techniques used:**

The following techniques are utilized within the code:

1. Map data structure: A `Map` object named `seen` is used to store previously seen elements and their indices, allowing efficient lookup and retrieval.

2. Iteration: The `for` loop is used to iterate over the elements of the `nums` array.

3. Conditional branching: An `if` statement is used to check the condition `i - seen.get(nums[i]) <= k` and determine whether a duplicate element within the specified distance `k` has been found.

4. Index retrieval and comparison: The code retrieves the index of a previously seen element using `seen.get(nums[i])` and compares it with the current index `i` to check the distance between occurrences.

5. Element and index tracking: The code updates the `seen` Map with the latest occurrence of each element and its index using `seen.set(nums[i], i)`.

The provided solution efficiently checks for nearby duplicates by utilizing a `Map` data structure to store previously seen elements and their indices. By iterating over the array and comparing indices, the algorithm determines whether there are any duplicate elements within the specified distance `k`.

The time complexity of this solution is O(n), where n is the length of the `nums` array, since it requires iterating over the entire array. The space complexity is also O(n) due to the usage of the `seen` Map to store elements and their indices.

**Source: https://leetcode.com**

- [Go back](../readme.md)
