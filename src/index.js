import React from 'react';
import ReactDOM from 'react-dom'; // para trabajar con el ReactDOM
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';

// Aqui van todos los componentes a renderizar
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app'), // para colocar todos los componentes en nuestro index.html
);
