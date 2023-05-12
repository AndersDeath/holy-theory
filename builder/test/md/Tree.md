# Tree
---
# Tree
![Tree1](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/tree1.png)
![Tree2](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/tree2.png)

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

## Binary search tree

```javascript

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  contains(value) {
    let current = this.root;

    while (current) {

      if (value > current.value) {
        current = current.right;

      } else if (value < current.value) {
        current = current.left;

      } else {
        return true;
      }
    }

    return false;
  }

  add(value) {
    let node = {
      value: value,
      left: null,
      right: null
    };

    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (true) {

      if (value > current.value) {

        if (!current.right) {
          current.right = node;
          break;
        }

        current = current.right;

      } else if (value < current.value) {

        if (!current.left) {
          current.left = node;
          break;
        }

        current = current.left;

      } else {
        break;
      }
    }
  }
}

```

* [Go back](../readme.md)