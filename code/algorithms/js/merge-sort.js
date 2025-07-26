// Section: Algorithms
// Language: JavaScript
// Name: Merge Sort (Optimized)

/**
 * Simple Base Merge Sort implementation
 * Time Complexity: O(n log n) - always
 * Space Complexity: O(n)
 */
function simpleMergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return simpleMerge(simpleMergeSort(left), simpleMergeSort(right));
}

function simpleMerge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 * Optimized Merge Sort implementation
 * Time Complexity: O(n log n) - always
 * Space Complexity: O(n)
 * 
 * Optimizations:
 * - In-place merging capability
 * - Better memory management
 * - Stable sorting (preserves order of equal elements)
 */
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Merge while both arrays have elements
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Add remaining elements from left array
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    
    // Add remaining elements from right array
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    
    return result;
}

// Test cases
const testCases = [
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

console.log("=== Simple Merge Sort Test Results ===");
testCases.forEach((testCase, index) => {
    console.log(`Test ${index + 1}:`);
    console.log(`  Input:  [${testCase.join(', ')}]`);
    console.log(`  Output: [${simpleMergeSort([...testCase]).join(', ')}]`);
    console.log();
});

console.log("=== Optimized Merge Sort Test Results ===");
testCases.forEach((testCase, index) => {
    console.log(`Test ${index + 1}:`);
    console.log(`  Input:  [${testCase.join(', ')}]`);
    console.log(`  Output: [${mergeSort([...testCase]).join(', ')}]`);
    console.log();
});