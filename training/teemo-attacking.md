---
title: Teemo Attacking
tags: ['training', 'task']
languages: ['typescript']
---
# Teemo Attacking

```typescript
function findPoisonedDuration(timeSeries: number[], duration: number): number {
  if (timeSeries.length === 0) {
    return 0;
  }

  let totalDuration = 0;
  let prevAttackEnd = timeSeries[0] + duration;

  for (let i = 1; i < timeSeries.length; i++) {
    const currentAttackEnd = timeSeries[i] + duration;
    totalDuration += Math.min(currentAttackEnd - prevAttackEnd, duration);
    prevAttackEnd = currentAttackEnd;
  }

  return totalDuration + duration;
};
```

* [Go back](../readme.md)