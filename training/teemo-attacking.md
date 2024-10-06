---
title: Teemo Attacking
tags: ["training", "task"]
languages: ["typescript"]
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
}
```

**Description:**

1. **Input and Output**:

   - The `findPoisonedDuration` function takes two parameters: an array `timeSeries` representing the times of attacks and an integer `duration` representing the duration of each attack.
   - It returns the total poisoned duration caused by the attacks.

2. **Base Case and Initialization**:

   - If there are no attacks (the `timeSeries` array is empty), the function immediately returns 0, as there's no poison duration.

3. **Calculating Total Duration**:

   - The loop iterates through the `timeSeries` array starting from the second attack (`i = 1`).
   - For each attack, it calculates the end time of the current attack by adding the attack time to the attack duration. This is stored in `currentAttackEnd`.

4. **Incrementing Total Duration**:

   - It then calculates the poisoned duration caused by the current attack using `Math.min(currentAttackEnd - prevAttackEnd, duration)`. This ensures that the duration doesn't exceed the actual attack duration.
   - The calculated poisoned duration is added to the `totalDuration`.

5. **Updating Previous Attack End**:

   - The `prevAttackEnd` is updated with the `currentAttackEnd` so that it's ready for the next iteration.

6. **Final Calculation**:
   - After the loop, the code returns the `totalDuration` plus the `duration` of the last attack. This is done to account for the full duration of the last attack.

**Techniques used:**

- Looping through arrays and tracking indices.
- Basic mathematical calculations for calculating attack end times and durations.
- Efficient use of the `Math.min` function to calculate poisoned durations without exceeding attack durations.
- Handling base cases for empty input arrays.

**Example:**

```typescript
const timeSeries = [1, 4, 7];
const duration = 3;
const result = findPoisonedDuration(timeSeries, duration);
console.log(result); // Output: 9
```

This code efficiently calculates the total poisoned duration caused by a series of attacks with given durations.
