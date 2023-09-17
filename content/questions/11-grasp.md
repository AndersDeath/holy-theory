---
title: GRASP
tags: ['question', 'interview', 'theory']
languages: ['']
---
# GRASP

Certainly! GRASP stands for General Responsibility Assignment Software Patterns, a set of object-oriented design principles used to guide the assignment of responsibilities to classes and objects in a software system. These principles help in creating a flexible and maintainable design. Here are the GRASP principles:

1. Creator:
   - This principle suggests that a class should be responsible for creating instances of other classes if there is a strong relationship between them. For example, a factory class can be responsible for creating and initializing objects of a specific class.

2. Information Expert:
   - This principle states that a responsibility should be assigned to the class with the most information required to fulfill that responsibility. In other words, a class that has the necessary data and behavior to perform a task should be given the responsibility to do so.

3. Low Coupling:
   - This principle advocates for reducing the dependencies between classes by keeping them loosely coupled. Low coupling improves the maintainability and flexibility of the system as changes in one class are less likely to impact other classes.

4. High Cohesion:
   - This principle suggests that a class should have a single, well-defined purpose or responsibility. High cohesion within a class ensures that it is focused and easy to understand.

5. Controller:
   - The Controller pattern deals with managing the flow of information and requests between objects or components. It is responsible for interpreting user input and deciding which objects should handle the request.

6. Polymorphism:
   - The Polymorphism principle involves the use of interfaces and abstract classes to allow multiple implementations for a single behavior or action. This increases the flexibility and extensibility of the system.

7. Indirection:
   - The Indirection principle promotes the use of intermediaries to reduce direct dependencies between classes. It can be achieved through the use of interfaces or abstract classes, which enable more flexible and interchangeable components.

8. Protected Variations:
   - This principle aims to protect a system from the impact of future changes by encapsulating the variations or volatile components within the system. It promotes using abstraction to isolate these variations.

9. Pure Fabrication:
   - When no natural class fits the responsibility, a new class can be created solely to handle that specific responsibility. This class is considered a "pure fabrication" and helps in achieving a more maintainable design.

GRASP principles provide a set of guidelines for assigning responsibilities to classes, ensuring a well-structured and adaptable object-oriented design. Applying these principles can lead to more maintainable, robust, and flexible software systems.