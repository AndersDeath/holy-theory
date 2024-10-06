---
title: Proxy
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Proxy

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
