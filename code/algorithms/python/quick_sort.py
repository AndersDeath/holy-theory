# Section: Algorithms
# Language: Python
# Name: Quick Sort (Optimized)

from typing import List, TypeVar, Generic

T = TypeVar('T', bound=type)

def simple_quick_sort(arr: List[T]) -> List[T]:
    """
    Simple Base Quick Sort implementation
    
    Args:
        arr: List of comparable elements
        
    Returns:
        Sorted list
        
    Time Complexity: O(n log n) average, O(n²) worst case
    Space Complexity: O(log n) average
    """
    if len(arr) <= 1:
        return arr
    
    pivot = arr[0]  # Simple pivot selection
    less = []
    equal = []
    greater = []
    
    for element in arr:
        if element < pivot:
            less.append(element)
        elif element == pivot:
            equal.append(element)
        else:
            greater.append(element)
    
    return simple_quick_sort(less) + equal + simple_quick_sort(greater)


def quick_sort(arr: List[T]) -> List[T]:
    """
    Optimized Quick Sort implementation
    
    Args:
        arr: List of comparable elements
        
    Returns:
        Sorted list
        
    Time Complexity: O(n log n) average, O(n²) worst case
    Space Complexity: O(log n) average
    """
    # Base case: lists with 0 or 1 elements are already sorted
    if len(arr) <= 1:
        return arr
    
    # Choose pivot using median-of-three strategy for better performance
    pivot = choose_pivot(arr)
    less = []
    equal = []
    greater = []
    
    # Partition the array
    for element in arr:
        if element < pivot:
            less.append(element)
        elif element == pivot:
            equal.append(element)
        else:
            greater.append(element)
    
    # Recursively sort and combine
    return quick_sort(less) + equal + quick_sort(greater)


def choose_pivot(arr: List[T]) -> T:
    """
    Choose pivot using median-of-three strategy
    This helps avoid worst-case scenarios
    
    Args:
        arr: Input array
        
    Returns:
        Median of first, middle, and last elements
    """
    length = len(arr)
    first = arr[0]
    middle = arr[length // 2]
    last = arr[length - 1]
    
    # Return the median of first, middle, and last elements
    if first <= middle <= last:
        return middle
    elif first <= last <= middle:
        return last
    elif middle <= first <= last:
        return first
    elif middle <= last <= first:
        return last
    elif last <= first <= middle:
        return first
    else:
        return middle


def main():
    """Test both quick sort implementations with various test cases"""
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
    
    print("=== Simple Quick Sort Test Results ===")
    for i, test_case in enumerate(test_cases, 1):
        print(f"Test {i}:")
        print(f"  Input:  {test_case}")
        result = simple_quick_sort(test_case.copy())
        print(f"  Output: {result}")
        print()
    
    print("=== Optimized Quick Sort Test Results ===")
    for i, test_case in enumerate(test_cases, 1):
        print(f"Test {i}:")
        print(f"  Input:  {test_case}")
        result = quick_sort(test_case.copy())
        print(f"  Output: {result}")
        print()


if __name__ == "__main__":
    main() 