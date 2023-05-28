# Isomorphic Strings
---
# Isomorphic Strings

```typescript
function isIsomorphic(s: string, t: string): boolean {
       if(s.length != t.length) return false;
        const m1 = [];
        const m2 = [];
        for(let i=0; i< s.length; i++){
            if(m1[s[i]] != m2[t[i]]) return false;

            m1[s[i]] = i+1;
            m2[t[i]] = i+1;
        }

        return true;
};
```
* [Go back](../readme.md)