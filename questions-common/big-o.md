---
title: Big O
tags: ["question", "interview", "theory", "computer-science"]
languages: [""]
---

# Big O

![Big O](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/02-big-o.png)
![Big O 2](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/02-big-o-2.png)
![Big O 3](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/02-big-o-3.png)

** Source: https://github.com/jamiebuilds/itsy-bitsy-data-structures/blob/master/itsy-bitsy-data-structures.js**

Big O notation is a mathematical concept used in computer science to describe the efficiency or complexity of algorithms, particularly in terms of time and space. It helps in understanding how an algorithm's performance changes as the input size grows. Big O focuses on the "worst-case" scenario, measuring the upper limit of an algorithm's growth rate.

Here's a breakdown:

1. **Time Complexity**: This measures how the runtime of an algorithm changes with the size of the input. For example:
   - \( O(1) \): Constant time - The algorithm takes the same amount of time, no matter the input size.
   - \( O(n) \): Linear time - The algorithm's time grows proportionally with the input size.
   - \( O(n^2) \): Quadratic time - The time grows as the square of the input size, often seen in algorithms with nested loops.
   - \( O(\log n) \): Logarithmic time - The algorithm's time grows logarithmically, common in divide-and-conquer algorithms like binary search.
   - \( O(n \log n) \): Linearithmic time - Time grows as \( n \) times \( \log n \), typical of efficient sorting algorithms like mergesort.

2. **Space Complexity**: This measures how much memory an algorithm needs relative to the input size, using similar Big O notation.

Big O notation is crucial in evaluating algorithm efficiency, helping developers choose optimal solutions for given problems, especially for large data sets.