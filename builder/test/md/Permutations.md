# Permutations

```typescript
function permute(nums: number[]): number[][] {
    let output = [];
    dfs(nums, 0, output);
    return output;
};


function dfs(nums, index,output) {
    if (index == nums.length){
        let l = [...nums];
        output.push(l);
    } else {
        for (let j = index; j < nums.length; j++){
            let tmp = nums[index];
            nums[index] = nums[j];
            nums[j] = tmp;
            
            dfs(nums, index + 1,output);
            tmp = nums[index];
            nums[index] = nums[j];
            nums[j] = tmp;
        }
    }
}
```


