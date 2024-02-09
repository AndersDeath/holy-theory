
# Pairs

```typescript
function pairs(k: number, arr: number[]): number {
  arr.sort((a, b) => a - b);
  let output = 0;
  let i = 0;
  let j = 0;
  while (j < arr.length) {
    let difference = arr[j] - arr[i];
    if (difference === k) {
      output++;
      j++;
      i++;
    } else if (difference > k) {
      i++;
    } else if (difference < k) {
      j++;
    }
  }
  return output;
}
```

The `pairs` function takes an integer `k` and an array of integers `arr` as input, and it returns the count of pairs of integers from the array whose absolute difference is equal to `k`.

Here's how the function works:

1. It first sorts the input array `arr` in ascending order using the `sort` method and a comparator function.

2. It initializes variables `output` to 0, `i` to 0, and `j` to 0. These variables are used to keep track of the indices of the elements being compared.

3. It enters a `while` loop that continues as long as the `j` index is less than the length of the array.

4. Inside the loop, it calculates the absolute difference between the elements at indices `i` and `j`, which is `arr[j] - arr[i]`.

5. If the difference is equal to `k`, it means a valid pair is found, so it increments the `output` counter and increments both `i` and `j` indices to explore the next possible pair.

6. If the difference is greater than `k`, it increments the `i` index to move towards a smaller difference.

7. If the difference is less than `k`, it increments the `j` index to move towards a larger difference.

8. The loop continues until all possible pairs have been considered.

9. Finally, the function returns the value of the `output` counter, which represents the count of pairs with an absolute difference of `k`.

**Techniques Used:**

- **Array Sorting:** The function sorts the input array in ascending order to make it easier to find pairs with a specific difference.

- **Two-Pointers Approach:** The function uses two pointers, `i` and `j`, to traverse the sorted array and find pairs with the desired difference.

**Summary:**

The `pairs` function effectively counts and returns the number of pairs of integers in the sorted array that have an absolute difference of `k`. It uses array sorting and a two-pointers approach to achieve this efficiently.

