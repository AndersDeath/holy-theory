# Sorting Algorithm Implementations

This directory contains both simple and optimized implementations of Quick Sort and Merge Sort in JavaScript, Python, and TypeScript.

## Algorithms Available

### 1. **Quick Sort**
- **Simple Version**: Uses first element as pivot
- **Optimized Version**: Uses median-of-three pivot selection

### 2. **Merge Sort**
- **Simple Version**: Basic divide-and-conquer implementation
- **Optimized Version**: Enhanced with better memory management and stable sorting

## Quick Sort Optimizations

### 1. **Median-of-Three Pivot Selection** (Optimized Version)
- Instead of always choosing the middle element as pivot, we use the median of first, middle, and last elements
- This helps avoid worst-case scenarios (O(n²)) when the array is already sorted or reverse sorted
- Improves average-case performance significantly

### 2. **Improved Base Case**
- Changed from `arr.length < 2` to `arr.length <= 1` for better clarity
- More explicit handling of edge cases

### 3. **Better Code Structure**
- Separated pivot selection logic into its own function
- Added comprehensive documentation and type annotations
- Improved readability and maintainability

## Merge Sort Optimizations

### 1. **Stable Sorting** (Optimized Version)
- Preserves the order of equal elements
- Important for complex data structures

### 2. **Better Memory Management**
- More explicit handling of remaining elements
- Clearer separation of merge logic

### 3. **Enhanced Merge Function**
- Explicit loops for remaining elements
- Better readability and maintainability

## Time and Space Complexity

| Algorithm | Time Complexity | Space Complexity | Stability |
|-----------|----------------|------------------|-----------|
| **Quick Sort** | O(n log n) avg, O(n²) worst | O(log n) avg | No |
| **Merge Sort** | O(n log n) always | O(n) | Yes |

## Files

### Quick Sort
- `js/quick-sort.js` - JavaScript implementation (both simple and optimized)
- `python/quick_sort.py` - Python implementation with type hints (both versions)
- `ts/quick-sort.ts` - TypeScript implementation with generics (both versions)

### Merge Sort
- `js/merge-sort.js` - JavaScript implementation (both simple and optimized)
- `python/merge_sort.py` - Python implementation with type hints (both versions)
- `ts/merge-sort.ts` - TypeScript implementation with generics (both versions)

## Usage Examples

### Quick Sort

#### JavaScript
```javascript
// Simple version
const arr = [3, 5, 1, 6, 192, 54, 213, 5];
const sorted = simpleQuickSort(arr);

// Optimized version
const optimized = quickSort(arr);
console.log(sorted); // [1, 3, 5, 5, 6, 54, 192, 213]
```

#### Python
```python
# Simple version
arr = [3, 5, 1, 6, 192, 54, 213, 5]
sorted_arr = simple_quick_sort(arr)

# Optimized version
optimized = quick_sort(arr)
print(sorted_arr)  # [1, 3, 5, 5, 6, 54, 192, 213]
```

#### TypeScript
```typescript
// Simple version
const arr: number[] = [3, 5, 1, 6, 192, 54, 213, 5];
const sorted = simpleQuickSort(arr);

// Optimized version
const optimized = quickSort(arr);
console.log(sorted); // [1, 3, 5, 5, 6, 54, 192, 213]
```

### Merge Sort

#### JavaScript
```javascript
// Simple version
const arr = [3, 5, 1, 6, 192, 54, 213, 5];
const sorted = simpleMergeSort(arr);

// Optimized version
const optimized = mergeSort(arr);
console.log(sorted); // [1, 3, 5, 5, 6, 54, 192, 213]
```

#### Python
```python
# Simple version
arr = [3, 5, 1, 6, 192, 54, 213, 5]
sorted_arr = simple_merge_sort(arr)

# Optimized version
optimized = merge_sort(arr)
print(sorted_arr)  # [1, 3, 5, 5, 6, 54, 192, 213]
```

#### TypeScript
```typescript
// Simple version
const arr: number[] = [3, 5, 1, 6, 192, 54, 213, 5];
const sorted = simpleMergeSort(arr);

// Optimized version
const optimized = mergeSort(arr);
console.log(sorted); // [1, 3, 5, 5, 6, 54, 192, 213]
```

## Running the Tests

### Quick Sort
```bash
# JavaScript
cd js && node quick-sort.js

# Python
cd python && python3 quick_sort.py

# TypeScript
cd ts && npx tsx quick-sort.ts
```

### Merge Sort
```bash
# JavaScript
cd js && node merge-sort.js

# Python
cd python && python3 merge_sort.py

# TypeScript
cd ts && npx tsx merge-sort.ts
```

## Key Differences

| Aspect | Simple Version | Optimized Version |
|--------|---------------|-------------------|
| **Quick Sort - Pivot Selection** | First element (`arr[0]`) | Median-of-three |
| **Quick Sort - Worst Case Performance** | O(n²) on sorted arrays | Better performance |
| **Merge Sort - Stability** | Basic implementation | Stable sorting |
| **Merge Sort - Memory Management** | Basic | Enhanced |
| **Code Complexity** | Simpler, easier to understand | More sophisticated |
| **Educational Value** | Great for learning basics | Shows optimization techniques |
| **Real-world Usage** | Basic implementation | Production-ready |

## Key Features

1. **Language-Specific Optimizations**
   - JavaScript: Uses modern ES6+ features like `for...of` loops
   - Python: Includes type hints and comprehensive docstrings
   - TypeScript: Full type safety with generics

2. **Robust Error Handling**
   - Handles edge cases like empty arrays and single elements
   - Works with different data types (numbers, strings, floats)

3. **Educational Value**
   - Well-documented code with clear comments
   - Consistent structure across all implementations
   - Easy to understand and modify
   - Shows progression from simple to optimized

## Performance Notes

### Quick Sort
The median-of-three pivot selection strategy significantly improves performance on:
- Already sorted arrays
- Reverse sorted arrays
- Arrays with many duplicate elements

### Merge Sort
- Always O(n log n) time complexity regardless of input
- Stable sorting preserves order of equal elements
- Better for linked lists and external sorting
- Predictable performance

## When to Use Each Algorithm

### Quick Sort
**Use when:**
- Average-case performance is priority
- In-place sorting is needed
- Memory is limited
- Data is randomly distributed

**Avoid when:**
- Stability is required
- Worst-case performance is critical
- Data is already sorted or nearly sorted

### Merge Sort
**Use when:**
- Stable sorting is required
- Predictable performance is needed
- Working with linked lists
- External sorting (large datasets)

**Avoid when:**
- Memory is very limited
- In-place sorting is required
- Simple sorting is sufficient

## When to Use Each Version

### Use Simple Version When:
- Learning the algorithm for the first time
- Teaching basic concepts
- Need a quick, simple implementation
- Performance is not critical

### Use Optimized Version When:
- Building production applications
- Dealing with potentially sorted data
- Performance is important
- Need robust, battle-tested code 