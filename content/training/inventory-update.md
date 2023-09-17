---
title: Inventory update
tags: ['training', 'task']
languages: ['typescript']
---
# Inventory update

```typescript
function updateInventory(arr1: any, arr2: any) {
  const inventory = [...arr1]

  for (let i = 0; i < arr2.length; i++) {
    const item = arr2[i][1];
    const quantity = arr2[i][0];

    const position = inventory.indexOf(item);

    if (position !== -1) {
      const row = Math.floor(position / 2);
      arr1[row][0] += quantity;
      continue;
    }

    arr1.push([quantity, item]);
  }

  arr1.sort((previous: any, next: any) => (previous[1] > [next[1]] ? 1 : -1));

  return arr1;
}

var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];
const result =  updateInventory(curInv, newInv);
console.log(result)
```

The code is a TypeScript function that updates the inventory based on two arrays: `curInv` and `newInv`. The inventory is represented as an array of arrays, where each inner array contains the quantity and name of an item.

Here's a step-by-step explanation of the code:

1. The function `updateInventory` takes two parameters: `arr1` (current inventory) and `arr2` (new inventory to be added or updated).

2. A copy of the current inventory, named `inventory`, is created using the spread operator `...arr1`.

3. The code then iterates through each item in the new inventory array `arr2` using a `for` loop:
   - For each item, the quantity (`quantity`) and name (`item`) are extracted from the inner array.
   - The `indexOf` method is used to find the position of the `item` in the `inventory` array.
   
4. If the `item` is found in the `inventory` array (`position !== -1`), the existing quantity for that item is updated by adding the `quantity` to the existing quantity.
   - The row index of the found item is calculated by dividing the `position` by 2 and taking the floor value.
   - The `arr1[row][0]` (quantity) is updated with the new quantity.

5. If the `item` is not found in the `inventory` array, a new inner array `[quantity, item]` is added to the `inventory` array.

6. After processing all items in `arr2`, the `inventory` array is sorted based on the item name using the `sort` method and a comparison function.
   - The comparison function compares the names of two items and returns 1 if the first item's name is greater than the second item's name, otherwise -1.

7. The updated `inventory` is returned as the final result.

8. The provided `curInv` and `newInv` arrays are used as test cases, and the `updateInventory` function is called with these arrays.
   
9. The resulting updated inventory is logged to the console.

Techniques used in this code include:
- Creating a copy of an array using the spread operator.
- Iterating through arrays using `for` loops.
- Finding the index of an element in an array using `indexOf`.
- Updating elements in a multi-dimensional array.
- Sorting an array using the `sort` method with a custom comparison function.

Overall, this algorithm efficiently updates and merges two inventories while ensuring that duplicate items are consolidated and the final inventory is sorted by item name.

* [Go back](../readme.md)