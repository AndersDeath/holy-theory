# Reverse String II

```typescript

function reverseStr(s: string, k: number): string {
 const chars = s.split('');
  
  for (let i = 0; i < chars.length; i += 2 * k) {
    let start = i;
    let end = Math.min(i + k - 1, chars.length - 1);
    
    while (start < end) {
      [chars[start], chars[end]] = [chars[end], chars[start]];
      start++;
      end--;
    }
  }
  
  return chars.join('');
};

```
