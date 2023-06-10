---
title: Detect Capital Use
tags: ['training', 'task']
languages: ['typescript']
---
# Detect Capital Use

```typescript
function detectCapitalUse(word: string): boolean {
  const isUpperCase = (ch: string): boolean => ch === ch.toUpperCase();

    if (word === word.toUpperCase()) {
        return true;
    }

    if (word === word.toLowerCase()) {
        return true;
    }

    if (isUpperCase(word[0]) && word.slice(1) === word.slice(1).toLowerCase()) {
        return true;
    }

    return false;
};
```

* [Go back](../readme.md)