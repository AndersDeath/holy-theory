---
title: Pascal triangle
tags: ["training", "task"]
languages: ["java"]
---

# Pascal triangle

```java
class Solution {
	int[] pascalTriangleRow(int rowNo) {
		int pascalRow[] = new int[rowNo];
		pascalRow[0] = 1;
		rowNo--;
		for(int i = 1; i <= rowNo; i++) {
			int rowElement = pascalRow[i-1] * (rowNo - i + 1) / i;
			pascalRow[i] = rowElement;
		}
		return pascalRow;
	}
}
```

The given `Solution` class contains a method `pascalTriangleRow` that generates a specific row of Pascal's Triangle based on the given `rowNo`. Each row in Pascal's Triangle represents the coefficients of the binomial expansion `(a + b)^n` for a specific value of `n`, where `a` and `b` are constants. The coefficients are also known as the binomial coefficients.

Here's how the `pascalTriangleRow` method works:

1. It initializes an array `pascalRow` of length `rowNo` to store the coefficients of the specified row.

2. It sets the first element of the `pascalRow` array to `1`, as the first element of any row in Pascal's Triangle is always `1`.

3. It then iterates through each index `i` from `1` to `rowNo - 1`, calculating the coefficient at that index using the formula:
   ```
   coefficient[i] = coefficient[i - 1] * (rowNo - i + 1) / i
   ```
   This formula is derived from the fact that each coefficient is obtained by multiplying the previous coefficient by the ratio of `(rowNo - i + 1)` to `i`.

4. After calculating all coefficients, the method returns the `pascalRow` array, which represents the specified row of Pascal's Triangle.

**Techniques Used:**

- **Array Initialization and Manipulation:** The method initializes an array and manipulates it to store the coefficients of the specified row.

- **Mathematical Logic:** The method uses a mathematical formula to calculate the coefficients based on the given `rowNo`.

**Summary:**

The `pascalTriangleRow` method generates a specific row of Pascal's Triangle by calculating the coefficients using a formula that takes advantage of the properties of binomial coefficients. This allows for efficient computation of the coefficients for the desired row. The method can be used to retrieve any desired row of Pascal's Triangle by specifying the `rowNo` parameter.

- [Go back](../readme.md)
