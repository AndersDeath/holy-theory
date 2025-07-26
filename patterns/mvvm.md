---
title: MVVM (Model-View-ViewModel) 
tags: ["question", "patterns", "design"]
languages: ["typescript"]
---

# MVVM (Model-View-ViewModel) 

```typescript

// Step 1: Define the Model (Data and business logic)
class Model {
    private data: string = '';  // Holds the application data

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
    // Method to display the data (simulates the view in a real UI)
    public displayData(data: string): void {
        console.log(`View: Displaying data -> ${data}`);
    }
    
    // Simulated method for capturing user input (in a real UI, this could be event binding)
    public captureInput(): string {
        return 'User input';  // Mock user input
    }
}

// Step 3: Define the ViewModel (Intermediary that binds the Model to the View)
class ViewModel {
    private model: Model;  // Reference to the Model
    private view: View;    // Reference to the View
    private boundData: string = '';  // Data bound to the view

    constructor(model: Model, view: View) {
        this.model = model;
        this.view = view;
    }

    // Method to update the ViewModel data from the Model
    public loadDataFromModel(): void {
        this.boundData = this.model.getData();  // Load data from the model
    }

    // Method to bind data to the View
    public updateView(): void {
        this.view.displayData(this.boundData);  // Pass bound data to the view
    }

    // Method to capture input from the View and update the Model
    public updateModelFromView(): void {
        const inputData = this.view.captureInput();  // Capture input from the view
        this.model.setData(inputData);               // Update the model with user input
    }
}

// Step 4: Client code

function clientCode() {
    // Create instances of the Model and View
    const model = new Model();
    const view = new View();

    // Create the ViewModel and inject the model and view
    const viewModel = new ViewModel(model, view);

    console.log('Client: Setting data in the Model to "Hello, MVVM":');
    model.setData('Hello, MVVM');  // Set initial data in the model

    console.log('\nClient: Loading data into the ViewModel from the Model:');
    viewModel.loadDataFromModel();  // ViewModel loads data from the model

    console.log('\nClient: Updating the View from the ViewModel:');
    viewModel.updateView();  // ViewModel updates the view to reflect the model data

    console.log('\nClient: Simulating user input and updating the Model:');
    viewModel.updateModelFromView();  // Capture input from the view and update the model

    console.log('\nClient: Loading data again from the Model and updating the View:');
    viewModel.loadDataFromModel();  // Reload data after model update
    viewModel.updateView();         // Update the view again
}

clientCode();

```