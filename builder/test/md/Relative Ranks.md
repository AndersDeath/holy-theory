# Relative Ranks

```typescript
function findRelativeRanks(score: number[]): string[] {
 const sortedNums = [...score].sort((a, b) => b - a);
    const ranks: string[] = new Array(score.length);

    for (let i = 0; i < score.length; i++) {
        const rank = sortedNums.indexOf(score[i]) + 1;

        if (rank === 1) {
            ranks[i] = "Gold Medal";
        } else if (rank === 2) {
            ranks[i] = "Silver Medal";
        } else if (rank === 3) {
            ranks[i] = "Bronze Medal";
        } else {
            ranks[i] = rank.toString();
        }
    }

    return ranks;
};
```

