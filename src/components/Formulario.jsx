import React, { useState } from 'react'
import "/src/components/Formulario.css"

export default function Formulario({setListado, listado}) {
    const [nombre, setNombre]=useState("");
    const [dueno, setDueno]=useState("");
    const [fecha, setFecha]=useState("");
    const [hora, setHora]=useState("");
    const [sintomas, setSintomas]=useState("");
    const [idAutNum, setIdAutoNum]=useState(0);

    const agregarCita=(e)=>{
        e.preventDefault();
        const cita={
            id: idAutNum,
            nombre: nombre,
            dueno: dueno,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas
        }
        setIdAutoNum(idAutNum+1);
        let aux=[...listado]
        aux.push(cita)
        setListado(aux);
    }
 
    return (
    <form>
        <h2>crear mi cita</h2>
        <div>
            <label>Nombre mascota</label>
            <input type="text" placeholder='Nombre mascota' onChange={(e)=>setNombre(e.target.value)} />
        </div>
        <div>
            <label>Nombre dueño</label>
            <input type="text" placeholder='Nombre dueño' onChange={(e)=>setDueno(e.target.value)} />
        </div>
        <div>
            <label>Fecha</label>
            <input type="date" onChange={(e)=>setFecha(e.target.value)} />
        </div>
        <div>
            <label>Hora</label>
            <input type="time" onChange={(e)=>setHora(e.target.value)} />
        </div>
        <div>
            <label>Síntomas</label>
            <textarea onChange={(e)=>setSintomas(e.target.value)} /> 
            </div>
            <button onClick={agregarCita}>Agregar cita</button>
    </form>
  )
}
