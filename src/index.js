import React from 'react'
import ReactDOM from 'react-dom' // para trabajar con el ReactDOM
import HelloWorld from './components/HelloWorld' // importamos nuetro componente HelloWorld

// Aqui van todos los componentes a renderizar
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app') // para colocar todos los componentes en nuestro index.html
)
