// ==== index.js ====

const rootElement = document.getElementById("root");

function createRoot(root) {
  return {
    render: (componentFn) => {
      const elementTree = componentFn();
      const dom = renderElement(elementTree);
      root.appendChild(dom);
    },
  };
}

function renderElement(node) {
  // If node is a string, it's a text node
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  // Create the element (e.g., "div", "h1")
  const element = document.createElement(node.type);

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
  return {
    type: "div",
    props: {
      children: [
        {
          type: "h1",
          props: {
            children: "This is a heading"
          }
        },
        {
          type: "akshat",
          props: {
            children: "This is akshat"
          }
        },
        {
          type: "p",
          props: {
            children: "This is a paragraph"
          }
        }
      ]
    }
  };
}

