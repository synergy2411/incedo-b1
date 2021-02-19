import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Users from './components/Users/Users';
import Counter from './components/Counter/Counter';

import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './components/Counter/store/reducers/rootReducer';
import counterReducer from './components/Counter/store/reducers/counterReducer';
import resultReducer from './components/Counter/store/reducers/resultReducer';


// function logger(store){
//   return function(next){
//     return function(action){

//     }
//   }
// }

// Adding Redux Devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Adding Middleware
const logger = store => next => action => {
  // Any async operation
  console.log("Logger Middleware - Action  ", action);
  console.log("Logger Middleware - State  ", store.getState());
  next(action);
}

// Multiple Reducers
const store = createStore(combineReducers({
  ctr : counterReducer,
  res : resultReducer
}), composeEnhancers(applyMiddleware(logger)));


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
