---
title: Chain of Responsibility
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Chain of Responsibility

```typescript
// Step 1: Define the Handler interface
interface Handler {
    setNext(handler: Handler): Handler;  // Method to set the next handler in the chain
    handle(request: string): void;       // Method to handle the request
}

// Step 2: Create the base Handler class to implement the setNext() method
abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;  // Stores the next handler in the chain

    // Set the next handler in the chain and return it (for chaining)
    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    // If the current handler can't handle the request, pass it to the next handler
    handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

// Step 3: Create concrete handlers that extend the base handler class

// Handler for checking if the request is for a monkey
class MonkeyHandler extends AbstractHandler {
    handle(request: string): void {
        if (request === 'Banana') {
            console.log('Monkey: I will eat the Banana!');
        } else {
            console.log('Monkey: I can\'t handle this. Passing to the next handler.');
            super.handle(request);  // Pass to the next handler in the chain
        }
    }
}

// Handler for checking if the request is for a squirrel
class SquirrelHandler extends AbstractHandler {
    handle(request: string): void {
        if (request === 'Nut') {
            console.log('Squirrel: I will eat the Nut!');
        } else {
            console.log('Squirrel: I can\'t handle this. Passing to the next handler.');
            super.handle(request);  // Pass to the next handler in the chain
        }
    }
}

// Handler for checking if the request is for a dog
class DogHandler extends AbstractHandler {
    handle(request: string): void {
        if (request === 'Bone') {
            console.log('Dog: I will chew the Bone!');
        } else {
            console.log('Dog: I can\'t handle this. Passing to the next handler.');
            super.handle(request);  // Pass to the next handler in the chain
        }
    }
}

// Step 4: Client code to set up the chain and handle requests

function clientCode() {
    // Create the handlers
    const monkey = new MonkeyHandler();
    const squirrel = new SquirrelHandler();
    const dog = new DogHandler();

    // Set up the chain: Monkey -> Squirrel -> Dog
    monkey.setNext(squirrel).setNext(dog);

    // Requests to handle
    const requests = ['Banana', 'Nut', 'Bone', 'Fish'];

    for (const request of requests) {
        console.log(`\nRequest: Who will handle '${request}'?`);
        monkey.handle(request);  // Start the request at the first handler in the chain
    }
}

clientCode();

```
