---
title: State
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# State

```typescript
// Step 1: Define the State interface
interface State {
    doAction(context: Context): void;  // Method that all concrete states must implement
}

// Step 2: Create concrete states implementing the State interface

// Concrete state for when the TV is on
class OnState implements State {
    doAction(context: Context): void {
        console.log("TV is now ON.");
        context.setState(this);  // Set the current state to OnState
    }

    // Optional: for debugging, show current state as a string
    toString(): string {
        return "TV is ON state.";
    }
}

// Concrete state for when the TV is off
class OffState implements State {
    doAction(context: Context): void {
        console.log("TV is now OFF.");
        context.setState(this);  // Set the current state to OffState
    }

    // Optional: for debugging, show current state as a string
    toString(): string {
        return "TV is OFF state.";
    }
}

// Step 3: Create the Context class that changes its behavior as its state changes
class Context {
    private state: State;  // Current state of the context

    constructor() {
        this.state = new OffState();  // Initial state is OffState
    }

    // Method to set the current state
    setState(state: State): void {
        this.state = state;
    }

    // Method to get the current state (for debugging purposes)
    getState(): State {
        return this.state;
    }

    // Method that delegates the action to the current state
    request(): void {
        this.state.doAction(this);  // Perform action based on the current state
    }
}

// Step 4: Client code to demonstrate changing states

function clientCode() {
    const context = new Context();  // Create the context (initial state is OFF)

    console.log("Turning the TV ON:");
    const onState = new OnState();
    context.setState(onState);  // Set state to ON
    context.request();           // Execute action based on current state (ON)

    console.log("\nTurning the TV OFF:");
    const offState = new OffState();
    context.setState(offState);  // Set state to OFF
    context.request();           // Execute action based on current state (OFF)

    // Check the current state (for debugging)
    console.log(`\nCurrent state: ${context.getState().toString()}`);
}

clientCode();

```
