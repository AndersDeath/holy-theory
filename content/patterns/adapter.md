---
title: Adapter
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Adapter

```typescript
// Step 1: Define a class that represents a RoundPeg
class RoundPeg {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }
}

// Step 2: Define a class that represents a RoundHole
class RoundHole {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    // Checks if a RoundPeg fits into the RoundHole
    public fits(peg: RoundPeg): boolean {
        return this.radius >= peg.getRadius();
    }
}

// Step 3: Define a class that represents a SquarePeg
class SquarePeg {
    private width: number;

    constructor(width: number) {
        this.width = width;
    }

    public getWidth(): number {
        return this.width;
    }
}

// Step 4: Create the Adapter to make SquarePeg compatible with RoundHole
class SquarePegAdapter extends RoundPeg {
    private squarePeg: SquarePeg;

    constructor(squarePeg: SquarePeg) {
        // Call the parent constructor with the adapted value (diagonal of the square)
        super(Math.sqrt(Math.pow(squarePeg.getWidth() / 2, 2) * 2));
        this.squarePeg = squarePeg;
    }

    // The adapter converts the square peg's width into an equivalent round radius
    public getRadius(): number {
        return Math.sqrt(Math.pow(this.squarePeg.getWidth() / 2, 2) * 2);
    }
}

// Step 5: Client code
function clientCode() {
    const roundHole = new RoundHole(5);  // RoundHole with radius 5
    const roundPeg = new RoundPeg(5);    // RoundPeg with radius 5
    console.log(`Round peg fits in round hole? ${roundHole.fits(roundPeg)}`); // True

    const smallSquarePeg = new SquarePeg(5);  // SquarePeg with width 5
    const largeSquarePeg = new SquarePeg(10); // SquarePeg with width 10

    // Using the adapter to make SquarePeg compatible with RoundHole
    const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
    const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);

    console.log(`Small square peg fits in round hole? ${roundHole.fits(smallSquarePegAdapter)}`); // True
    console.log(`Large square peg fits in round hole? ${roundHole.fits(largeSquarePegAdapter)}`); // False
}

// Execute client code
clientCode();

```
