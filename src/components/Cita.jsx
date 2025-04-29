import React from 'react'

export default function Cita({cita}) {
  return (
    <div>
        <ul>
            <li><b>Mascota:</b>{cita.mascota}</li>
            <li><b>Dueño:</b>{cita.dueno}</li>
            <li><b>Fecha:</b>{cita.fecha }</li>
            <li><b>Hora:</b>{cita.hora}</li>
            <li><b>Síntomas:</b>{cita.sintomas}</li>
        </ul>
        <button>Eliminar x</button>
    </div>
  )
}
