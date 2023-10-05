---
title: What is event bubbling?
tags: ['question', 'interview']
languages: ['javascript']
---
# What is event bubbling?

Event bubbling is a concept in JavaScript and many other programming languages where events triggered on an element will "bubble up" and trigger parent elements' event handlers as well. When an event occurs on a DOM (Document Object Model) element, it first runs the event's handler on that element, then on its parent element, and so on, propagating up through its ancestors in the DOM tree.

Consider the following HTML structure:

```html
<div id="parent">
    <button id="child">Click me!</button>
</div>
```

If you have an event listener attached to both the parent and the child element like this:

```javascript
const parentElement = document.getElementById('parent');
const childElement = document.getElementById('child');

parentElement.addEventListener('click', function() {
    console.log('Parent element clicked');
});

childElement.addEventListener('click', function(event) {
    console.log('Child element clicked');
    event.stopPropagation(); // Stops the event from bubbling up
});
```

If you click the button with the id "child," you might expect only "Child element clicked" to be logged. However, due to event bubbling, both messages will be logged because the click event bubbles up from the child element to its parent.

In the example above, `event.stopPropagation()` is used to stop the event from further propagation, preventing it from reaching the parent element. Without this line, the event would continue to bubble up to the parent element, triggering its event handler as well. This can be useful in certain cases, but it's important to understand event bubbling to control how events propagate through the DOM tree.