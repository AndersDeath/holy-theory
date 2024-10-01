---
title: Design patterns
tags: ["question", "interview", "theory"]
languages: [""]
---

# Design patterns

**Creational Patterns:**

1. **Factory Method:** Creates objects without specifying the exact class by delegating the instantiation to subclasses. Provides a way to create objects based on certain conditions or parameters.

2. **Abstract Factory:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes. Supports creating objects with different implementations but having a common theme.

3. **Builder:** Separates the construction of a complex object from its representation, allowing the same construction process to create different representations. Useful when there are multiple ways to construct an object.

4. **Prototype:** Clones existing objects to create new ones, avoiding the need for subclassing. Allows objects to be copied without making the code dependent on their classes.

5. **Singleton:** Ensures a class has only one instance and provides a global point of access to it. Useful when you need to have a single shared instance across the entire application.

**Structural Patterns:** 6. **Adapter:** Converts the interface of one class into another interface that clients expect, making incompatible classes work together.

7. **Bridge:** Decouples an abstraction from its implementation, allowing them to vary independently. Useful when you want to extend a class in two independent dimensions.

8. **Composite:** Treats individual objects and compositions of objects uniformly, allowing you to create complex tree-like structures.

9. **Decorator:** Dynamically adds behavior or responsibilities to objects without altering their code directly. Offers a flexible alternative to subclassing.

10. **Facade:** Provides a simplified interface to a complex subsystem, making it easier to use and understand.

11. **Flyweight:** Shares data between multiple objects to reduce memory usage when many similar objects exist.

12. **Proxy:** Acts as a placeholder for another object, controlling access to it, and providing additional functionality when required.

**Behavioral Patterns:** 13. **Chain of Responsibility:** Allows multiple objects to handle a request without specifying the receiver explicitly. The request is passed along the chain until it's handled.

14. **Command:** Encapsulates a request as an object, allowing parameterization of clients with different requests, queuing of requests, or logging of the requests.

15. **Iterator:** Provides a way to access elements of a collection without exposing its underlying representation.

16. **Mediator:** Defines an object that centralizes communication between multiple objects, reducing their direct interactions.

17. **Memento:** Captures and externalizes an object's internal state, allowing the object to be restored to that state later.

18. **Observer:** Allows an object to publish changes to its state, notifying dependent objects to update automatically.

19. **State:** Allows an object to change its behavior when its internal state changes.

20. **Strategy:** Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Enables selecting an algorithm at runtime.

21. **Template Method:** Defines the skeleton of an algorithm in a method, allowing subclasses to provide specific implementations of some steps.

22. **Visitor:** Separates algorithms from the objects on which they operate, enabling adding new operations without modifying the objects' classes.
