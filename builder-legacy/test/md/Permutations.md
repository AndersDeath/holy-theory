
# Permutations

```typescript
function permute(nums: number[]): number[][] {
  let output = [];
  dfs(nums, 0, output);
  return output;
}

function dfs(nums, index, output) {
  if (index == nums.length) {
    let l = [...nums];
    output.push(l);
  } else {
    for (let j = index; j < nums.length; j++) {
      let tmp = nums[index];
      nums[index] = nums[j];
      nums[j] = tmp;

      dfs(nums, index + 1, output);
      tmp = nums[index];
      nums[index] = nums[j];
      nums[j] = tmp;
    }
  }
}
```

The code defines a recursive algorithm to generate all possible permutations of a given array of numbers `nums`.

Here's how the code works:

1. The `permute` function takes an array `nums` as input and initializes an empty array `output` to store the generated permutations. It then calls the `dfs` function to start the recursive process.

2. The `dfs` function performs depth-first search to generate permutations. It takes three parameters: `nums` (the array of numbers), `index` (the current index being considered), and `output` (the array to store permutations).

3. The base case of the recursion is when `index` is equal to the length of the `nums` array. In this case, a copy of the `nums` array is added to the `output` array.

4. If the base case is not met, the function iterates over the remaining elements in the array starting from index `j`. It swaps the element at index `index` with the element at index `j` to generate a new permutation.

5. The function then recursively calls itself with `index + 1` to generate permutations for the remaining elements.

6. After the recursive call, the elements are swapped back to their original positions to backtrack and explore other possibilities.

7. Overall, the code uses a depth-first search approach to generate all permutations of the input array `nums`.

**Techniques Used:**

- **Recursion:** The code uses recursion to systematically generate all possible permutations of the input array.

- **Backtracking:** The swapping of elements and then swapping them back after the recursive call is a backtracking technique to explore different possibilities.

**Summary:**

The `permute` function generates all possible permutations of a given array of numbers using a depth-first search and backtracking approach. It starts with the `dfs` function, which explores different element positions and swaps them to create permutations. The base case is reached when all positions are filled, and a copy of the current permutation is added to the output array.

