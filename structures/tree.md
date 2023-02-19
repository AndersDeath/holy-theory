# Tree
![Tree1](./tree1.png)
![Tree2](./tree2.png)

## Tree
```javascript
class Tree {
  constructor() {
    this.root = null;
  }

  traverse(callback) {
    function walk(node) {
      callback(node);
      node.children.forEach(walk);
    }
    walk(this.root);
  }

  add(value, parentValue) {
    let newNode = {
      value,
      children: []
    };

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.traverse(node => {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    });
  }
}
```

* [Go back](../readme.md)