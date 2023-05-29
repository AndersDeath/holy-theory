# Container With Most Water

```typescript
function maxArea(height: number[]): number {

    let maximumArea = Number.MIN_SAFE_INTEGER;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {

        let shorterLine = Math.min(height[left], height[right]);

        maximumArea = Math.max(maximumArea, shorterLine * (right - left));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maximumArea;

};
```

**Source: https://leetcode.com**
