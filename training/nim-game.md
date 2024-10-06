---
title: Nim Game
tags: ['training', 'task']
languages: ['typescript']
---
# Nim Game

```typescript

function canWinNim(n: number): boolean {
    return !(n % 4 == 0);
};

```
The `canWinNim` function determines whether a player can win the game of Nim with a given number of stones (`n`) based on a specific rule. In the game of Nim, two players take turns removing stones from a pile. On each turn, a player can remove 1 to 3 stones. The player who removes the last stone wins the game.

The function's logic is based on the observation that if there are 4 stones left, the player whose turn it is will lose, no matter what move they make. This is because regardless of whether they remove 1, 2, or 3 stones, the other player can always take the remaining stones and win the game. Therefore, the function returns `false` for `n` divisible by 4, indicating that the current player cannot win the game.

For all other values of `n`, the function returns `true`, indicating that the current player can make a winning move and eventually force their opponent to be the one left with 4 stones, ensuring their victory.

**Techniques Used:**

- **Mathematical Logic:** The function employs a simple mathematical rule to determine whether the current player can win the game based on the number of stones (`n`) left.

**Summary:**

The `canWinNim` function provides an efficient way to determine the winning strategy for the game of Nim by leveraging a mathematical rule related to the number of stones remaining in a pile.

* [Go back](../readme.md)
