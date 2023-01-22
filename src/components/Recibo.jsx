import React from 'react'
import { useState } from 'react'

const Recibo = ({setValores, year}) => {

  const [fecha, setFecha] = useState('');
  const [cantidad, setCantidad] = useState('');

  const guardar = (e) => {
    e.preventDefault();

    const valor = {
      fecha,
      cantidad
    }

    if(cantidad === ''){
        valor.cantidad = '200'
    }

    if(fecha === ''){
        valor.fecha = year
    }

    setValores([valor]);

  }

  return (
    <div className="md:w-1/4">
        <h2 className='font-black text-3xl text-center'>Generación de Recibo</h2>
        <p className='text-lg mt-5 text-center'>
          Añade Recibo y {''}
          <span className='text-blue-700 font-bold'>Administralo</span>
        </p>

        <form 
          htmlFor="fecha" 
          className='bg-white shadow-md w-3/4 mt-8 rounded-lg py-5 px-5'
          onSubmit={guardar}
        >
          <div className="mb-5">
            <label className='block text-gray-700 uppercase font-bold'>
              Mes y Año
            </label>
            <input 
              id="fecha"
              type={"month"}
              className="border-2 w-full p-2 mt-2 rounded-md"
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className='block text-gray-700 uppercase font-bold'>
              La cantidad de:
            </label>
            <input 
              id="fecha"
              type={"number"}
              min="1"
              step="0.01"
              className="border-2 w-full p-2 mt-2 rounded-md"
              onChange={(e) => setCantidad(e.target.value)}
            />
          </div>
          <input 
            type={"submit"}
            className="bg-blue-700 w-full p-3 text-white uppercase font-bold hover:bg-blue-800 cursor-pointer transition-all"
            value={"Generar"}
          />
        </form>
    </div>
  )
}

export default Recibo