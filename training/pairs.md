
# Pairs
```typescript
function pairs(k: number, arr: number[]): number {
    arr.sort((a, b) => a-b);
    let output = 0;
    let i = 0;
    let j = 0;
    while(j < arr.length) {
        let difference = arr[j] - arr[i];
        if(difference === k) {
            output++;
            j++;
            i++;
        } else if (difference > k) {
            i++;
        } else if(difference < k) {
            j++;
} }
    return output;
}

}
,,,

** Source: http://hackerrank.com**
* [Go back](../readme.md)
