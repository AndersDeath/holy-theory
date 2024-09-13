---
title: Visitor
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Visitor

```typescript
// Step 1: Create the Visitor interface
interface Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void;
    visitConcreteComponentB(element: ConcreteComponentB): void;
}

// Step 2: Create the Component interface (accepts visitors)
interface Component {
    accept(visitor: Visitor): void;  // Accept a visitor
}

// Step 3: Create Concrete Components that implement the accept method

// Concrete Component A
class ConcreteComponentA implements Component {
    // Accept a visitor and call its method corresponding to this component
    accept(visitor: Visitor): void {
        visitor.visitConcreteComponentA(this);
    }

    // Component-specific method
    exclusiveMethodOfA(): string {
        return 'A-specific behavior';
    }
}

// Concrete Component B
class ConcreteComponentB implements Component {
    // Accept a visitor and call its method corresponding to this component
    accept(visitor: Visitor): void {
        visitor.visitConcreteComponentB(this);
    }

    // Component-specific method
    exclusiveMethodOfB(): string {
        return 'B-specific behavior';
    }
}

// Step 4: Create Concrete Visitors that implement different behaviors

// Concrete Visitor 1
class ConcreteVisitor1 implements Visitor {
    // Define specific behavior when visiting ConcreteComponentA
    visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(`ConcreteVisitor1: ${element.exclusiveMethodOfA()} + additional logic.`);
    }

    // Define specific behavior when visiting ConcreteComponentB
    visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(`ConcreteVisitor1: ${element.exclusiveMethodOfB()} + additional logic.`);
    }
}

// Concrete Visitor 2
class ConcreteVisitor2 implements Visitor {
    // Define different behavior for ConcreteComponentA
    visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(`ConcreteVisitor2: ${element.exclusiveMethodOfA()} + different logic.`);
    }

    // Define different behavior for ConcreteComponentB
    visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(`ConcreteVisitor2: ${element.exclusiveMethodOfB()} + different logic.`);
    }
}

// Step 5: Client code

function clientCode(components: Component[], visitor: Visitor) {
    for (const component of components) {
        component.accept(visitor);  // Each component accepts a visitor
    }
}

const components: Component[] = [new ConcreteComponentA(), new ConcreteComponentB()];

console.log("Client: Running with ConcreteVisitor1:");
const visitor1 = new ConcreteVisitor1();
clientCode(components, visitor1);  // Output with ConcreteVisitor1

console.log("\nClient: Running with ConcreteVisitor2:");
const visitor2 = new ConcreteVisitor2();
clientCode(components, visitor2);  // Output with ConcreteVisitor2

```