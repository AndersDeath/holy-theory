---
title: Pairwise
tags: ['algorithms', 'merge', 'sort']
languages: ['typescript']
---
# Pairwise
```typescript
export function pairwise(arr:number[], arg:number) {
    const index = [];

    for (let a in arr) {
        let temp = arr[a];

        for (let i = 1; i < arr.length; i++) {
            let temp2 = arr[i];
            if (temp + temp2 === arg && i > +a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1) {
                index.push(+a, +i);
                break;
            }
        }
    }
    if (index.length >= 1) {
        const addAll = (a: any, b: any) => {
            return a + b;
        };

        return index.reduce(addAll);
    } else
        return 0;
}

let res = pairwise([1, 3, 2, 4], 4);
console.log(res);

```

The `pairwise` function takes an array of integers `arr` and an integer `arg` as input, and it returns the sum of the indices of pairs in the array that add up to the given `arg`.

Here's how the function works:

1. It initializes an empty array `index` to store the indices of pairs that satisfy the condition.

2. It uses a nested loop to iterate over each element in the array. The outer loop iterates over the elements with index `a`, and the inner loop iterates over the elements starting from index `i = 1`. This is done to find pairs that haven't been considered before.

3. Inside the inner loop, it calculates the sum of the current element `temp` and the element at index `i` (`temp2`). If the sum is equal to the target `arg`, and the indices `i` and `a` are valid (i.e., `i > +a`), and the indices `a` and `i` are not already present in the `index` array, then it adds both `a` and `i` to the `index` array and breaks out of the loop.

4. After finding all the valid pairs, it checks if there is at least one pair in the `index` array.

5. If there are pairs in the `index` array, it defines a helper function `addAll` that takes two arguments and returns their sum. Then, it uses the `reduce` function with the `addAll` function to calculate the sum of all the indices in the `index` array and returns the result.

6. If there are no valid pairs, it returns 0.

7. Finally, it calls the `pairwise` function with the example input `[1, 3, 2, 4]` and `4`, and logs the result to the console.

**Techniques Used:**

- **Nested Loops:** The function uses nested loops to compare each pair of elements in the array to find pairs with the desired sum.

- **Array Manipulation:** The function manipulates the `index` array to keep track of the indices of valid pairs.

- **Reduce Function:** The function uses the `reduce` function to calculate the sum of the indices in the `index` array.

**Summary:**

The `pairwise` function effectively finds pairs of elements in the array that add up to the given target `arg`, calculates the sum of their indices, and returns the result. It uses nested loops, array manipulation, and the `reduce` function to achieve this.

* [Go back](../readme.md)