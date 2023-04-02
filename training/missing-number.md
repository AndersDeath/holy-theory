# Missing number

```typescript

function missingNumber(nums: number[]): number {
  let sum = 0;
  let expected = (1 + nums.length) * nums.length / 2;
  for (let i = 0; i < nums.length; i ++) {
      sum += nums[i];
  }
  return expected - sum;
};

```

* [Go back](../readme.md)
