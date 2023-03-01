import React,{ useState, useEffect } from 'react'
import { getUnits } from '../helpers/getUnidades'

const SegurosSel = ({datas, setMode, setDatas}) => {

    const [units, setUnits] = useState([]);

    const [selecciona, setSelecciona] = useState(datas);

    const sele = (id) => {

        setMode(true)

        if(!datas.includes(id)){
            setDatas([...datas, id])
        }else{
            const newSelecciona = datas.filter(item => item != id);
            setDatas(newSelecciona)
        }
    }

    useEffect(() => {
      localStorage.setItem('selecciones', JSON.stringify(datas));
    }, [datas])

    useEffect(() => {
      getUnits()
          .then( newUnits => {
                    setUnits(newUnits)
                    const sortList = [...newUnits].sort((a,b) => a.auto_cve - b.auto_cve)
                    setUnits(sortList)
                }
            )  
            units.map(item => {
                if(item.id > 322){
                    setDatas([...datas, item.id])
                }
            })    
    }, []);

  return (
    <div className='grid grid-cols-7 gap-3'>
        {
            units.map( unit => {
                return(
                <button 
                    type='submit'
                    key={unit.id} 
                    className={datas.includes(unit.id) ? 'bg-red-500 p-1 text-center' : 'bg-yellow-500 p-1 text-center'}
                    onClick={() => sele(unit.id)}
                >
                        { unit.auto_cve }
                </button>
                )
            }).sort()
        }
    </div>
  )
}

export default SegurosSel