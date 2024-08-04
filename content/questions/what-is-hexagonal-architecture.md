---
title: Hexagonal (Ports & Adapters) Architecture
tags: ["question", "interview", "theory"]
languages: [""]
---

# Hexagonal (Ports & Adapters) Architecture

Hexagonal Architecture, also known as Ports and Adapters Architecture, is a design pattern for software applications that aims to decouple the core logic from the surrounding infrastructure and external services. Introduced by Alistair Cockburn, this architecture facilitates easier testing, maintenance, and evolution of applications.

## Key Concepts

1. **Core Domain Logic**:
    - The heart of the application.
    - Contains business rules and domain logic.
    - Independent of external systems and frameworks.

2. **Ports**:
    - Interfaces that define the primary entry points and exit points for the core domain logic.
    - Represent the application’s use cases and services.
    - Can be input (driving) ports or output (driven) ports.

3. **Adapters**:
    - Implementations of ports.
    - Serve as the bridge between the core domain and external systems.
    - Convert external inputs into a form the core domain can understand and vice versa.
    - Examples include web controllers, databases, messaging systems, and external APIs.

4. **External Systems**:
    - Anything outside the core domain.
    - Includes databases, user interfaces, third-party services, etc.
    - Interact with the application through adapters.

## Structure and Flow

1. **Core Domain**:
    - Independent and self-contained.
    - Contains entities, value objects, and domain services.

2. **Ports**:
    - Define how external components interact with the core domain.
    - Examples: `UserService` interface for user-related operations.

3. **Adapters**:
    - Concrete implementations of ports.
    - Input Adapters: Convert user requests into commands that the core domain can process (e.g., REST controllers).
    - Output Adapters: Convert responses from the core domain into a form suitable for external systems (e.g., database repositories).

4. **Interactions**:
    - User requests are received by input adapters (e.g., HTTP request to a REST controller).
    - Input adapters invoke the corresponding port (interface) methods.
    - Core domain processes the request and performs necessary operations.
    - Responses are sent back through output adapters to external systems.

## Benefits

1. **Separation of Concerns**:
    - Core business logic is isolated from technical details and infrastructure concerns.

2. **Flexibility**:
    - Adapters can be easily swapped out without affecting the core domain.
    - Supports changes in technology and frameworks with minimal impact.

3. **Testability**:
    - Core domain can be tested in isolation from external systems.
    - Mocks and stubs can be used to simulate ports during testing.

4. **Maintainability**:
    - Clear boundaries between different parts of the application make it easier to understand and modify.

## Example Scenario

Consider an e-commerce application:

1. **Core Domain**:
    - Business rules for managing products, orders, and customers.
    - Interfaces (ports) like `ProductService`, `OrderService`.

2. **Ports**:
    - `ProductService`: Interface defining operations for managing products.

3. **Adapters**:
    - Web Adapter (Input): REST controller that handles HTTP requests related to products.
    - Database Adapter (Output): Repository implementation that interacts with a database to store and retrieve products.

4. **Interaction Flow**:
    - User makes an HTTP request to add a product.
    - REST controller (input adapter) processes the request and calls `ProductService` (port).
    - `ProductService` invokes the core domain logic to add the product.
    - Core domain logic calls the database repository (output adapter) to persist the product.
    - Response is sent back to the user.

Hexagonal Architecture, or Ports and Adapters Architecture, provides a robust framework for designing scalable, maintainable, and testable applications. By clearly separating the core business logic from external systems, it ensures that changes in technology do not impact the essential operations of the application. This architectural style is particularly beneficial in complex, evolving systems where adaptability and resilience are crucial.