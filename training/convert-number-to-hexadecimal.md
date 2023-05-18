---
title: Convert a Number to Hexadecimal
tags: ['training', 'task', 'tree']
languages: ['java']
---
# Convert a Number to Hexadecimal

```java

class Solution {
    public String toHex(int num) {
        if(num == 0) return "0";
        char[] map = {'0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'};
        StringBuilder sb = new StringBuilder();
        while(num != 0){
            sb.insert(0, map[num & 15]);
            num = num >>> 4;
        }
        return sb.toString();
    }
}
```