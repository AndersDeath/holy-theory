# Quicksort
```java
class Solution {
	
	int makePartition(int [] arr, int low, int high) {
		int pivot = arr[high];
		int currentIndex = low - 1;
		for(int i = low; i < high; i++) {
			if(arr[i] < pivot) {
				currentIndex++;
				int temp = arr[i];
				arr[i] = arr[currentIndex];
				arr[currentIndex] = temp;
			}
			
		}
		int temp = arr[high];
		arr[high] = arr[currentIndex + 1];
		arr[currentIndex + 1] = temp;
		return currentIndex + 1;
	}
	
	void quicksort(int[] arr, int low, int high) {
		if(low < high) {
			int pivot = makePartition(arr, low, high);
			quicksort(arr, low, pivot - 1);
			quicksort(arr, pivot + 1, high);
		}
	}
	
	void quickSort (int[] arr) {
		int n = arr.length;
		quicksort(arr, 0, n - 1);
	}
}

```

```python
def quicksort(arr):
    if len(arr) < 2:
        return arr
    else:
        pivot = arr[len(arr)/2]
        less = [i for i in arr[1:] if i <= pivot]
        greater = [i for i in arr[1:] if i > pivot]
        return quicksort(less) + [pivot] + quicksort(greater)

print(quicksort([10,2,3,1,5,4]))
```

* [Go back](../readme.md)