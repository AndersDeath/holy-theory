---
title: Mediator
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Mediator

```typescript

// Step 1: Define the Mediator interface
interface Mediator {
    notify(sender: Component, event: string): void;  // Notify the mediator about events
}

// Step 2: Create Concrete Mediator that coordinates communication between components
class ConcreteMediator implements Mediator {
    private component1: Component1;
    private component2: Component2;

    // Set references to components in the mediator
    constructor(c1: Component1, c2: Component2) {
        this.component1 = c1;
        this.component1.setMediator(this);  // Each component knows its mediator

        this.component2 = c2;
        this.component2.setMediator(this);  // Each component knows its mediator
    }

    // Handle communication between components based on events
    notify(sender: Component, event: string): void {
        if (event === 'A') {
            console.log('Mediator reacts to event A and triggers Component2.');
            this.component2.doC();
        }

        if (event === 'D') {
            console.log('Mediator reacts to event D and triggers Component1.');
            this.component1.doB();
        }
    }
}

// Step 3: Create the base Component class that holds a reference to the mediator
class Component {
    protected mediator: Mediator;

    // Method to set the mediator
    setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

// Step 4: Create Concrete Components that communicate through the mediator

class Component1 extends Component {
    // Method that triggers event A
    doA(): void {
        console.log('Component1 does A.');
        this.mediator.notify(this, 'A');  // Notify the mediator about event A
    }

    // Method that triggers event B
    doB(): void {
        console.log('Component1 does B.');
    }
}

class Component2 extends Component {
    // Method that triggers event C
    doC(): void {
        console.log('Component2 does C.');
    }

    // Method that triggers event D
    doD(): void {
        console.log('Component2 does D.');
        this.mediator.notify(this, 'D');  // Notify the mediator about event D
    }
}

// Step 5: Client code

function clientCode() {
    const component1 = new Component1();
    const component2 = new Component2();
    const mediator = new ConcreteMediator(component1, component2);  // Set up mediator

    console.log('Client triggers operation A:');
    component1.doA();  // Component1 triggers event A

    console.log('\nClient triggers operation D:');
    component2.doD();  // Component2 triggers event D
}

clientCode();

```