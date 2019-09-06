import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';  // { BrowserRouter as Router }
import './styles/main.css';
// Import root app
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, 
    MOUNT_NODE
  );
};

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
