---
title: Design patterns In Code
tags: ["adjacency", "algorithms", "graph"]
languages: ["java"]
sort: 1300
ignore: true
---

# Design patterns In Code

Here you can find design patterns just in code without any explanations. If you can read it, you will understand everything.

## Creational design pattern

### Singleton

```typescript
const singleton = (function() {
  let instance:any;

  class User {
    public name = '';
    public age = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
  }
  return {
    getInstance: function(name?: string, age?: number) {
      if(!instance) {
        const newName = name || "";
        const newAge = age || 0;
        instance = new User(newName, newAge);
      }
      return instance;
    }
  }
})();

```

## Structural design pattern

## Behavioral design pattern

## Other Noteworthy Patterns