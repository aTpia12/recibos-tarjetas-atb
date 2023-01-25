import React,{ useState, useEffect } from 'react'
import { getUnits } from '../helpers/getUnidades'
import DatosQualitas from './DatosQualitas'
import DatosRecibo from './DatosRecibo'

const ListaRecibos = ({mod ,valores, mesActual}) => {

  const [units, setUnits] = useState([]);

  useEffect(() => {
    getUnits()
        .then( newUnits => setUnits(newUnits))
  }, []);
  
  const generatePDF = () => {
    window.getSelection()
    .selectAllChildren(
      document.getElementById("cont") 
    );
    
  }
  return (
    <div className="md:w-3/4 md:h-screen overflow-y-scroll">
      <button onClick={generatePDF} type="button">Export PDF</button>
        <h2 className='font-black text-3xl text-center'>
            Lista de Recibos
        </h2>
        <p className=' text-xl mt-5 mb-7 text-center'>
            Administra tus {''}
            <span className='text-blue-700 font-bold'>Recibos</span>
        </p>
        <div id="cont">
        {
        mod === 1 ?
        units.map(resp => {
          return <DatosRecibo
                  auto_cve={resp.auto_cve} 
                  valores={valores}
                  mesActual={mesActual}
                 />
        }) : mod === 2 ? 
        units.map(resp => {
          return <DatosQualitas
                  auto_cve={resp.auto_cve} 
                  valores={valores}
                  mesActual={mesActual}
                 />
        }) : ''
       }
        </div>
    </div>
  )
}

export default ListaRecibos