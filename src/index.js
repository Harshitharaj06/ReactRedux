import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducers); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// contributor - Sunil PutteGowda (hp.sunilkumar793@gmail.com)
serviceWorker.unregister();