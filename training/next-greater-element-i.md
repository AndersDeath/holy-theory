---
title: Next Greater Element I
tags: ['training', 'task']
languages: ['typescript']
---
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

* [Go back](../readme.md)
