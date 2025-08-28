
  1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  Ans. document.getElementById used to select specific CSS id selector. It is select single unique element.
  document.getElementsByClassName used to select list of CSS classes. It is select single or multiple elements.
  document.querySelector used to select first CSS any selector(id, class, tag name). It is select single element.
     
  document.querySelectorAll used to select list of elements in any CSS selector(id, class, tag name). It is select single or multiple elements.


2. How do you create and insert a new element into the DOM?
Ans. 
const parent = document.getElementById('container');
const div = document.createElement('div');
parent.appendChild(div);

3. What is Event Bubbling and how does it work?
   Ans.
   Event Bubbling: When an event occurs on an element, it first runs on that element and then bubbles up (propagates) to its parent elements, one by one, until it reaches the root (document).
Example: Clicking a button inside a div > event triggers on the button > then on the div > then on document.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans.
Event Delegation: Attaching a single event listener on a parent element to handle events on its child elements using event.target.
It is used to saves memory and works for dynamically added elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans.
preventDefault(): Stops the default browser action (e.g., link click or form submit).
stopPropagation(): Stops the event from bubbling or propagating to parent elements.


