import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Notes from './components/Notes/Notes';

function App() {
  return (
    <div className="container">
      <p>Notes App</p>
      <Notes />
    </div>
  );
}

export default App;