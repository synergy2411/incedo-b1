import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Notes from './components/Notes/Notes';
import RefsDemo from './components/RefsDemo/RefsDemo';
import HooksDemo from './components/HooksDemo/HooksDemo';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="container">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notes">Notes App</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          
        </ul>


      <Switch>
        <Route exact path="/">                  
        {/* http://localhost:3000 */}
          <Users />
        </Route>

        <Route path="/notes">
          {/* http://localhost:3000/notes */}
          <Notes />
        </Route>

        <Route path = "/hooks">
          <HooksDemo />
        </Route>
        </Switch>
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



const Home = () => {
  return (
    <div>
      <h3>Home Component works.</h3>      
    </div>
  );
}


