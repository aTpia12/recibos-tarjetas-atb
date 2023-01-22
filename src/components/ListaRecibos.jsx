import React from 'react'
import DatosRecibo from './DatosRecibo'

const ListaRecibos = ({valores, mesActual}) => {
  return (
    <div className="md:w-3/4 md:h-screen overflow-y-scroll">
        <h2 className='font-black text-3xl text-center'>
            Lista de Recibos
        </h2>
        <p className=' text-xl mt-5 mb-7 text-center'>
            Administra tus {''}
            <span className='text-blue-700 font-bold'>Recibos</span>
        </p>

       <DatosRecibo 
        valores={valores}
        mesActual={mesActual}
       />
    </div>
  )
}

export default ListaRecibos