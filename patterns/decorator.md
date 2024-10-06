---
title: Decorator
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Decorator

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