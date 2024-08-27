---
title: Prototype
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Prototype

```typescript
// Step 1: Define the Prototype interface
interface Prototype {
    clone(): this;
}

// Step 2: Implement the base class (Shape) that implements the Prototype interface
class Shape implements Prototype {
    public x: number;
    public y: number;
    public color: string;

    constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    // The clone method is used to create a copy of the current object
    public clone(): this {
        return Object.create(this); // Creates a shallow copy of the object
    }

    public draw(): void {
        console.log(`Drawing a shape at (${this.x}, ${this.y}) with color ${this.color}`);
    }
}

// Step 3: Implement concrete prototypes (Circle and Rectangle) extending the base Shape class
class Circle extends Shape {
    public radius: number;

    constructor(x: number, y: number, color: string, radius: number) {
        super(x, y, color);
        this.radius = radius;
    }

    // Override the clone method to copy the Circle object
    public clone(): this {
        const clone = super.clone() as this; // Deep clone the Circle properties
        clone.radius = this.radius; // Manually copy the radius
        return clone;
    }

    public draw(): void {
        console.log(`Drawing a circle at (${this.x}, ${this.y}) with radius ${this.radius} and color ${this.color}`);
    }
}

class Rectangle extends Shape {
    public width: number;
    public height: number;

    constructor(x: number, y: number, color: string, width: number, height: number) {
        super(x, y, color);
        this.width = width;
        this.height = height;
    }

    // Override the clone method to copy the Rectangle object
    public clone(): this {
        const clone = super.clone() as this;
        clone.width = this.width; // Manually copy the width
        clone.height = this.height; // Manually copy the height
        return clone;
    }

    public draw(): void {
        console.log(`Drawing a rectangle at (${this.x}, ${this.y}) with width ${this.width}, height ${this.height}, and color ${this.color}`);
    }
}

// Step 4: Client code
function clientCode() {
    // Create an original Circle
    const originalCircle = new Circle(10, 20, "red", 15);
    originalCircle.draw();

    // Clone the Circle
    const clonedCircle = originalCircle.clone();
    clonedCircle.draw(); // Cloned circle will have the same properties as the original

    // Modify the cloned Circle's properties
    clonedCircle.x = 30;
    clonedCircle.y = 40;
    clonedCircle.radius = 25;
    clonedCircle.draw();

    // Create an original Rectangle
    const originalRectangle = new Rectangle(5, 5, "blue", 10, 20);
    originalRectangle.draw();

    // Clone the Rectangle
    const clonedRectangle = originalRectangle.clone();
    clonedRectangle.draw(); // Cloned rectangle will have the same properties as the original

    // Modify the cloned Rectangle's properties
    clonedRectangle.x = 50;
    clonedRectangle.y = 60;
    clonedRectangle.width = 30;
    clonedRectangle.height = 40;
    clonedRectangle.draw();
}

// Test the Prototype pattern
clientCode();

```