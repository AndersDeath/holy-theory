# Chain adding functions

Multiple calls:

add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15

Single call:
add(1); // 1

Mixed thing:
let addTwo = add(2);
addTwo; // 2
addTwo + 5; // 7
addTwo(3); // 5
addTwo(3)(5); // 10

```typescript
function add(x: number): any {
    let sum = x;
    function f(y: number) {
      sum += y;
      return f;
    }
    f.toString = function() {
      return sum;
    };
    return f;
  }
```
* [Go back](../readme.md)
