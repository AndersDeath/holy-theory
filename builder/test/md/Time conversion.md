# Time conversion

```typescript
function timeConversion(s: string): string {
    const strArr = s.split(':');
    const modifier = strArr[2].slice(-2);
    let hours = strArr[0];
    if(modifier === "PM" && strArr[0] !== '12') {
        hours = +strArr[0] + 12 + '';
    }
    if(modifier === "AM" && strArr[0] === '12') {
        hours = "00";
    }
    return `${hours}:${strArr[1]}:${strArr[2].slice(0,-2)}`;
}
```

