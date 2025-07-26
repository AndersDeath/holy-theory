# Section: Algorithms
# Language: Python
# Name: Merge Sort (Optimized)

from typing import List, TypeVar

T = TypeVar('T', bound=type)

def simple_merge_sort(arr: List[T]) -> List[T]:
    """
    Simple Base Merge Sort implementation
    
    Args:
        arr: List of comparable elements
        
    Returns:
        Sorted list
        
    Time Complexity: O(n log n) - always
    Space Complexity: O(n)
    """
    if len(arr) <= 1:
        return arr
    
    middle = len(arr) // 2
    left = arr[:middle]
    right = arr[middle:]
    
    return simple_merge(simple_merge_sort(left), simple_merge_sort(right))


def simple_merge(left: List[T], right: List[T]) -> List[T]:
    """
    Simple merge function for merge sort
    """
    result = []
    left_index = 0
    right_index = 0
    
    while left_index < len(left) and right_index < len(right):
        if left[left_index] <= right[right_index]:
            result.append(left[left_index])
            left_index += 1
        else:
            result.append(right[right_index])
            right_index += 1
    
    return result + left[left_index:] + right[right_index:]


def merge_sort(arr: List[T]) -> List[T]:
    """
    Optimized Merge Sort implementation
    
    Args:
        arr: List of comparable elements
        
    Returns:
        Sorted list
        
    Time Complexity: O(n log n) - always
    Space Complexity: O(n)
    
    Optimizations:
    - Better memory management
    - Stable sorting (preserves order of equal elements)
    - More explicit remaining element handling
    """
    if len(arr) <= 1:
        return arr
    
    middle = len(arr) // 2
    left = arr[:middle]
    right = arr[middle:]
    
    return merge(merge_sort(left), merge_sort(right))


def merge(left: List[T], right: List[T]) -> List[T]:
    """
    Optimized merge function for merge sort
    """
    result = []
    left_index = 0
    right_index = 0
    
    # Merge while both arrays have elements
    while left_index < len(left) and right_index < len(right):
        if left[left_index] <= right[right_index]:
            result.append(left[left_index])
            left_index += 1
        else:
            result.append(right[right_index])
            right_index += 1
    
    # Add remaining elements from left array
    while left_index < len(left):
        result.append(left[left_index])
        left_index += 1
    
    # Add remaining elements from right array
    while right_index < len(right):
        result.append(right[right_index])
        right_index += 1
    
    return result


def main():
    """Test both merge sort implementations with various test cases"""
    test_cases = [
        [3, 5, 1, 6, 192, 54, 213, 5],
        [3, 2, 6, 18, 9, 7],
        [1],
        [],
        [5, 5, 5, 5],
        [9, 8, 7, 6, 5, 4, 3, 2, 1],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        ['banana', 'apple', 'cherry', 'date'],
        [3.14, 2.71, 1.41, 0.58]
    ]
    
    print("=== Simple Merge Sort Test Results ===")
    for i, test_case in enumerate(test_cases, 1):
        print(f"Test {i}:")
        print(f"  Input:  {test_case}")
        result = simple_merge_sort(test_case.copy())
        print(f"  Output: {result}")
        print()
    
    print("=== Optimized Merge Sort Test Results ===")
    for i, test_case in enumerate(test_cases, 1):
        print(f"Test {i}:")
        print(f"  Input:  {test_case}")
        result = merge_sort(test_case.copy())
        print(f"  Output: {result}")
        print()


if __name__ == "__main__":
    main() 