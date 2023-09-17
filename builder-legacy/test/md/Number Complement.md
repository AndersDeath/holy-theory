# Number Complement

```typescript

function findComplement(num: number): number {
  let mask = 1;
  
  while (mask < num) {
    mask = (mask << 1) | 1;
  }
  
  return num ^ mask;
}

```

The `findComplement` function takes an integer `num` as input and returns its bitwise complement. The bitwise complement of an integer is obtained by flipping all its binary digits, changing 0s to 1s and vice versa.

Here's how the function works:

1. It initializes a variable `mask` to 1. This mask will be used to set all the bits in the binary representation of `num` to 1.

2. It enters a loop that continues as long as `mask` is less than `num`. In each iteration of the loop, the value of `mask` is shifted left by 1 (effectively adding a 0 at the least significant bit) and then a bitwise OR operation with 1 is performed. This sets all the bits of `mask` to 1 up to the highest bit position where `num` has a 1.

3. After the loop, the bitwise XOR operation (`^`) is performed between `num` and `mask`. This effectively flips all the bits in the binary representation of `num` where `mask` has 1s.

4. The final result of the XOR operation is the bitwise complement of `num`, and this value is returned.

**Techniques Used:**

- **Bit Manipulation:** The function uses bitwise shifting and bitwise XOR operations to manipulate the individual bits of the input integer to find its complement.

**Summary:**

The `findComplement` function employs bit manipulation techniques to efficiently compute the bitwise complement of an integer. It does so by using a mask that has 1s in positions corresponding to the significant bits of the input integer and then performing a bitwise XOR operation to flip the bits.


