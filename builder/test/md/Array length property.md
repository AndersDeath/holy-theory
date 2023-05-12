# Array length property
---
# Array length property
What is the value of clothes[0]:

```javascript
const clothes = ['jacket', 't-shirt'];
    clothes.length = 0;
    clothes[0];
```

Reducing the value of the length property has the side-effect of deleting own array elements whose array index is between the old and new length values.
https://262.ecma-international.org/6.0/#sec-properties-of-array-instances-length

As result when JavaScript executes clothes.length = 0, all clothes items are deleted.

clothes[0] is undefined, because clothes array has been emptied.

* [Go back](../readme.md)