import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Users from './components/Users/Users';
import Counter from './components/Counter/Counter';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './components/Counter/store/reducers/rootReducer';

const store = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
    {/* <Users /> */}

    <Provider store={store}>
      <Counter />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
