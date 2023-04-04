# Valid Anagram

```typescript
function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;

    let hashTable = {};

    for (let i = 0; i < s.length; i++) {
        if(!hashTable[s[i]]) hashTable[s[i]] = 0;
        if(!hashTable[t[i]]) hashTable[t[i]] = 0;
        hashTable[s[i]]++;
        hashTable[t[i]]--;
	}

    for(let key in hashTable){
        if(hashTable[key] != 0) return false
    }

    return true;
};

```
**Source: https://leetcode.com**
* [Go back](../readme.md)