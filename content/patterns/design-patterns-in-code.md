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
### Abstract factory

```typescript
// Step 1: Define abstract product interfaces for Button and Checkbox
interface Button {
    render(): void;
}

interface Checkbox {
    check(): void;
}

// Step 2: Implement concrete products for Windows (WindowsButton, WindowsCheckbox)
class WindowsButton implements Button {
    render(): void {
        console.log("Rendering a Windows button.");
    }
}

class WindowsCheckbox implements Checkbox {
    check(): void {
        console.log("Checking a Windows checkbox.");
    }
}

// Step 3: Implement concrete products for Mac (MacButton, MacCheckbox)
class MacButton implements Button {
    render(): void {
        console.log("Rendering a Mac button.");
    }
}

class MacCheckbox implements Checkbox {
    check(): void {
        console.log("Checking a Mac checkbox.");
    }
}

// Step 4: Define the Abstract Factory interface that creates families of related products
interface UIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

// Step 5: Implement concrete factories for Windows and Mac
class WindowsUIFactory implements UIFactory {
    createButton(): Button {
        return new WindowsButton();
    }

    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

class MacUIFactory implements UIFactory {
    createButton(): Button {
        return new MacButton();
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

// Step 6: Client code that works with any factory type
function clientCode(factory: UIFactory): void {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    button.render();
    checkbox.check();
}

// Step 7: Usage of the Abstract Factory pattern
console.log("Using Windows UI Factory:");
clientCode(new WindowsUIFactory());

console.log("\nUsing Mac UI Factory:");
clientCode(new MacUIFactory());

```
### Builder

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

### Prototype

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
## Structural design pattern

### Adapter

```typescript
// Step 1: Define a class that represents a RoundPeg
class RoundPeg {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }
}

// Step 2: Define a class that represents a RoundHole
class RoundHole {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    // Checks if a RoundPeg fits into the RoundHole
    public fits(peg: RoundPeg): boolean {
        return this.radius >= peg.getRadius();
    }
}

// Step 3: Define a class that represents a SquarePeg
class SquarePeg {
    private width: number;

    constructor(width: number) {
        this.width = width;
    }

    public getWidth(): number {
        return this.width;
    }
}

// Step 4: Create the Adapter to make SquarePeg compatible with RoundHole
class SquarePegAdapter extends RoundPeg {
    private squarePeg: SquarePeg;

    constructor(squarePeg: SquarePeg) {
        // Call the parent constructor with the adapted value (diagonal of the square)
        super(Math.sqrt(Math.pow(squarePeg.getWidth() / 2, 2) * 2));
        this.squarePeg = squarePeg;
    }

    // The adapter converts the square peg's width into an equivalent round radius
    public getRadius(): number {
        return Math.sqrt(Math.pow(this.squarePeg.getWidth() / 2, 2) * 2);
    }
}

// Step 5: Client code
function clientCode() {
    const roundHole = new RoundHole(5);  // RoundHole with radius 5
    const roundPeg = new RoundPeg(5);    // RoundPeg with radius 5
    console.log(`Round peg fits in round hole? ${roundHole.fits(roundPeg)}`); // True

    const smallSquarePeg = new SquarePeg(5);  // SquarePeg with width 5
    const largeSquarePeg = new SquarePeg(10); // SquarePeg with width 10

    // Using the adapter to make SquarePeg compatible with RoundHole
    const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
    const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);

    console.log(`Small square peg fits in round hole? ${roundHole.fits(smallSquarePegAdapter)}`); // True
    console.log(`Large square peg fits in round hole? ${roundHole.fits(largeSquarePegAdapter)}`); // False
}

// Execute client code
clientCode();

```
### Bridge


```typescript
// Step 1: Define the implementation interface (Bridge)
interface Device {
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
    getVolume(): number;
    setVolume(volume: number): void;
    getName(): string;
}

// Step 2: Implement concrete implementations (Concrete Devices)
class Radio implements Device {
    private enabled: boolean = false;
    private volume: number = 10;

    isEnabled(): boolean {
        return this.enabled;
    }

    enable(): void {
        this.enabled = true;
    }

    disable(): void {
        this.enabled = false;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(volume: number): void {
        this.volume = volume;
    }

    getName(): string {
        return "Radio";
    }
}

class TV implements Device {
    private enabled: boolean = false;
    private volume: number = 20;

    isEnabled(): boolean {
        return this.enabled;
    }

    enable(): void {
        this.enabled = true;
    }

    disable(): void {
        this.enabled = false;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(volume: number): void {
        this.volume = volume;
    }

    getName(): string {
        return "TV";
    }
}

// Step 3: Define the abstraction class (RemoteControl)
class RemoteControl {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    togglePower(): void {
        if (this.device.isEnabled()) {
            this.device.disable();
            console.log(`${this.device.getName()} turned OFF.`);
        } else {
            this.device.enable();
            console.log(`${this.device.getName()} turned ON.`);
        }
    }

    volumeUp(): void {
        let volume = this.device.getVolume();
        this.device.setVolume(volume + 10);
        console.log(`${this.device.getName()} volume increased to ${this.device.getVolume()}.`);
    }

    volumeDown(): void {
        let volume = this.device.getVolume();
        this.device.setVolume(volume - 10);
        console.log(`${this.device.getName()} volume decreased to ${this.device.getVolume()}.`);
    }
}

// Step 4: Define a refined abstraction (AdvancedRemoteControl)
class AdvancedRemoteControl extends RemoteControl {
    mute(): void {
        this.device.setVolume(0);
        console.log(`${this.device.getName()} is muted.`);
    }
}

// Step 5: Client code using the Bridge pattern
function clientCode() {
    const tv = new TV();
    const radio = new Radio();

    const remoteControl = new RemoteControl(tv);
    const advancedRemoteControl = new AdvancedRemoteControl(radio);

    console.log("\nUsing TV with a simple remote control:");
    remoteControl.togglePower();
    remoteControl.volumeUp();

    console.log("\nUsing Radio with an advanced remote control:");
    advancedRemoteControl.togglePower();
    advancedRemoteControl.volumeUp();
    advancedRemoteControl.mute();
}

clientCode();

```

## Behavioral design pattern

## Other Noteworthy Patterns