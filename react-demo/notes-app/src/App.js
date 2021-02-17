import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Notes from './components/Notes/Notes';
import RefsDemo from './components/RefsDemo/RefsDemo';
import HooksDemo from './components/HooksDemo/HooksDemo';

function App() {
  return (
    <div className="container">

    {/* <RefsDemo /> */}
    <HooksDemo />
    <br />

      <p className="display-4 text-center">Notes App</p>
      <Notes />
    </div>
  );
}

export default App;