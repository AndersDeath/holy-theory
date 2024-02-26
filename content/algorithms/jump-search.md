---
title: Jump search
tags: ["search", "algorithms", "jump"]
languages: ["typescript"]
sort: 700
---

# Jump search

Jump Search is a searching algorithm designed for sorted arrays. It is a block-based search algorithm that works by jumping ahead by fixed steps and then linearly searching within the block for the target element. Jump Search combines the efficiency of binary search with the simplicity of linear search.

## How it work:

**Step 1:** Determine the jump size by taking the square root of the array length. This ensures a balanced trade-off between the number of jumps and the linear search within a block.

**Step 2:** Start at the beginning of the array and jump ahead by the calculated jump size until finding a value that is greater than or equal to the target.

**Step 3:** Perform a linear search within the block from the previous jump until finding the target element or determining that it is not present in the block.

**Step 4:** Repeat the process until the entire array is searched or the target element is found.

## Key Characteristics:

**Sorted Array**: Jump search requires the array to be sorted in ascending order. This characteristic is crucial for its operation.

**Block Jumping**: Jump search works by jumping ahead by fixed steps (often referred to as block size or jump size) instead of dividing the search space in half at each step like binary search.

**Optimal Jump Size**: The optimal jump size is usually calculated as the square root of the length of the array. This ensures a balance between the number of jumps and the number of comparisons needed.

**Linear Search Within Blocks**: After jumping to a particular block, jump search performs a linear search within that block to find the exact location of the target element.

**Requires Random Access**: Jump search requires random access to elements in the array. This means it is more suitable for data structures like arrays or lists with efficient random access.

**Adaptive**: Jump search can be adapted to different scenarios by adjusting the jump size. Smaller jump sizes can reduce the number of comparisons but increase the number of jumps, while larger jump sizes have the opposite effect.

**Not Recursive**: Unlike binary search, jump search is typically implemented iteratively rather than recursively.

**Suitable for Large Arrays**: Jump search is particularly suitable for large arrays where binary search might be impractical due to the overhead of sorting or limited memory.

**Balances Efficiency and Simplicity**: Jump search strikes a balance between the simplicity of linear search and the efficiency of binary search, making it a practical choice in scenarios where a trade-off between simplicity and efficiency is acceptable.

**Space Complexity**: Jump search has a space complexity of O(1), meaning it requires only a constant amount of additional space for variables regardless of the size of the array.

**Applications**: Jump search can be useful in scenarios where binary search is not suitable due to memory constraints or when the dataset is relatively large and needs a more efficient search than linear search.

## Applications:

**Search in Databases**: Jump search can be applied in databases to search for records based on certain criteria, especially when the data is stored in sorted arrays or tables. It offers a more efficient alternative to linear search for large datasets.

**File Systems**: In file systems, jump search can be utilized to locate files within directories or to search for specific content within files. This is particularly useful when dealing with large directories or files where linear search would be inefficient.

**Web Indexing**: Jump search can be employed in web indexing algorithms to search for keywords within web pages or documents. It helps optimize search operations by quickly narrowing down the search space.

**Data Compression Algorithms**: Jump search can be used in data compression algorithms to quickly locate patterns or repeated sequences within data streams. This is especially useful in applications like lossless compression where efficiency is crucial.

**Sparse Arrays**: Jump search is effective for searching in sparse arrays where there are large gaps between elements. It helps efficiently navigate through the array while minimizing unnecessary comparisons.

**Database Indexing**: Jump search can be utilized in database indexing structures, such as B-trees or skip lists, to quickly locate entries within the index. It provides a fast method for searching within indexed structures.

**Text Editors and Word Processors**: Jump search can be incorporated into text editors or word processors to implement features like search and find functionality. It allows users to quickly locate specific words or phrases within documents.

**Genetic Sequence Analysis**: In bioinformatics, jump search can be applied to efficiently search for specific patterns or sequences within genetic data. It helps analyze DNA or protein sequences in large datasets.

**Network Routing**: Jump search can be used in network routing algorithms to efficiently search for routes or paths between network nodes. It assists in finding the optimal route while minimizing the number of hops or comparisons.

**Data Mining**: Jump search can be employed in data mining tasks to search for patterns or anomalies within large datasets. It aids in quickly identifying relevant data points or clusters.

## Time Complexity:

The time complexity of Jump Search is -add formula-,, where-add formula-, is the size of the array. This makes it efficient for large datasets when compared to linear search but may be outperformed by binary search for certain scenarios.

![Jump search](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/jump-search.png)

## Example: 

```typescript
function jumpSearch(arr: number[], target: number): number {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) {
      return -1;
    }
  }

  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}
```
