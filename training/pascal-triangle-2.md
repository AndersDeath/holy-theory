# Pascal triangle 2
```typescript

function generate(numRows: number): number[][] {

		const pascal: any = [];

	
		for(let i = 0; i < numRows; i++) {
			pascal[i] = [];
			pascal[i][0] = 1;
			for(let j = 1; j < i; j++) {
				pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
			}
			pascal[i][i] = 1;
		}

		return pascal;

};
,,,

* [Go back](../readme.md)
