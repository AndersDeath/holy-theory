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
### Factory Method

```typescript
// Step 1: Define an interface for the product (Transport)
interface Transport {
    deliver(): void;
}

// Step 2: Implement concrete products (Car and Truck)
class Truck implements Transport {
    deliver(): void {
        console.log("Delivering by truck on the road.");
    }
}

class Ship implements Transport {
    deliver(): void {
        console.log("Delivering by ship on the sea.");
    }
}

// Step 3: Define the Creator class with the factory method
abstract class Logistics {
    // This is the factory method that subclasses will override
    public abstract createTransport(): Transport;

    // Some core business logic that relies on the factory method
    public planDelivery(): void {
        const transport = this.createTransport();
        transport.deliver();
    }
}

// Step 4: Implement concrete creators (RoadLogistics and SeaLogistics)
class RoadLogistics extends Logistics {
    // Overrides the factory method to create a Truck
    public createTransport(): Transport {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    // Overrides the factory method to create a Ship
    public createTransport(): Transport {
        return new Ship();
    }
}

// Step 5: Usage of the Factory Method pattern
function clientCode(logistics: Logistics) {
    console.log("Client: Planning delivery...");
    logistics.planDelivery();
}

// Example of using RoadLogistics to create a truck
console.log("Road Logistics:");
clientCode(new RoadLogistics());

// Example of using SeaLogistics to create a ship
console.log("\nSea Logistics:");
clientCode(new SeaLogistics());

```

## Structural design pattern

## Behavioral design pattern

## Other Noteworthy Patterns