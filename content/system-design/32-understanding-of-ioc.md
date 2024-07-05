---
title: Understanding Inversion of Control (IoC)
tags: ["system design"]
languages: [""]
---

## Understanding Inversion of Control (IoC)

### Introduction to Inversion of Control

Inversion of Control (IoC) is a design principle in software engineering where the control of objects or portions of a program is transferred to a container or framework. This is in contrast to traditional programming where the control flow is determined by the program itself. IoC helps in creating more modular and testable code.

### Why Use IoC?

1. **Decoupling**: It reduces the dependency between different parts of an application.
2. **Reusability**: Components become reusable since they don't rely on specific implementations.
3. **Testability**: Makes it easier to write unit tests because dependencies can be easily mocked.

### IoC in TypeScript with an Example

To demonstrate IoC in TypeScript, we will use Dependency Injection (DI), a common pattern to achieve IoC.

#### Step-by-Step Example

1. **Define Interfaces**

   First, we define interfaces for the services our application will use. Interfaces allow us to define the contract that the implementations will follow.

   ```typescript
   interface ILogger {
       log(message: string): void;
   }

   interface IDataAccess {
       getData(): string;
   }
   ```

2. **Implement the Interfaces**

   Next, we create concrete implementations of these interfaces.

   ```typescript
   class ConsoleLogger implements ILogger {
       log(message: string): void {
           console.log(`Log message: ${message}`);
       }
   }

   class ApiDataAccess implements IDataAccess {
       getData(): string {
           return "Data from API";
       }
   }
   ```

3. **Create a Service that Depends on These Interfaces**

   This service will not directly instantiate the dependencies. Instead, it will receive them through its constructor.

   ```typescript
   class DataService {
       constructor(
           private logger: ILogger,
           private dataAccess: IDataAccess
       ) {}

       processData(): void {
           this.logger.log("Starting data processing...");
           const data = this.dataAccess.getData();
           this.logger.log(`Data received: ${data}`);
           this.logger.log("Data processing completed.");
       }
   }
   ```

4. **Inject Dependencies**

   Now, we need to instantiate the service with the appropriate dependencies. This is where we achieve IoC.

   ```typescript
   const logger = new ConsoleLogger();
   const dataAccess = new ApiDataAccess();

   const dataService = new DataService(logger, dataAccess);
   dataService.processData();
   ```

#### Explanation

- **Interfaces (`ILogger` and `IDataAccess`)**: Define what methods the dependencies should have.
- **Implementations (`ConsoleLogger` and `ApiDataAccess`)**: Provide concrete behavior for the interfaces.
- **Service (`DataService`)**: Uses the dependencies without knowing their concrete implementations.
- **Dependency Injection**: The concrete implementations are created outside the `DataService` and injected into it, allowing the `DataService` to remain decoupled from the actual implementations.

#### Benefits

- **Decoupling**: `DataService` does not depend on `ConsoleLogger` or `ApiDataAccess` directly.
- **Flexibility**: We can easily swap `ConsoleLogger` with another logger (e.g., `FileLogger`) without changing `DataService`.
- **Testability**: We can mock `ILogger` and `IDataAccess` for unit testing `DataService`.

#### Conclusion

Inversion of Control is a powerful principle that helps in writing flexible, modular, and testable code. By using Dependency Injection in TypeScript, we can achieve IoC and gain these benefits. The provided example demonstrates how to decouple the components of an application and inject dependencies, making the application easier to maintain and test.