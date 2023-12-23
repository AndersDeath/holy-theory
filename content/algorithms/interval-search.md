---
title: Interval search
tags: ['search', 'algorithms', 'binary']
languages: ['typescript', 'java', 'python']
sort: 700
---
# Interval search

```typescript

type Interval = [number, number];

function intervalSearch(intervals: Interval[], queryInterval: Interval): number[] {
  const result: number[] = [];

  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const [queryStart, queryEnd] = queryInterval;

    if (start <= queryEnd && end >= queryStart) {
      result.push(i); 
    }
  }

  return result;
}
```
