# Times function in JS
---
# Times function in JS

Sometimes, we often find ourselves in need of running a particular function several times.

```javascript
const times = (func, n) => {
  Array.from(Array(n)).forEach(() => {
    func();
  });
};

times(() => {
  randomFunction();
}, 3);
```

* [Go back](../readme.md)