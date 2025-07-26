---
title: Builder
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Builder

```typescript
// Step 1: Define the product (House) class
class House {
    public walls?: string;
    public doors?: number;
    public windows?: number;
    public roof?: string;
    
    public showHouse(): void {
        console.log(`House with ${this.walls}, ${this.doors} doors, ${this.windows} windows, and a ${this.roof}.`);
    }
}

// Step 2: Define the builder interface
interface Builder {
    reset(): void;
    setWalls(wallType: string): void;
    setDoors(doorCount: number): void;
    setWindows(windowCount: number): void;
    setRoof(roofType: string): void;
    getResult(): House;
}

// Step 3: Implement the concrete builder (HouseBuilder)
class HouseBuilder implements Builder {
    private house: House;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.house = new House();
    }

    public setWalls(wallType: string): void {
        this.house.walls = wallType;
    }

    public setDoors(doorCount: number): void {
        this.house.doors = doorCount;
    }

    public setWindows(windowCount: number): void {
        this.house.windows = windowCount;
    }

    public setRoof(roofType: string): void {
        this.house.roof = roofType;
    }

    public getResult(): House {
        const result = this.house;
        this.reset(); // reset builder for a new build process
        return result;
    }
}

// Step 4: Define the director class to control the construction process
class Director {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    // Commonly used steps to build a standard house
    public constructSimpleHouse(): void {
        this.builder.setWalls("brick walls");
        this.builder.setDoors(2);
        this.builder.setWindows(4);
        this.builder.setRoof("metal roof");
    }

    // Steps to build a more complex house
    public constructLuxuryHouse(): void {
        this.builder.setWalls("glass walls");
        this.builder.setDoors(6);
        this.builder.setWindows(12);
        this.builder.setRoof("solar panel roof");
    }
}

// Step 5: Client code
function clientCode(director: Director) {
    const builder = new HouseBuilder();
    director.setBuilder(builder);

    console.log("Building a simple house:");
    director.constructSimpleHouse();
    let house = builder.getResult();
    house.showHouse();

    console.log("\nBuilding a luxury house:");
    director.constructLuxuryHouse();
    house = builder.getResult();
    house.showHouse();
}

// Usage of the Builder pattern
const director = new Director(new HouseBuilder());
clientCode(director);

```