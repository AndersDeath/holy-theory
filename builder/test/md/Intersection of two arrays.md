# Intersection of two arrays 

```typescript

function intersection(nums1: number[], nums2: number[]) {
    let nums1Map = new Set(nums1);
    let result = new Set();
    nums2.forEach(item => {
        if(nums1Map.has(item)){
            result.add(item)
        }
    });
    return Array.from(result);
};


```
