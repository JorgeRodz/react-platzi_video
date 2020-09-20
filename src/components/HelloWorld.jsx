import React from 'react' // para importar los elementos desde react
import '../assets/styles/App.scss'

// Utilizamos un <div> si queremos poner multiples elementos
const HelloWorld = () => {
  return (
    <div> 
      <h1>Hello world</h1>
      <h2>Me llamo Jorge</h2>
    </div>
  )
}

export default HelloWorld // Exportamos HelloWorld para poder utilizarlo en el index.js y a su vez en el ReactDOM
