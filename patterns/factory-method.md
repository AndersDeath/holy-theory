---
title: Factory method
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Factory method

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
