# Custom React Implementation

## Summary
This folder contains a minimal, custom implementation of React's core functionality built from scratch using vanilla JavaScript. The project demonstrates how React's virtual DOM works by creating a simplified version that can render components to the actual DOM.

## Features

- **Custom createElement**: Renders virtual DOM objects to actual DOM elements
- **Component-based architecture**: Supports functional components that return virtual DOM structures
- **Simple rendering system**: Mimics React's `createRoot().render()` pattern
- **Recursive element rendering**: Handles nested components and children arrays

## Files

- `index.html` - Basic HTML structure with a root div element
- `main.js` - Contains the custom React implementation and sample App component
- `readme.md` - This documentation

## How it works

The implementation includes:
- A `createRoot()` function that creates a renderer
- A `renderElement()` function that recursively converts virtual DOM to real DOM
- An example `App()` component that demonstrates the virtual DOM structure with headings and paragraphs

This project demonstrates the fundamental concepts behind React's rendering engine in a simplified form, making it easy to understand how React works under the hood.