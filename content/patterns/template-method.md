---
title: Template Method
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# Template Method

```typescript
// Step 1: Create an abstract class that defines the template method
abstract class Game {
    // The template method defines the skeleton of an algorithm
    public play(): void {
        this.initialize();
        this.startPlay();
        this.endPlay();
    }

    // Steps of the algorithm that can have different implementations in subclasses
    protected abstract initialize(): void;
    protected abstract startPlay(): void;
    protected abstract endPlay(): void;
}

// Step 2: Create concrete classes that implement the specific steps

// Concrete class for a Football game
class Football extends Game {
    protected initialize(): void {
        console.log("Football Game Initialized! Start playing.");
    }

    protected startPlay(): void {
        console.log("Football Game Started. Enjoy the game!");
    }

    protected endPlay(): void {
        console.log("Football Game Finished!");
    }
}

// Concrete class for a Basketball game
class Basketball extends Game {
    protected initialize(): void {
        console.log("Basketball Game Initialized! Start playing.");
    }

    protected startPlay(): void {
        console.log("Basketball Game Started. Enjoy the game!");
    }

    protected endPlay(): void {
        console.log("Basketball Game Finished!");
    }
}

// Step 3: Client code

function clientCode() {
    // Play a football game
    console.log("Playing Football:");
    const footballGame = new Football();
    footballGame.play();  // Execute the template method

    console.log("\nPlaying Basketball:");
    // Play a basketball game
    const basketballGame = new Basketball();
    basketballGame.play();  // Execute the template method
}

clientCode();

```
