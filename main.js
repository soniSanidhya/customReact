// ==== index.js ====

const rootElement = document.getElementById("root");

// State management for useState hook
let componentIndex = 0;
let componentStates = [];
let currentRoot = null;
let currentRenderFunction = null;

function createRoot(root) {
  return {
    render: (componentFn) => {
      // Store root and render function for re-renders
      currentRoot = root;
      currentRenderFunction = componentFn;
      
      // Clear existing content
      root.innerHTML = '';
      
      // Reset component index for each render
      componentIndex = 0;
      
      const elementTree = componentFn();
      const dom = renderElement(elementTree);
      root.appendChild(dom);
    },
  };
}

// useState hook implementation
function useState(initialValue) {
  const index = componentIndex++;
  
  // Initialize state if it doesn't exist
  if (componentStates[index] === undefined) {
    componentStates[index] = initialValue;
  }
  
  const state = componentStates[index];
  
  const setState = (newValue) => {
    // Check if value actually changed
    if (componentStates[index] !== newValue) {
      componentStates[index] = newValue;
      
      // Trigger re-render
      if (currentRoot && currentRenderFunction) {
        currentRoot.innerHTML = '';
        componentIndex = 0;
        const elementTree = currentRenderFunction();
        const dom = renderElement(elementTree);
        currentRoot.appendChild(dom);
      }
    }
  };
  
  return [state, setState];
}

function renderElement(node) {
  // If node is a string, it's a text node
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  // Create the element (e.g., "div", "h1")
  const element = document.createElement(node.type);

  // Handle props
  if (node.props) {
    // Handle event handlers and other props
    Object.keys(node.props).forEach(prop => {
      if (prop === 'children') {
        return; // Skip children, handle separately
      }
      
      if (prop.startsWith('on') && typeof node.props[prop] === 'function') {
        // Handle event listeners (onClick, onInput, etc.)
        const eventType = prop.slice(2).toLowerCase();
        element.addEventListener(eventType, node.props[prop]);
      } else {
        // Handle other props as attributes
        element.setAttribute(prop, node.props[prop]);
      }
    });
  }

  // Handle children (could be string or array of objects)
  const children = node.props?.children || [];

  if (Array.isArray(children)) {
    children.forEach((child) => {
      element.appendChild(renderElement(child));
    });
  } else {
    element.appendChild(renderElement(children));
  }

  return element;
}

// === Mounting it like ReactDOM.createRoot().render(<App />)
createRoot(rootElement).render(App);


// ==== app.js ====

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello, Custom React!");
  
  return {
    type: "div",
    props: {
      children: [
        {
          type: "h1",
          props: {
            children: message
          }
        },
        {
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
              },
              {
                type: "button",
                props: {
                  children: "Decrement",
                  onClick: () => setCount(count - 1),
                  style: "margin-left: 10px;"
                }
              }
            ]
          }
        },
        {
          type: "div",
          props: {
            children: [
              {
                type: "button",
                props: {
                  children: "Change Message",
                  onClick: () => setMessage(message === "Hello, Custom React!" ? "useState Hook Works!" : "Hello, Custom React!"),
                  style: "margin-top: 10px;"
                }
              }
            ]
          }
        },
        {
          type: "p",
          props: {
            children: "This demonstrates useState hook in custom React implementation"
          }
        }
      ]
    }
  };
}

