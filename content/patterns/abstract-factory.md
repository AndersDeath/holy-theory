---
title: Abstract factory
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Abstract factory

```typescript
// Step 1: Define abstract product interfaces for Button and Checkbox
interface Button {
    render(): void;
}

interface Checkbox {
    check(): void;
}

// Step 2: Implement concrete products for Windows (WindowsButton, WindowsCheckbox)
class WindowsButton implements Button {
    render(): void {
        console.log("Rendering a Windows button.");
    }
}

class WindowsCheckbox implements Checkbox {
    check(): void {
        console.log("Checking a Windows checkbox.");
    }
}

// Step 3: Implement concrete products for Mac (MacButton, MacCheckbox)
class MacButton implements Button {
    render(): void {
        console.log("Rendering a Mac button.");
    }
}

class MacCheckbox implements Checkbox {
    check(): void {
        console.log("Checking a Mac checkbox.");
    }
}

// Step 4: Define the Abstract Factory interface that creates families of related products
interface UIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

// Step 5: Implement concrete factories for Windows and Mac
class WindowsUIFactory implements UIFactory {
    createButton(): Button {
        return new WindowsButton();
    }

    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

class MacUIFactory implements UIFactory {
    createButton(): Button {
        return new MacButton();
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

// Step 6: Client code that works with any factory type
function clientCode(factory: UIFactory): void {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    button.render();
    checkbox.check();
}

// Step 7: Usage of the Abstract Factory pattern
console.log("Using Windows UI Factory:");
clientCode(new WindowsUIFactory());

console.log("\nUsing Mac UI Factory:");
clientCode(new MacUIFactory());

```
