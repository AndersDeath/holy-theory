# Next Greater Element I

```typescript
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const nextGreaterMap = new Map<number, number>(); 
  const stack: number[] = [];
  
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      const smallerNum = stack.pop();
      nextGreaterMap.set(smallerNum, nums2[i]);
    }
    stack.push(nums2[i]);
  }
  
  const result: number[] = [];
  
  for (let num of nums1) {
    result.push(nextGreaterMap.get(num) || -1);
  }
  
  return result;
};
```

The `nextGreaterElement` function is designed to find the next greater element for each element in `nums1` within the array `nums2`. It uses a stack-based approach and a map to achieve this. Let's break down the function step by step:

1. The function initializes a map named `nextGreaterMap`, which will store the next greater element for each element in `nums2`. It also initializes an empty stack named `stack`.

2. The function then loops through each element in `nums2`.

3. Inside the loop, the function checks if the `stack` is not empty and the current element in `nums2` (`nums2[i]`) is greater than the top element of the `stack`. If this condition is met, it means that the current element is the next greater element for the top element(s) in the stack. The function repeatedly pops elements from the stack and updates their next greater element in the `nextGreaterMap` until the condition is no longer satisfied.

4. After updating the `nextGreaterMap`, the current element is pushed onto the stack.

5. Once the loop through `nums2` is complete, the `nextGreaterMap` will contain the next greater element for each element in `nums2`.

6. The function initializes an empty array named `result`, which will store the next greater elements for each element in `nums1`.

7. The function loops through each element in `nums1`.

8. Inside the loop, the function uses the `nextGreaterMap` to retrieve the next greater element for the current element in `nums1`. If the element is found in the map, it is pushed onto the `result` array. If the element is not found, `-1` is pushed onto the array.

9. After processing all elements in `nums1`, the `result` array will contain the next greater elements for each element.

10. Finally, the function returns the `result` array.

**Techniques Used:**

1. **Stack:** The function uses a stack to keep track of elements in descending order while finding the next greater element in `nums2`.

2. **Map:** The function uses a map (`nextGreaterMap`) to store the next greater element for each element in `nums2`, allowing quick lookups when processing `nums1`.

**Summary:**

The `nextGreaterElement` function efficiently finds the next greater element for each element in `nums1` using a stack-based approach and a map to store the results. It provides a solution with a time complexity of O(N), where N is the length of `nums2`.



