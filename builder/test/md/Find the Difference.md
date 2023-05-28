# Find the Difference
---
# Find the Difference

```typescript

function findTheDifference(s: string, t: string): string {
  let sArr = s.split('').sort()
  let tArr = t.split('').sort()
    for( let i = 0; i < tArr.length; i++){
    
    if( sArr[i] !== tArr[i]){

      return tArr[i];
    }
  } 
};

```

* [Go back](../readme.md)
