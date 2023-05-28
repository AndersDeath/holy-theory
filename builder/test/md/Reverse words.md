# Reverse words
---
# Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples:
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"`;

```typescript
export function reverseWords(str: string): string {
    return str.split(' ').map((word: string) => {
        let w = word.split('').reverse();
        return w.join('')
    }).join(' ');
  }
```

**Source: https://codewars.com**
* [Go back](../readme.md)