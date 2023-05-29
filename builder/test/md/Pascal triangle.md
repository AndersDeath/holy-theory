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

* [Go back](../readme.md)
