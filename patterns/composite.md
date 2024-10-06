---
title: Composite
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Composite

```typescript
// Step 1: Define the component interface with common operations
interface Graphic {
    draw(): void;  // All components will implement this method
}

// Step 2: Implement leaf objects (individual objects) that implement the Graphic interface
class Circle implements Graphic {
    draw(): void {
        console.log("Drawing a Circle.");
    }
}

class Square implements Graphic {
    draw(): void {
        console.log("Drawing a Square.");
    }
}

// Step 3: Implement the composite class that can contain child objects
class CompositeGraphic implements Graphic {
    private children: Graphic[] = [];  // Array to hold child components (leaves or other composites)

    // Add a graphic to the composite
    add(graphic: Graphic): void {
        this.children.push(graphic);
    }

    // Remove a graphic from the composite
    remove(graphic: Graphic): void {
        const index = this.children.indexOf(graphic);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    }

    // Implement the draw method for the composite (calls draw on all children)
    draw(): void {
        console.log("Drawing a CompositeGraphic containing:");
        for (const child of this.children) {
            child.draw();  // Each child graphic's draw method is called
        }
    }
}

// Step 4: Client code
function clientCode() {
    // Create leaf objects
    const circle1 = new Circle();
    const circle2 = new Circle();
    const square = new Square();

    // Create a composite object
    const compositeGraphic = new CompositeGraphic();
    compositeGraphic.add(circle1);
    compositeGraphic.add(circle2);
    compositeGraphic.add(square);

    // Create another composite (nested)
    const nestedComposite = new CompositeGraphic();
    nestedComposite.add(new Square());
    nestedComposite.add(new Circle());

    // Add the nested composite to the main composite
    compositeGraphic.add(nestedComposite);

    // Draw the whole structure
    console.log("Drawing the entire composite structure:");
    compositeGraphic.draw();  // All child graphics (and nested composites) will be drawn
}

// Run client code
clientCode();

```