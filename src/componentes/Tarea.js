import React, { useState } from 'react'

const Tarea = ({tarea, tareaAactualizada, eliminarTarea}) => {

  const [editar, setEditar] = useState(false);
  
  const FormEdit = () => {
    const [nuevoValor, setNuevoValor] = useState(tarea.titulo);
    
    const actualizarTarea = (e) => {
      e.preventDefault();
      tarea.titulo === nuevoValor ? alert('La tarea debe tener texto a actualizar.') : nuevoValor !== '' ? tareaAactualizada(tarea.id, nuevoValor) : alert('La tarea no debe estar vacía.');
      setEditar(false)
    }
    
    const capturarValor = (e) => {
      e.preventDefault()
      setNuevoValor(e.target.value)
    }
    
    return(
      <form className='actualizar-tarea-form' >
        <input type="text" className='tarea-input' onChange={capturarValor} value={nuevoValor} />
        <button className='boton-actualizar' onClick={actualizarTarea}>Actualizar</button>
      </form>
    );
  }

  const TareaElemento = () => {
    return (
      <>
      <div className='tarea-info'>
        <h2 className='tarea-agregada'>{tarea.titulo}</h2>
        <div className="tarea-botones">
          <button className='boton-editar' onClick={() => {setEditar(true)}} >Editar</button>
          <button className='boton-eliminar' onClick={(e) => {eliminarTarea(tarea.id, tarea.titulo)}}>Eliminar</button>
        </div>
      </div>
      </>
    )
  }

  return (
    <>
    <div className="tarea">
      {editar ? <FormEdit /> : 
      <TareaElemento />
    }
    </div>
    </>
    
  )
}

export default React.memo(Tarea)