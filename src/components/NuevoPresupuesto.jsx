import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => { 
        e.preventDefault();

        // Si ! No es número o Si es menor a 0 entonces =>
       if(!(presupuesto) || (presupuesto) < 0) {
        setMensaje('No es un presupuesto válido')

        return
       } 
       // Reseteamos
       setMensaje('')
       setIsValidPresupuesto(true)

       console.log(presupuesto)

    }

  return (
  <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className='campo'>
            <label>Definir Presupuesto</label>

            <input 
                className='nuevo-presupuesto'
                type="number" // Si ponemos "number", no dejará al usuario escribir ningún texto en el input.
                placeholder="Añade tu presupuesto"
                value={presupuesto}
                // Importante, leer cambios en el formulario.
                onChange={ (e) => setPresupuesto(Number(e.target.value))}
            />

        </div>
        <input type="submit" value="Añadir" />

        {/* Mensaje de error desde un componente*/}
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      
      </form>

  </div>
  );
};

export default NuevoPresupuesto;
