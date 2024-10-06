---
title: Observer
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Observer

```typescript
// Step 1: Define the Observer interface
interface Observer {
    update(data: any): void;  // All observers must implement the update method
}

// Step 2: Define the Subject interface (the object being observed)
interface Subject {
    registerObserver(observer: Observer): void;    // Method to register an observer
    removeObserver(observer: Observer): void;      // Method to remove an observer
    notifyObservers(): void;                       // Method to notify all observers
}

// Step 3: Create the concrete Subject class
class WeatherStation implements Subject {
    private observers: Observer[] = [];   // List of observers subscribed to this subject
    private temperature: number = 0;      // Example data (temperature) to be observed

    // Register a new observer
    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    // Remove an existing observer
    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    // Notify all observers about the state change
    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature);  // Pass the current temperature to observers
        }
    }

    // Simulate a change in the weather (temperature)
    setTemperature(temp: number): void {
        console.log(`WeatherStation: New temperature is ${temp}°C`);
        this.temperature = temp;
        this.notifyObservers();  // Notify all observers about the temperature change
    }
}

// Step 4: Create concrete Observer classes
class TemperatureDisplay implements Observer {
    update(temperature: number): void {
        console.log(`TemperatureDisplay: The current temperature is ${temperature}°C`);
    }
}

class Fan implements Observer {
    update(temperature: number): void {
        if (temperature > 25) {
            console.log("Fan: It's hot! Turning the fan ON.");
        } else {
            console.log("Fan: It's cool. Turning the fan OFF.");
        }
    }
}

// Step 5: Client code
function clientCode() {
    // Create a subject (WeatherStation)
    const weatherStation = new WeatherStation();

    // Create observers (TemperatureDisplay and Fan)
    const tempDisplay = new TemperatureDisplay();
    const fan = new Fan();

    // Register observers with the subject
    weatherStation.registerObserver(tempDisplay);
    weatherStation.registerObserver(fan);

    // Simulate changes in the weather station
    console.log("\nSetting temperature to 22°C:");
    weatherStation.setTemperature(22);  // This will notify all observers

    console.log("\nSetting temperature to 30°C:");
    weatherStation.setTemperature(30);  // This will notify all observers
}

// Run client code
clientCode();

```
