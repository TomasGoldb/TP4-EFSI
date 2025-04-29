import React from 'react'
import "/src/components/Formulario.css"

export default function Formulario({setListado}) {
  return (
    <form>
        <h2>crear mi cita</h2>
        <div>
            <label>Nombre mascota</label>
            <input type="text" placeholder='Nombre mascota' />
        </div>
        <div>
            <label>Nombre dueño</label>
            <input type="text" placeholder='Nombre dueño' />
        </div>
        <div>
            <label>Fecha</label>
            <input type="date" />
        </div>
        <div>
            <label>Hora</label>
            <input type="time" />
        </div>
        <div>
            <label>Síntomas</label>
            <textarea /> 
            </div>
            <button>Agregar cita</button>
    </form>
  )
}
