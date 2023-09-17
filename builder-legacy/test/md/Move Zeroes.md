# Move Zeroes

```typescript
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
   let j = 0;
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] !== 0) {
            if (i != j) {
                let tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
            }
            j++;
        }
    }
};
```

The given function `moveZeroes` is designed to move all the zeroes in an array to the end while preserving the relative order of the non-zero elements. Here's a step-by-step explanation of how the function works:

1. The function initializes two pointers, `i` and `j`, both starting at 0. The pointer `i` iterates through the array to find non-zero elements, while the pointer `j` keeps track of the position where the next non-zero element should be placed.

2. The function enters a loop that iterates through each element in the `nums` array.

3. For each element, if it is not equal to zero (`nums[i] !== 0`), the function checks if the current positions of `i` and `j` are different (`i !== j`). If they are different, it means that a non-zero element needs to be moved to the position indicated by `j`.

4. The function then swaps the element at position `i` with the element at position `j`. This effectively moves the non-zero element to the correct position while maintaining the relative order of non-zero elements.

5. After swapping, the pointer `j` is incremented by 1 to indicate that the next non-zero element should be placed at the next position.

6. The loop continues until all elements have been processed.

7. Once the loop is complete, all non-zero elements have been moved to their correct positions, and the remaining positions from `j` to the end of the array are filled with zeroes.

**Techniques Used:**

1. **Two-Pointers Approach:** The function uses a two-pointers approach to iterate through the array. The pointer `i` finds non-zero elements, and the pointer `j` keeps track of where the next non-zero element should be placed. Swapping is used to move elements to their correct positions.

**Summary:**

The `moveZeroes` function rearranges the elements in the input array `nums` in such a way that all zeroes are moved to the end of the array while preserving the relative order of non-zero elements. It achieves this by using a two-pointers approach and swapping elements as needed.



