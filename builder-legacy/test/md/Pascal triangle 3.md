
# Pascal triangle 3

```typescript
function getRow(rowIndex: number): number[] {
  const res = Array(rowIndex + 1);
  res[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    res[i] = res[i - 1] * ((rowIndex - i + 1) / i);
  }
  return res;
}
```

The `getRow` function generates a specific row of Pascal's Triangle based on the given `rowIndex`. Each row in Pascal's Triangle represents the coefficients of the binomial expansion `(a + b)^n` for a specific value of `n`, where `a` and `b` are constants. The coefficients are also known as the binomial coefficients.

Here's how the function works:

1. It initializes an array `res` of length `rowIndex + 1` to store the coefficients of the specified row.

2. It sets the first element of the `res` array to `1`, as the first element of any row in Pascal's Triangle is always `1`.

3. It then iterates through each index `i` from `1` to `rowIndex`, calculating the coefficient at that index using the formula: 
   ```
   coefficient[i] = coefficient[i - 1] * ((rowIndex - i + 1) / i)
   ```
   This formula is derived from the fact that each coefficient is obtained by multiplying the previous coefficient by the ratio of `(rowIndex - i + 1)` to `i`. This formula ensures that each coefficient is calculated efficiently and accurately.

4. After calculating all coefficients, the function returns the `res` array, which represents the specified row of Pascal's Triangle.

**Techniques Used:**

- **Array Initialization and Manipulation:** The function initializes an array and manipulates it to store the coefficients of the specified row.

- **Mathematical Logic:** The function uses a mathematical formula to calculate the coefficients efficiently based on the given `rowIndex`.

**Summary:**

The `getRow` function generates a specific row of Pascal's Triangle by calculating the coefficients using a formula that takes advantage of the properties of binomial coefficients. This allows for efficient computation of the coefficients for the desired row.

