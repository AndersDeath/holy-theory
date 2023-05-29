# Reverse array

Solution Steps

1. Place the two pointers (let start and end ) at the start and end of the array.
2. Swap a[start] and a[end]
3. Increment start and decrement end with 1
4. If start reached to the value length/2 or start ≥ end , then terminate otherwise repeat from step 2.

Complexity Analysis
* Time Complexity: O(n)
* Space Complexity: O(1)


```typescript
function reverseArray(a: number[]): number[] {
    let start = 0;
    let end = a.length - 1;
    while(start < end) {
        let temp = a[start];
        a[start] = a[end];
        a[end] = temp;
        start++;
        end--;
    }
    return a;
}

```

