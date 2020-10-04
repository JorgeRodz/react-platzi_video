import React from 'react';
import ReactDOM from 'react-dom'; // para trabajar con el ReactDOM
import App from './routes/App';

// Aqui van todos los componentes a renderizar
ReactDOM.render(
  <App />,
  document.getElementById('app'), // para colocar todos los componentes en nuestro index.html
);
