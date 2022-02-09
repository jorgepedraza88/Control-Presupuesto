import { useState, useEffect } from 'react';

const Filtros = ({filtro, setFiltro}) => {


  return (
  <div className='filtros sombra contenedor'>
      <form>
          <div className='campo'>
              <label>Filtrar Gastos</label>
              <select
                value={filtro}
                onChange={ e => setFiltro(e.target.value) }
              >
                    <option value="">-- Todas las categorias --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="alquiler">Alquiler</option>
                    <option value="hogar">Hogar y limpieza</option>
                    <option value="varios">Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="prestamos">Préstamos</option>
              </select>

          </div>
      </form>

  </div>
  );
};

export default Filtros;
