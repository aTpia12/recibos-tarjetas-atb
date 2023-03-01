import React,{ useState, useEffect } from 'react'
import { getUnits } from '../helpers/getUnidades'
import { getPartners } from '../helpers/getPartners'
import DatosQualitas from './DatosQualitas'
import DatosRecibo from './DatosRecibo'
import DatosTarjeta from './DatosTarjeta'
import SegurosSel from './SegurosSel'

const ListaRecibos = ({mod ,valores, mesActual, datas, setMode, setDatas}) => {

  const [units, setUnits] = useState([]);
  const [partners, setPartners] = useState([]);
  const [selecciona, setSelecciona] = useState([])

  useEffect(() => {
    getUnits()
        .then( newUnits => {
              setUnits(newUnits)
              const sortList = [...newUnits].sort((a,b) => a.auto_cve - b.auto_cve)
              setUnits(sortList)
            }
          )
  }, []);

  useEffect(() => {
    getPartners()
        .then( newPartners => setPartners(newPartners))
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('selecciones'));
    setSelecciona(data)
  }, [mod])
  
  
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
          return  datas.includes(resp.id) ?  '' : <DatosRecibo
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
        }) : mod === 3 ? 
        partners.map(resp => {
          
          return resp.units.length !== 0 ? <DatosTarjeta
                  number_partner={resp.number_partner}
                  name={resp.name}
                  units={resp.units}
                  valores={valores}
                  mesActual={mesActual}
                 /> : ''
        }) : mod === 4 ?
          <SegurosSel 
            setMode={setMode}
            setDatas={setDatas}
            datas={datas}
          />
          : ''
       }
        </div>
    </div>
  )
}

export default ListaRecibos