# Number of 1 Bits

```typescript

function hammingWeight(n: number): number {
        let pivot = 1;
        let sum = 0;
        for (let i = 0; i < 32; i ++){
            let p = pivot << i;
            if ((n & p) == p)
                sum ++;
        }
        return sum;
};

```


