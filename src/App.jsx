import Header from "./components/Header"
import ListaRecibos from "./components/ListaRecibos"
import Recibo from "./components/Recibo"
import React, { useState, useEffect } from 'react'

function App() {

  const [datas, setDatas] = useState([])
  const [mode, setMode] = useState(false)

  const tiem = Date.now();
  const hoy = new Date(tiem);

  const year = hoy.getFullYear();
  const month = hoy.getMonth()+1;
  const [mod, setMod] = useState(1);

  console.log(month)

  const [valores, setValores] = useState([
    {
      fecha: year + '-' + month,
      cantidad: '200'
    }
  ]);

  useEffect(() => {
    const storedCache = JSON.parse(localStorage.getItem('selecciones'));

    if (storedCache !== null) {
      setDatas(storedCache)
    } else {
      localStorage.setItem('selecciones', JSON.stringify([]));
    }

  }, [])

  const meses = [
    { id: 1, mes: "ENERO" },
    { id: 2, mes: "FEBRERO" },
    { id: 3, mes: "MARZO" },
    { id: 4, mes: "ABRIL" },
    { id: 5, mes: "MAYO" },
    { id: 6, mes: "JUNIO" },
    { id: 7, mes: "JULIO" },
    { id: 8, mes: "AGOSTO" },
    { id: 9, mes: "SEPTIEMBRE" },
    { id: 10, mes: "OCTUBRE" },
    { id: 11, mes: "NOVIEMBRE" },
    { id: 12, mes: "DICIEMBRE" },
  ];

  const fecha = valores[0].fecha
  const mess = fecha.split('-');

  const ms = meses.find(item => item.id === parseInt(mess[1]));

  const mesActual = '\"' + ms.mes + '\"'

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Recibo
          setMod={setMod}
          setValores={setValores}
          year={year + '-' + month}
        />
        <ListaRecibos
          setMode={setMode}
          setDatas={setDatas}
          datas={datas}
          mod={mod}
          valores={valores}
          mesActual={mesActual}
        />
      </div>
    </div>
  )
}

export default App
