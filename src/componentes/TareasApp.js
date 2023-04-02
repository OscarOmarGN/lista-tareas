import React, { useState } from "react";
import Tarea from "./Tarea";
import './TareasApp.css';

const TareasApp = () => {
  const [titulo, setTitulo] = useState("");
  const [tareas, setTareas] = useState([]);

  const cambio = (e) => {
    const valor = e.target.value;
    setTitulo(valor)
  }

  const agregarTarea = (e) => {
    e.preventDefault();

    const nuevaTarea = {
      // id: crypto.randomUUID(),
      id: titulo,
      titulo: titulo,
      completada: false
    }
    
    const temp = [...tareas];
    temp.unshift(nuevaTarea);
    
    setTareas(temp);
    
    setTitulo('')
    
  }

  const tareaActualizada = (id, valor) => {
    const temp = [...tareas];
    const item = temp.find(item => item.id === id)
    item.titulo = valor;
    setTareas(temp);
  }

  const eliminarTarea = (id, tarea) => {
    const confirmar = window.confirm(`¿Seguro que decea eliminar la tarea '${tarea}'?`);
    const temp = tareas.filter(item => item.id !== id);
    setTareas(confirmar ? temp : tareas);
  }

  return (
    <div className="app-container">
      <h1>App de tareas</h1>
      <form className="tarea-form" onSubmit={titulo !== '' ? agregarTarea : (e) => {e.preventDefault()}} >
        <input type="text" className="tarea-input" value={titulo} onChange={cambio} placeholder='Ingresa la tarea' />
        <input
          type="submit"
          value="Crear tarea"
          className="boton-crear"
          onClick={titulo !== '' ? agregarTarea : (e) => {e.preventDefault()}}
        />
      </form>

      <div className="tarea-container">
        {
          tareas.map(tarea => {
            return (<Tarea key={tarea.id} tarea={tarea} tareaAactualizada={tareaActualizada} eliminarTarea={eliminarTarea} />)
          })
        }
      </div>
    </div>
  );
};

export default TareasApp;
