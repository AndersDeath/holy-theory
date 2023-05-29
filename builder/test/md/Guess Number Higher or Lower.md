# Guess Number Higher or Lower

```typescript

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let left = 1, right = n

    while(left < right) {
        const mid = left + Math.floor((right-left)/2)
        const current = guess(mid)
        if(current === 0) return mid
        if(current === -1) right = mid
        else left = mid+1
    }
    return left
};

```

