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

The `hammingWeight` function takes an integer `n` as input and returns the number of '1' bits (also known as the Hamming weight) in its binary representation.

Here's how the function works:

1. It initializes a variable `pivot` to 1. This will be used to create a bitmask with only one bit set at a particular position.

2. It initializes a variable `sum` to 0. This will be used to keep track of the number of '1' bits.

3. It enters a loop that iterates 32 times (since an integer in JavaScript is represented using 32 bits). In each iteration, it shifts the `pivot` left by `i` positions to create a bitmask with only the `i`-th bit set to 1.

4. It performs a bitwise AND operation (`&`) between the input integer `n` and the bitmask `p`. If the result of this operation is equal to `p`, it means that the `i`-th bit of `n` is a '1', so the `sum` is incremented.

5. After the loop, the `sum` variable contains the count of '1' bits in the binary representation of the input integer, and this value is returned.

**Techniques Used:**

- **Bit Manipulation:** The function uses bitwise shifting and bitwise AND operations to check the individual bits of the input integer and count the '1' bits.

**Summary:**

The `hammingWeight` function effectively counts the number of '1' bits in the binary representation of an integer using bitwise manipulation techniques. It iterates through each bit position and checks if the bit is set, incrementing the count accordingly.


