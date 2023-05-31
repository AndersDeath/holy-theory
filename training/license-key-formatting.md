---
title: License Key Formatting
tags: ['training', 'task']
languages: ['typescript']
---
# License Key Formatting

```typescript
function licenseKeyFormatting(s: string, k: number): string {
  const str = s.replace(/-/g, '').toUpperCase();
  
  let result = '';
  let count = 0;
  
  for (let i = str.length - 1; i >= 0; i--) {
    result = str[i] + result;
    count++;
    
    if (count === k && i !== 0) {
      result = '-' + result;
      count = 0;
    }
  }
  
  return result;
};
```
* [Go back](../readme.md)