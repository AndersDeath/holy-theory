---
title: Flyweight
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Flyweight

```typescript
// Step 1: Define the Flyweight (shared object) interface
interface Shape {
    draw(x: number, y: number, color: string): void; // The flyweight method
}

// Step 2: Create concrete flyweight classes that implement the Shape interface
class Circle implements Shape {
    private radius: number;  // Intrinsic state (shared between objects)

    constructor(radius: number) {
        this.radius = radius;
    }

    // The draw method accepts extrinsic state (x, y, and color)
    draw(x: number, y: number, color: string): void {
        console.log(`Drawing a ${color} circle with radius ${this.radius} at (${x}, ${y})`);
    }
}

// Step 3: Create the FlyweightFactory to manage flyweight objects
class ShapeFactory {
    private static circleMap: { [key: string]: Circle } = {};  // Stores created flyweights (circles)

    // Returns a flyweight (shared object) or creates a new one if not already present
    static getCircle(radius: number): Circle {
        const key = radius.toString();  // Use radius as the key to share objects
        if (!this.circleMap[key]) {
            console.log(`Creating a new circle with radius ${radius}`);
            this.circleMap[key] = new Circle(radius);  // Create and store a new circle if it doesn't exist
        }
        return this.circleMap[key];  // Return the existing circle
    }
}

// Step 4: Client code
function clientCode() {
    // The factory will return shared circle objects based on the radius
    const circle1 = ShapeFactory.getCircle(5);  // Create or retrieve a circle with radius 5
    circle1.draw(10, 10, "Red");

    const circle2 = ShapeFactory.getCircle(5);  // Reuses the same circle object with radius 5
    circle2.draw(20, 20, "Green");

    const circle3 = ShapeFactory.getCircle(10);  // Create or retrieve a circle with radius 10
    circle3.draw(30, 30, "Blue");

    const circle4 = ShapeFactory.getCircle(5);  // Reuses the same circle object with radius 5
    circle4.draw(40, 40, "Yellow");

    // The number of created objects will be minimized
}

clientCode();

```
