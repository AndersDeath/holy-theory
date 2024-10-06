---
title: Facade
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Facade

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
