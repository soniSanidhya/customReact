# Custom React Implementation

## Summary
This folder contains a minimal, custom implementation of React's core functionality built from scratch using vanilla JavaScript. The project demonstrates how React's virtual DOM and useState hook work by creating a simplified version that can render components to the actual DOM and manage state.

## Features

- **Custom createElement**: Renders virtual DOM objects to actual DOM elements
- **Component-based architecture**: Supports functional components that return virtual DOM structures
- **Simple rendering system**: Mimics React's `createRoot().render()` pattern
- **Recursive element rendering**: Handles nested components and children arrays
- **useState Hook**: State management with automatic re-rendering when state changes
- **Event handling**: Support for onClick and other event handlers
- **Re-rendering system**: Automatic DOM updates when state changes

## Files

- `index.html` - Basic HTML structure with a root div element
- `main.js` - Contains the custom React implementation, useState hook, and sample App component
- `readme.md` - This documentation

## How it works

The implementation includes:
- A `createRoot()` function that creates a renderer with re-render capability
- A `renderElement()` function that recursively converts virtual DOM to real DOM
- A `useState()` hook that provides state management with automatic re-rendering
- An example `App()` component that demonstrates useState hook with counter and message state
- Event handling support for interactive components

## useState Hook

The useState hook works similar to React's useState:

```javascript
function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello!");
  
  return {
    type: "div",
    props: {
      children: [
        {
          type: "p",
          props: {
            children: `Count: ${count}`
          }
        },
        {
          type: "button",
          props: {
            children: "Increment",
            onClick: () => setCount(count + 1)
          }
        }
      ]
    }
  };
}
```

This project demonstrates the fundamental concepts behind React's rendering engine and state management in a simplified form, making it easy to understand how React works under the hood.