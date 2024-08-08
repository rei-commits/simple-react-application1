import React from 'react'; // Import React

function Header() {
  return (<h1>Simple React Application</h1>); // Simple header component
}

function Content(props) {
  return (<p style={{ color: props.color }}>{props.text}</p>); // Content component with props for color and text
}

function Footer() {
  return (<h1>Created by Rei.</h1>); // Simple footer component
}

function App() {
  return (
    <>
      <Header /> {/* Render Header component */}
      <Content color="blue" text="This is my first React Application!" /> {/* Render Content component with props */}
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer /> {/* Render Footer component */}
    </>
  );
}

export default App; // Export App component as default

