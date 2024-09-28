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

### Composite

```typescript
// Step 1: Define the component interface with common operations
interface Graphic {
    draw(): void;  // All components will implement this method
}

// Step 2: Implement leaf objects (individual objects) that implement the Graphic interface
class Circle implements Graphic {
    draw(): void {
        console.log("Drawing a Circle.");
    }
}

class Square implements Graphic {
    draw(): void {
        console.log("Drawing a Square.");
    }
}

// Step 3: Implement the composite class that can contain child objects
class CompositeGraphic implements Graphic {
    private children: Graphic[] = [];  // Array to hold child components (leaves or other composites)

    // Add a graphic to the composite
    add(graphic: Graphic): void {
        this.children.push(graphic);
    }

    // Remove a graphic from the composite
    remove(graphic: Graphic): void {
        const index = this.children.indexOf(graphic);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    }

    // Implement the draw method for the composite (calls draw on all children)
    draw(): void {
        console.log("Drawing a CompositeGraphic containing:");
        for (const child of this.children) {
            child.draw();  // Each child graphic's draw method is called
        }
    }
}

// Step 4: Client code
function clientCode() {
    // Create leaf objects
    const circle1 = new Circle();
    const circle2 = new Circle();
    const square = new Square();

    // Create a composite object
    const compositeGraphic = new CompositeGraphic();
    compositeGraphic.add(circle1);
    compositeGraphic.add(circle2);
    compositeGraphic.add(square);

    // Create another composite (nested)
    const nestedComposite = new CompositeGraphic();
    nestedComposite.add(new Square());
    nestedComposite.add(new Circle());

    // Add the nested composite to the main composite
    compositeGraphic.add(nestedComposite);

    // Draw the whole structure
    console.log("Drawing the entire composite structure:");
    compositeGraphic.draw();  // All child graphics (and nested composites) will be drawn
}

// Run client code
clientCode();

```

### Decorator

```typescript
// Step 1: Define the component interface
interface Coffee {
    cost(): number;        // Returns the cost of the coffee
    description(): string; // Returns the description of the coffee
}

// Step 2: Create concrete components (basic objects) that implement the Coffee interface
class SimpleCoffee implements Coffee {
    cost(): number {
        return 5;  // Base cost of the simple coffee
    }

    description(): string {
        return "Simple Coffee";  // Basic description of the coffee
    }
}

// Step 3: Create the abstract decorator class that implements the same interface as the component
class CoffeeDecorator implements Coffee {
    protected coffee: Coffee; // Reference to the object being decorated (wrapped)

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    cost(): number {
        return this.coffee.cost();  // Delegates the cost to the wrapped coffee
    }

    description(): string {
        return this.coffee.description();  // Delegates the description to the wrapped coffee
    }
}

// Step 4: Create concrete decorators that extend the decorator class and add extra functionality
class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 2;  // Adds the cost of milk to the coffee
    }

    description(): string {
        return this.coffee.description() + ", Milk";  // Adds "Milk" to the description
    }
}

class SugarDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 1;  // Adds the cost of sugar to the coffee
    }

    description(): string {
        return this.coffee.description() + ", Sugar";  // Adds "Sugar" to the description
    }
}

class WhipCreamDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 3;  // Adds the cost of whip cream to the coffee
    }

    description(): string {
        return this.coffee.description() + ", Whip Cream";  // Adds "Whip Cream" to the description
    }
}

// Step 5: Client code
function clientCode() {
    // Create a simple coffee
    let myCoffee: Coffee = new SimpleCoffee();
    console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);

    // Add milk to the coffee
    myCoffee = new MilkDecorator(myCoffee);
    console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);

    // Add sugar to the coffee
    myCoffee = new SugarDecorator(myCoffee);
    console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);

    // Add whip cream to the coffee
    myCoffee = new WhipCreamDecorator(myCoffee);
    console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);
}

// Run client code
clientCode();

```

### Facade


```typescript
// Step 1: Define complex subsystems (classes with complex logic)

class CPU {
    freeze(): void {
        console.log("CPU is frozen.");
    }

    jump(position: number): void {
        console.log(`CPU jumps to memory address ${position}.`);
    }

    execute(): void {
        console.log("CPU starts executing instructions.");
    }
}

class Memory {
    load(position: number, data: string): void {
        console.log(`Memory loads data "${data}" into position ${position}.`);
    }
}

class HardDrive {
    read(lba: number, size: number): string {
        console.log(`HardDrive reads ${size} bytes from LBA ${lba}.`);
        return "bootloader_data";
    }
}

// Step 2: Create the Facade class that provides a simplified interface to the client
class ComputerFacade {
    private cpu: CPU;
    private memory: Memory;
    private hardDrive: HardDrive;

    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    // The Facade method that hides the complex logic of booting up a computer
    startComputer(): void {
        console.log("Starting computer...");
        this.cpu.freeze();
        const bootAddress = 0x00;
        const bootSector = this.hardDrive.read(bootAddress, 512);
        this.memory.load(bootAddress, bootSector);
        this.cpu.jump(bootAddress);
        this.cpu.execute();
        console.log("Computer started.");
    }
}

// Step 3: Client code using the Facade

function clientCode() {
    const computer = new ComputerFacade();
    // The client only interacts with the simplified startComputer() method
    computer.startComputer();  // All complex subsystem interactions are hidden
}

clientCode();

```
### Flyweight

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
### Proxy

```typescript
// Step 1: Define the Subject interface (common interface for both RealSubject and Proxy)
interface Image {
    display(): void;  // Defines the method that both the real and proxy objects will implement
}

// Step 2: Create the RealSubject class (the actual object that does the work)
class RealImage implements Image {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadFromDisk();  // Simulate loading an image from disk when the real object is created
    }

    // This method does the actual work (e.g., displaying the image)
    display(): void {
        console.log(`Displaying ${this.filename}`);
    }

    // Simulate the costly operation of loading an image from disk
    private loadFromDisk(): void {
        console.log(`Loading ${this.filename} from disk...`);
    }
}

// Step 3: Create the Proxy class that controls access to the RealSubject
class ProxyImage implements Image {
    private realImage: RealImage | null = null;  // Reference to the RealImage, initially null
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    // Proxy controls access to the RealImage's display method
    display(): void {
        if (this.realImage === null) {
            // Lazily load the real image only when it's actually needed (on the first display call)
            this.realImage = new RealImage(this.filename);
        }
        // Delegate the display operation to the real image
        this.realImage.display();
    }
}

// Step 4: Client code
function clientCode() {
    // The client uses the ProxyImage instead of directly interacting with RealImage
    const image: Image = new ProxyImage("test_image.jpg");

    // Image will only be loaded once, when display is called the first time
    console.log("First time calling display():");
    image.display();  // Loads the image from disk and displays it

    // The image is already loaded, so the next call will not reload it
    console.log("\nSecond time calling display():");
    image.display();  // Displays the image without loading it again
}

clientCode();

```

## Behavioral design pattern

## Other Noteworthy Patterns