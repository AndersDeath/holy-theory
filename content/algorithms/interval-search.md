---
title: Interval search
tags: ['search', 'algorithms', 'binary']
languages: ['typescript', 'java', 'python']
sort: 700
ignore: true
---
# Interval search

An interval search algorithm typically refers to searching for overlapping or containing intervals in a collection of intervals. One common approach for this task is to use an interval tree. Here's an explanation of the Interval Search algorithm using an interval tree:

**How Interval Search Works:**

1. **Construct the Interval Tree:**
   - Begin by constructing an interval tree from the given set of intervals.
   - Each node in the interval tree represents an interval, and the tree is recursively built to efficiently organize and store these intervals.

2. **Search for Overlapping Intervals:**
   - When searching for intervals that overlap with a given interval (query interval), start at the root of the interval tree.

3. **Traverse the Tree:**
   - Traverse the tree, comparing the query interval with the intervals represented by each node.
   - If there is an overlap, the algorithm can either return the overlapping interval(s) immediately or continue searching in both left and right subtrees.

4. **Recursive Search:**
   - Recursively search in the left or right subtree based on the relationship between the query interval and the intervals represented by the current node.
   - Continue this process until all potential overlapping intervals are found.

**Time Complexity:**
   - The time complexity of searching for overlapping intervals using an interval tree is typically O(log n + k), where 'n' is the number of intervals in the tree and 'k' is the number of intervals overlapping with the query interval. The construction of the interval tree initially takes O(n log n) time, but subsequent searches are more efficient. Interval trees are particularly useful when there are many queries for overlapping intervals in a set.

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
