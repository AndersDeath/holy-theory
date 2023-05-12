# Singleton
---
# Singleton

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

* [Go back](../readme.md)