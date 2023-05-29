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
