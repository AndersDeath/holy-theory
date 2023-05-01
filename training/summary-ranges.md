---
title: Summary Ranges
tags: ['training', 'task']
languages: ['typescript']
---
# Summary Ranges

```typescript
function summaryRanges(nums: number[]): string[] {
    const output: any[] = []

    for (let i = 0; i < nums.length; ++i) {
      let begin = nums[i];
      while (i + 1 < nums.length && nums[i] == nums[i + 1] - 1) {
        ++i;
      }
       
      let end = nums[i];
      if (begin == end) {
        output.push(begin.toString());
      } else
        output.push(begin.toString() + "->" + end);
    }

    return output;
};
```
* [Go back](../readme.md)