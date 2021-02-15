import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ClassBasedCompDemo from './components/Types/ClassBasedCompDemo';
import FunctionBasedCompDemo from "./components/Types/FunctionBasedCompDemo";

function App() {
  return (
    // React.createElement("div",{className : "App"}, 
    //   React.createElement("p",{}, "Hello World again!"))
    <div className="App">
      <p className="display-4"> Hello World!</p>
      <hr />
      <ClassBasedCompDemo />
      <hr />
      <FunctionBasedCompDemo />
    </div>
  );
}

export default App;


// Class -> render function() = return JSX
// Functional - returns JSX (JavaScript XML) -> converts into JavaScript
// - npm install bootstrap@4 --save