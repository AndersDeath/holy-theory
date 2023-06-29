# Reverse Words in a String 3

```typescript

function reverseWords(s: string): string {
  const words = s.split(' ');
  const reversedWords = [];

  for (let word of words) {
    const reversedWord = word.split('').reverse().join('');
    reversedWords.push(reversedWord);
  }

  return reversedWords.join(' ');
};
```
