import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Notes from './components/Notes/Notes';
import RefsDemo from './components/RefsDemo/RefsDemo';
import HooksDemo from './components/HooksDemo/HooksDemo';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <ul>
          <li>
            <Link to="/notes">Notes App</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
        </ul>

        <Route path="/notes">
          <Notes />
        </Route>

        <Route path = "/hooks">
          <HooksDemo />
        </Route>
        
      </Router>



      {/* <RefsDemo /> */}
      {/* <HooksDemo />
    <br />

      <p className="display-4 text-center">Notes App</p>
      <Notes /> */}
    </div>
  );
}

export default App;