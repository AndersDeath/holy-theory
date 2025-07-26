// Section: Algorithms
// Language: TypeScript
// Name: Quick Sort (Optimized)

/**
 * Simple Base Quick Sort implementation
 * Time Complexity: O(n log n) average, O(n²) worst case
 * Space Complexity: O(log n) average
 */
function simpleQuickSort<T extends number | string>(arr: T[]): T[] {
    if (arr.length <= 1) {
        return arr;
    }
    
    const pivot = arr[0]; // Simple pivot selection
    const less: T[] = [];
    const equal: T[] = [];
    const greater: T[] = [];
    
    for (const element of arr) {
        if (element < pivot) {
            less.push(element);
        } else if (element === pivot) {
            equal.push(element);
        } else {
            greater.push(element);
        }
    }
    
    return [...simpleQuickSort(less), ...equal, ...simpleQuickSort(greater)];
}

/**
 * Optimized Quick Sort implementation
 * Time Complexity: O(n log n) average, O(n²) worst case
 * Space Complexity: O(log n) average
 */
function quickSort<T extends number | string>(arr: T[]): T[] {
    // Base case: arrays with 0 or 1 elements are already sorted
    if (arr.length <= 1) {
        return arr;
    }
    
    // Choose pivot using median-of-three strategy for better performance
    const pivot = choosePivot(arr);
    const less: T[] = [];
    const equal: T[] = [];
    const greater: T[] = [];
    
    // Partition the array
    for (const element of arr) {
        if (element < pivot) {
            less.push(element);
        } else if (element === pivot) {
            equal.push(element);
        } else {
            greater.push(element);
        }
    }
    
    // Recursively sort and combine
    return [...quickSort(less), ...equal, ...quickSort(greater)];
}

/**
 * Choose pivot using median-of-three strategy
 * This helps avoid worst-case scenarios
 */
function choosePivot<T extends number | string>(arr: T[]): T {
    const len = arr.length;
    const first = arr[0];
    const middle = arr[Math.floor(len / 2)];
    const last = arr[len - 1];
    
    // Return the median of first, middle, and last elements
    if (first <= middle && middle <= last) return middle;
    if (first <= last && last <= middle) return last;
    if (middle <= first && first <= last) return first;
    if (middle <= last && last <= first) return last;
    if (last <= first && first <= middle) return first;
    return middle;
}

// Test cases
const testCases: (number | string)[][] = [
    [3, 5, 1, 6, 192, 54, 213, 5],
    [3, 2, 6, 18, 9, 7],
    [1],
    [],
    [5, 5, 5, 5],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ['banana', 'apple', 'cherry', 'date'],
    [3.14, 2.71, 1.41, 0.58]
];

console.log("=== Simple Quick Sort Test Results ===");
testCases.forEach((testCase, index) => {
    console.log(`Test ${index + 1}:`);
    console.log(`  Input:  [${testCase.join(', ')}]`);
    const result = simpleQuickSort([...testCase]);
    console.log(`  Output: [${result.join(', ')}]`);
    console.log();
});

console.log("=== Optimized Quick Sort Test Results ===");
testCases.forEach((testCase, index) => {
    console.log(`Test ${index + 1}:`);
    console.log(`  Input:  [${testCase.join(', ')}]`);
    const result = quickSort([...testCase]);
    console.log(`  Output: [${result.join(', ')}]`);
    console.log();
});

// Export for use in other modules
export { quickSort, simpleQuickSort, choosePivot }; 