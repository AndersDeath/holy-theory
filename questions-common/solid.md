---
title: SOLID
tags: ["question", "interview", "theory"]
languages: [""]
---

# SOLID

The SOLID principles are a set of five design principles that aim to guide software developers in creating maintainable, scalable, and flexible code. Each principle focuses on a specific aspect of software design, and when applied together, they promote better software quality and reduce the risk of technical debt. Let's go through each SOLID principle:

1. **Single Responsibility Principle (SRP)**:

   - A class should have only one reason to change, i.e., it should have only one responsibility.
   - This principle promotes the idea that a class should be focused on doing one thing well, making it easier to understand, maintain, and extend.
   - By keeping classes small and focused, changes to one aspect of the system are less likely to affect other unrelated aspects.

2. **Open/Closed Principle (OCP)**:

   - Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
   - This means that you should be able to extend the behavior of a class or module without modifying its existing code.
   - Achieving this often involves using abstractions (interfaces, abstract classes) and polymorphism, allowing you to add new functionality through inheritance or composition.

3. **Liskov Substitution Principle (LSP)**:

   - Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.
   - In other words, a subclass should adhere to the behavior expected by the superclass and not violate the contract established by the superclass.
   - Violating this principle can lead to unexpected behaviors when substituting objects and can undermine the correctness and reliability of the software.

4. **Interface Segregation Principle (ISP)**:

   - Clients should not be forced to depend on interfaces they do not use.
   - This principle advocates for small, specific interfaces rather than large, general ones.
   - By having fine-grained interfaces, clients can depend only on the functionality they require, reducing unnecessary dependencies and potential coupling.

5. **Dependency Inversion Principle (DIP)**:
   - High-level modules should not depend on low-level modules. Both should depend on abstractions.
   - Abstractions should not depend on details. Details should depend on abstractions.
   - This principle encourages the use of interfaces or abstract classes to define contracts, allowing high-level modules to be decoupled from low-level implementation details.
   - By relying on abstractions, it becomes easier to change implementations without affecting higher-level modules.

By adhering to the SOLID principles, developers can create code that is more maintainable, extensible, and easier to test. These principles contribute to the development of robust and adaptable software systems, which can evolve over time with fewer risks of introducing bugs or unintended side effects when making changes.
