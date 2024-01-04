---
title: Event Loop
tags: ["question", "interview"]
languages: ["javascript"]
---

# Event Loop

![Event Loop](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/event-loop.png)

In JavaScript, the event loop is a fundamental concept for managing asynchronous operations. To understand the event loop, it's essential to grasp the other components involved:

1. **Memory Heap:** This is where memory allocation happens. Objects and variables are stored here.

2. **Call Stack:** It keeps track of the execution of functions. When a function is invoked, it's added to the call stack. When the function finishes executing, it's removed from the stack.

3. **Web APIs:** These are provided by the browser, such as DOM manipulation methods, setTimeout, XMLHttpRequest, etc. They are not part of the JavaScript language itself but are accessible through JavaScript. When you make an asynchronous request, it's handled by the Web APIs.

4. **Event Loop:** The event loop constantly checks the call stack and the callback queue to see if there's any function that needs to be executed. If the call stack is empty, it takes a callback from the queue and pushes it onto the call stack, initiating its execution.

5. **Callback Queue:** When asynchronous operations (like setTimeout or XMLHttpRequest) are completed, their callback functions are pushed into the callback queue.

6. **Macrotasks:** These are higher priority tasks in the callback queue. They include I/O operations, setTimeout, setInterval, etc. Macrotasks are processed after the call stack is empty.

7. **Microtasks:** Microtasks are tasks with a higher priority than macrotasks and include processes like Promise callbacks, queueMicrotask, MutationObserver, etc. Microtasks are executed after the current task and before the next macrotask.

Here's how they work together:

1. Functions are pushed onto the call stack and executed synchronously until the stack is empty.
2. Asynchronous functions are offloaded to the Web APIs.
3. When the asynchronous operation is completed, its callback function is placed in the callback queue.
4. The event loop checks the callback queue. If the call stack is empty, it pushes the callback function from the queue onto the stack, executing it.
5. Microtasks are executed between macrotasks, ensuring that certain asynchronous operations are prioritized and processed promptly.

This cycle allows JavaScript to handle asynchronous tasks efficiently, providing a smooth user experience in web applications.

- [Go back](../readme.md)
