---
title: Bridge
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Bridge

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