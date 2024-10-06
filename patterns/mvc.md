---
title: MVC (Model-View-Controller)
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# MVC (Model-View-Controller)

```typescript
// Step 1: Define the Model (Data and business logic)

class Model {
    private data: string = '';  // Model holds the data

    // Getter for the model's data
    public getData(): string {
        return this.data;
    }

    // Setter to update the model's data
    public setData(data: string): void {
        this.data = data;
    }
}

// Step 2: Define the View (User interface)

class View {
    // Method to display the data to the user
    public displayData(data: string): void {
        console.log(`View: Displaying data -> ${data}`);
    }
}

// Step 3: Define the Controller (Handles the user input and updates the model/view)

class Controller {
    private model: Model;  // Reference to the Model
    private view: View;    // Reference to the View

    constructor(model: Model, view: View) {
        this.model = model;
        this.view = view;
    }

    // Method to set data in the model
    public setData(data: string): void {
        this.model.setData(data);     // Update the model
    }

    // Method to update the view with model data
    public updateView(): void {
        const data = this.model.getData();  // Get data from the model
        this.view.displayData(data);        // Update the view with model data
    }
}

// Step 4: Client code

function clientCode() {
    // Create instances of the Model and View
    const model = new Model();
    const view = new View();

    // Create the Controller and inject the model and view
    const controller = new Controller(model, view);

    console.log('Client: Setting data to "Hello, MVC":');
    controller.setData('Hello, MVC');  // Set data in the model through the controller

    console.log('\nClient: Updating the view:');
    controller.updateView();  // Update the view to reflect model data

    console.log('\nClient: Changing the data to "MVC Pattern Example":');
    controller.setData('MVC Pattern Example');  // Update model data

    console.log('\nClient: Updating the view again:');
    controller.updateView();  // Update the view again to reflect new data
}

clientCode();

```