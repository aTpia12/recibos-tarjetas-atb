import { numLetras } from "../helpers/NumLetras";

const DatosRecibo = ({valores, mesActual}) => {
    const fecha = valores[0].fecha
    const mes = fecha.split('-');

    const moneda = numLetras(valores[0].cantidad);

    const centavos = valores[0].cantidad.split('.')

    const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',

      });
      
    const costo = formatter.format(valores[0].cantidad);

  return (
    <div className="m-3 shadow-xl py-10 rounded-xl bg-white px-5">
        <div className="grid grid-cols-3 divide-x">
            <div className="">
                <table className='border-separate border-spacing-1 border border-solid border-black w-2/4'>
                    <thead className='bg-gray-200'>
                        <tr>
                            <th>MES</th>
                            <th>AÑO</th>
                        </tr>

                    </thead>
                    <tbody className='bg-white'>
                        <tr>
                            <td>
                                {mes[1]}
                            </td>
                            <td>
                                {mes[0]}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-5 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                    Recibi del aut. cve:
                </div>
                <span className='font-black text-3xl mx-20'>#</span>
                <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                    La cantidad de:
                </div>
                <span className='font-black text-3xl mx-7'>{costo}</span>
                <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                    Por concepto de:
                </div>
                <p className='font-black text-sm mx-7 uppercase'>Fondo del seg. int.</p>
                <p className='font-black text-sm mx-7 uppercase'>mes de {mesActual.substring(0,3)} {mes[0]}</p>
            </div>
            <div className="col-span-2 px-5">
                <div className="grid grid-cols-3">
                    <div className="col">
                        <table className='border-separate border-spacing-1 border border-solid border-black w-1/4'>
                            <thead className='bg-gray-200'>
                                <tr>
                                    <th>MES</th>
                                    <th>AÑO</th>
                                </tr>

                            </thead>
                            <tbody className='bg-white'>
                                <tr>
                                    <td>
                                        {mes[1]}
                                    </td>
                                    <td>
                                        {mes[0]}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-auto">
                        <img src="https://insumosdym.com/atb/img/watb.jpeg" width={"70%"}/>
                    </div>
                    <div className="col-auto">
                        <p className=" font-bold uppercase">
                        Bueno por <span className="font-black text-2xl">{costo}</span>
                        </p>
                    </div>
                </div>
                <p className='pt-10 font-bold uppercase'>
                    Recibi de la unidad clave: {''}
                    <span className='font-black text-3xl'>#</span>
                </p>
                <p className='mx-5 uppercase font-bold'>Por concepto de: contibución para el fondo del {''}
                    <span className='font-black'>Seguro interior</span>
                </p>
                <p className='font-bold uppercase'>
                    La cantidad de: {''}
                    <span className='font-black'>({moneda} {centavos[1] ? centavos[1] : '00'}/100 m.n.)</span>
                </p>
                <p className='mt-10 text-right uppercase font-bold'>
                    correspondiente al mes de {mesActual} {mes[0]} {''}
                </p>
                <div className='mt-10 right-0 uppercase font-bold'>
                    <hr color='black' width="320px" />
                </div>
                <p className='mx-20 uppercase font-bold'>
                    tesoreria {''}
                </p>
            </div>
        </div>
    </div>
  )
}

export default DatosRecibo