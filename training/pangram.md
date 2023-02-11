
# Pangram
```typescript
function isPangram(string:string){
    const set = new Set();
    string.toLowerCase().split('').forEach((letter:string) => {
      if(/^[A-Za-z]+$/.test(letter)) {
        set.add(letter);
      }
    });
    return [...set].length === 26;
  }
,,,

* [Go back](../readme.md)
