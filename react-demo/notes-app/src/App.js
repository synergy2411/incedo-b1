import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ClassBasedCompDemo from './components/Types/ClassBasedCompDemo';

// import the named function
// import {FunctionBasedCompDemo, a, b} from "./components/Types/FunctionBasedCompDemo";

// import the default function
import xyz, {a} from "./components/Types/FunctionBasedCompDemo";
import Parent from './components/CmpCommunication/Parent';

function App() {
  return (
    // React.createElement("div",{className : "App"}, 
    //   React.createElement("p",{}, "Hello World again!"))
    <div className="App">
      <p className="display-4"> Hello World!</p>

      <Parent />

      {/* <hr />
      <ClassBasedCompDemo />
      <hr />
      <xyz /> */}
    </div>
  );
}

export default App;


// Class -> render function() = return JSX
// Functional - returns JSX (JavaScript XML) -> converts into JavaScript
// - npm install bootstrap@4 --save