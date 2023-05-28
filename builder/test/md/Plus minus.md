# Plus minus
---
# Plus minus

```typescript
function plusMinus(arr: number[]): void {
    // Write your code here
    const length = arr.length;
    let tempArr: number[] = [0, 0, 0];
    
    for(let i = 0; i < length; i++) {
        if(arr[i] > 0) {
            tempArr[0]++;
        } else if(arr[i] < 0) {
            tempArr[1]++;
        } else {
            tempArr[2]++;
        }
    }

    console.log((tempArr[0]/length).toFixed(6));
    console.log((tempArr[1]/length).toFixed(6));
    console.log((tempArr[2]/length).toFixed(6));
}
```

* [Go back](../readme.md)
