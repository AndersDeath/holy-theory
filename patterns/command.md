---
title: Command
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Command

```typescript
// Step 1: Define the Command interface
interface Command {
    execute(): void;  // All command objects must implement this method
}

// Step 2: Create concrete Command classes that implement the Command interface

// Command to turn on the light
class TurnOnLightCommand implements Command {
    private light: Light;  // The receiver

    constructor(light: Light) {
        this.light = light;
    }

    // Command implementation to turn on the light
    execute(): void {
        this.light.turnOn();
    }
}

// Command to turn off the light
class TurnOffLightCommand implements Command {
    private light: Light;  // The receiver

    constructor(light: Light) {
        this.light = light;
    }

    // Command implementation to turn off the light
    execute(): void {
        this.light.turnOff();
    }
}

// Step 3: Create the Receiver class (the object that the command operates on)
class Light {
    turnOn(): void {
        console.log("The light is ON");
    }

    turnOff(): void {
        console.log("The light is OFF");
    }
}

// Step 4: Create the Invoker class (holds commands and triggers them)

class RemoteControl {
    private command: Command;  // Command to be executed

    // Set the command dynamically
    setCommand(command: Command): void {
        this.command = command;
    }

    // Execute the command
    pressButton(): void {
        this.command.execute();  // Delegates the action to the command object
    }
}

// Step 5: Client code

function clientCode() {
    // The receiver
    const livingRoomLight = new Light();

    // Create command objects
    const turnOn = new TurnOnLightCommand(livingRoomLight);
    const turnOff = new TurnOffLightCommand(livingRoomLight);

    // The invoker (remote control)
    const remote = new RemoteControl();

    // Set and execute the "turn on" command
    remote.setCommand(turnOn);
    console.log("Pressing button to turn ON the light:");
    remote.pressButton();  // Output: The light is ON

    // Set and execute the "turn off" command
    remote.setCommand(turnOff);
    console.log("Pressing button to turn OFF the light:");
    remote.pressButton();  // Output: The light is OFF
}

clientCode();

```
