
import { useState } from 'react'
import './App.css'
import Listado from './components/Listado'
import Formulario from './components/formulario'

function App() {
  const[listado, setListado]=useState([
    {
      "nombre": "juancito",
      "dueno": "ian jolito",
      "fecha": new Date(),
      "hora": new Date(),
      "sintomas": "kfjrlfrjf"
    }
  ]);

  return (
    <div className='appp'>
      <h1>Administrador de pacientes</h1>
      <div className="contenedor-form-list">
        <Formulario setListado={setListado} />
        <Listado listaCitas={listado} />
      </div>
    </div>
  )
}

export default App
