
# Pairwise
```
export function pairwise(arr:number[], arg:number) {
    const index = [];

    for (let a in arr) {
        let temp = arr[a];

        for (let i = 1; i < arr.length; i++) {
            let temp2 = arr[i];
            if (temp + temp2 === arg && i > +a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1) {
                index.push(+a, +i);
                break;
            }
        }
    }
    if (index.length >= 1) {
        const addAll = (a: any, b: any) => {
            return a + b;
        };

        return index.reduce(addAll);
    } else
        return 0;
}

let res = pairwise([1, 3, 2, 4], 4);
console.log(res);

```

* [Go back](../readme.md)