import React, { useEffect, useState } from 'react'
import { getPartners } from '../helpers/getPartners'
import axios from 'axios';

const Agrupar = () => {

    const [partners, setPartners] = useState([]);
    const [partAux, setPartAux] = useState({});
    const [seleccion, setSeleccion] = useState("1");
    const [grupo, setGrupo] = useState(0);
    const [activeTraspaso, setActiveTraspaso] = useState(false)
    const [partner, setPartner] = useState(0);
    const [newKey, setNewKey] = useState('')

    const [asignUnit, setAsignUnit] = useState([])
    const [asignUnitTras, setAsignUnitTras] = useState([])

    const selUnit = () => {
        const seleccionUnit = partners.filter(item => item.number_partner === seleccion)
        setPartAux(seleccionUnit[0]);
    }

    const dataPartners = async () => {
        try {
            const partnersGet = await getPartners();
            setPartners(partnersGet);
            
        } catch (error) {
            console.log(error)
        }
            
    }

    useEffect( () => {

        dataPartners();
        
    }, [])

    useEffect( () => {
        selUnit();
    }, [partners, seleccion])

    const handleSelect = e => {
        setSeleccion(e.target.value);
    }

    const handleSelectTraspaso = e => {
        setPartner(e.target.value)
    }

    const handleSelectGroup = (group) => {

        setGrupo(parseInt(group))
    }

    const asignUnitsGroup = (unit) => {
        if(asignUnit.includes(unit.number)){
            const filterUnits = asignUnit.filter(item => item !== unit.number);
            setAsignUnit(filterUnits);
        }else{
            if(grupo !== unit.groups){
                setAsignUnit([...asignUnit, unit.number])
            }
        }
    }

    const asignTraspaso = (unit) => {
        if(asignUnitTras.includes(unit.number)){
            const filterUnits = asignUnitTras.filter(item => item !== unit.number);
            setAsignUnitTras(filterUnits);
        }else{
            setAsignUnitTras([...asignUnitTras, unit.number])
        }
    }

    const handleNewGroup = () => {
        const ids = partAux.units.map((item) => item.groups);
        const maxId = Math.max(...ids);
        setGrupo(maxId+1)
        handleSelectGroup(maxId+1)
    }

    const handleSaveGroups = () => {
        try {

            const data = axios.post("https://insumosdym.com/apis/api_atb/public/api/units_group", {
                units : asignUnit,
                group : grupo
            });

            console.log(data.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleSaveTraspaso = () => {
        try {

            const data = axios.post("https://insumosdym.com/apis/api_atb/public/api/units_partner", {
                units : asignUnitTras,
                partner : partner
            });

            console.log(data.data)
            
        } catch (error) {
            console.log(error)
        } finally {
            dataPartners()
        }
    }

    const handlechangeTraspaso = () => {
        setActiveTraspaso(!activeTraspaso);
        
    }

    const handleSaveNewUnit = async() => {
        try {
            await axios.post("https://insumosdym.com/apis/api_atb/public/api/units", 
            {
                number : newKey,
                partner_id : partAux.id,
                groups: 0
            })
        } catch (error) {
            console.log(error)
        } finally{

            dataPartners()
            setNewKey('')
        }
    }

    console.log(asignUnitTras);

  return (
    <>
        <div className="mb-5">
            <div className='flex'>
                <div className=''>
                    <label className='block text-gray-700 uppercase font-bold'>
                    Selecciona unidad:
                    </label>
                    <select 
                    id="sel"
                    className="border-2 w-3/4 p-2 mt-2 rounded-md"
                    onChange={activeTraspaso ? handleSelectTraspaso : handleSelect}
                    >
                        {
                            partners.map(partner => (
                                <option value={activeTraspaso ? partner.id : partner.number_partner}>{partner.number_partner} - {partner.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label className='block text-gray-700 uppercase font-bold'>
                        Grupo de Tarjetas
                    </label>
                    <div
                        className={
                            grupo === 0 ? `border-2 w-full p-2 mt-2 rounded-md text-center bg-gray-200` : 
                            grupo === 1 ? `border-2 w-full p-2 mt-2 rounded-md text-center bg-green-200` : 
                            grupo === 2 ? `border-2 w-full p-2 mt-2 rounded-md text-center bg-blue-200` : 
                            grupo === 3 ? `border-2 w-full p-2 mt-2 rounded-md text-center bg-purple-200` : 
                            grupo === 4 ? `border-2 w-full p-2 mt-2 rounded-md text-center bg-yellow-200` : 
                            grupo === 5 ? `border-2 w-full p-2 mt-2 rounded-md text-center bg-red-200` : 
                            grupo === 6 ? `border-2 w-full p-2 mt-2 rounded-md text-center bg-orange-200` : 
                            grupo === 7 ? `border-2 w-full p-2 mt-2 rounded-md text-center bg-pink-200` : 
                            grupo === 8 ? `border-2 w-full p-2 mt-2 rounded-md text-center bg-rose-200` : 
                            grupo === 9 ? `border-2 w-full p-2 mt-2 rounded-md text-center bg-cyan-200` : ''
                        }
                    >
                        {grupo}
                    </div>
                </div>
                <div>
                    <button
                        className='bg-yellow-500 rounded-lg p-3 text-white mt-7 ml-10'
                        onClick={activeTraspaso ? handleSaveTraspaso : handleSaveGroups}
                    >Guardar</button>
                </div>
                <div>
                    <label className='block text-gray-700 uppercase font-bold ml-10'>
                        Clave
                    </label>
                    <input 
                        type='text'
                        className='p-2 mt-2 ml-10 w-1/2 rounded-xl'
                        onChange={(e) => setNewKey(e.target.value)}
                        value={newKey}
                    />
                </div>
                <div>
                    <button
                        className='bg-green-500 rounded-lg p-3 text-white mt-7'
                        onClick={handleSaveNewUnit}
                    >Agregar</button>
                </div>
            </div>

            <hr className='mt-5'></hr>

            <div className="m-3 shadow-xl py-10 rounded-xl bg-white px-5 h-auto grid grid-cols-12">
                {
                    partAux && 
                    partAux.units?.length > 0 ?
                    partAux.units?.map(unit => (
                    <div className={`p-2`}>
                        <div 
                            className={
                                asignUnitTras.includes(unit.number) ?
                                `bg-black text-white text-center cursor-pointer`
                                :
                                asignUnit.includes(unit.number) ?
                                grupo === 0 ? `bg-gray-200 text-center cursor-pointer` : 
                                grupo === 1 ? `bg-green-200 text-center cursor-pointer`:
                                grupo === 2 ? `bg-blue-200 text-center cursor-pointer`:
                                grupo === 3 ? `bg-purple-200 text-center cursor-pointer`:
                                grupo === 4 ? `bg-yellow-200 text-center cursor-pointer`:
                                grupo === 5 ? `bg-red-200 text-center cursor-pointer`:
                                grupo === 6 ? `bg-orange-200 text-center cursor-pointer`:
                                grupo === 7 ? `bg-pink-200 text-center cursor-pointer`:
                                grupo === 8 ? `bg-rose-200 text-center cursor-pointer`:
                                grupo === 9 ? `bg-cyan-200 text-center cursor-pointer` : ''
                                :
                                unit.groups === '0' ? `bg-gray-200 text-center cursor-pointer` : 
                                unit.groups === '1' ? `bg-green-200 text-center cursor-pointer`:
                                unit.groups === '2' ? `bg-blue-200 text-center cursor-pointer` : 
                                unit.groups === '3' ? `bg-purple-200 text-center cursor-pointer`:
                                unit.groups === '4' ? `bg-yellow-200 text-center cursor-pointer`:
                                unit.groups === '5' ? `bg-red-200 text-center cursor-pointer`:
                                unit.groups === '6' ? `bg-orange-200 text-center cursor-pointer`:
                                unit.groups === '7' ? `bg-pink-200 text-center cursor-pointer`:
                                unit.groups === '8' ? `bg-rose-200 text-center cursor-pointer`:
                                unit.groups === '9' ? `bg-cyan-200 text-center cursor-pointer`: ''
                            }
                            onClick={activeTraspaso ? () => asignTraspaso(unit) : () => asignUnitsGroup(unit)}
                            onDoubleClick={() => handleSelectGroup(unit.groups)}
                        >
                            { unit.number } 
                        </div>
                    </div>
                    )) : 
                    (
                        <div className='p-2 col-span-7 text-red-700'>
                            Aún no tiene unidades asignadas
                        </div>
                    )
                    
                }
            </div>
            <button
                className='bg-blue-700 rounded-lg p-3 text-white mt-3'
                onClick={handleNewGroup}
            >
                Nuevo grupo
            </button>
            <button
                className={activeTraspaso ? `bg-green-500 rounded-lg p-3 text-white mt-3 ml-5` : `bg-red-500 rounded-lg p-3 text-white mt-3 ml-5`}
                onClick={handlechangeTraspaso}
            >
                
                Traspaso 
            </button>
        </div> 
    </>
  )
}

export default Agrupar