import { useState } from "react";
import { numLetras } from "../helpers/NumLetras";

const DatosTarjeta = ({ number_partner, name, units, valores, mesActual }) => {

    const fecha = valores[0].fecha
    const mes = fecha.split('-');


    let monto = 9000;

    if (mes[1] === '02') {
        monto = 8400;
    }

    const cantUnits = units.length;

    const cantidad = cantUnits * monto;

    const moneda = numLetras(cantidad);

    const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',

    });

    const unit = [];
    const units2 = [];
    let grupo = units[0].groups;
    let prueba = [];

    for (let i = 0; i < units.length; i++) {

        if (units[i].groups === grupo) {
            prueba.push(units[i].number + ', ')
        } else {
            unit.push(prueba)
            prueba = [];
            prueba.push(units[i].number + ', ')
            grupo = units[i].groups;
        }

    }
    unit.push(prueba)

    /////

    const costo = formatter.format(cantidad);

    const centavos = costo.split('.')

    const tri = [
        { "id": 0, "tete": "1ER" },
        { "id": 1, "tete": "1ER" },
        { "id": 2, "tete": "1ER" },
        { "id": 3, "tete": "2DO" },
        { "id": 4, "tete": "2DO" },
        { "id": 5, "tete": "2DO" },
        { "id": 6, "tete": "3ER" },
        { "id": 7, "tete": "3ER" },
        { "id": 8, "tete": "3ER" },
        { "id": 9, "tete": "4TO" },
        { "id": 10, "tete": "4TO" },
        { "id": 11, "tete": "4TO" },
    ];

    const trime = (m) => {
        const result = tri.find(
            valor => valor.id === m
        );

        return result.tete;
    }

    const triMe = trime(parseInt(mes[1]));
    return (
        <>
            {units.length != 0 ?
                unit.map(subUnit => (
                    <div className="m-3 shadow-xl py-10 rounded-xl bg-white px-5 h-[380px]">
                        <div className={subUnit.length > 15 ? "grid grid-cols-3 divide-x text-[7px]" : "grid grid-cols-3 divide-x text-xs"}>
                            <div className="">
                                <div className="grid grid-cols-3">
                                    <div className="col-span-2">
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
                                                        {mes[1] + 1}
                                                    </td>
                                                    <td>
                                                        {mes[0]}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="text-2xl cursor-pointer">
                                        {number_partner}
                                    </div>
                                </div>
                                <div className="uppercase">
                                    <span className=''>No. de unidades: </span><span className="font-black text-2xl">{subUnit.length}</span>
                                </div>
                                <div className="mt-1 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center text-xs">
                                    Recibi de:
                                </div>
                                <span className='font-black uppercase text-left overflow-visible'>
                                    {name}
                                </span>
                                <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                                    <div className="grid grid-cols-8 gap-1">
                                        {
                                            subUnit.map(dat => (
                                                <div>{dat}</div>
                                            ))
                                        }

                                    </div>
                                </span>
                                </div>
                                <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                                    La cantidad de:
                                </div>
                                <span className='font-black  text-right'>{formatter.format(subUnit.length * monto)}</span>
                                <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                                    Por concepto de:
                                </div>
                                <p className='font-black text-xs mx-7 uppercase'>Tarjetas y derramas</p>

                            </div>
                            <div className={subUnit.length > 5 ? "col-span-2 px-5 text-[8px]" : "col-span-2 px-5 text-xs"}>
                                <div className="grid grid-cols-4">
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
                                                        {mes[1] + 1}
                                                    </td>
                                                    <td>
                                                        {mes[0]}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-auto">
                                        <img src="https://atb.cloud2.work/recibos/img/watb.jpeg" width={"70%"} />
                                    </div>
                                    <div className="col-auto">
                                        <p className=" font-bold uppercase">
                                            Bueno por <span className="font-black text-2xl">{formatter.format(subUnit.length * monto)}</span>
                                        </p>
                                    </div>
                                    <div className="text-center ml-7 text-2xl col-auto">
                                        {number_partner}
                                    </div>
                                </div>
                                <p className=' font-bold uppercase w-3/4 '>
                                    Recibi de: {''}
                                    <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                                        <div className="grid grid-cols-12 gap-1">
                                            {subUnit.map(dat => (
                                                <div className="mr-5">{dat}</div>
                                            ))
                                            }
                                        </div>
                                    </span>
                                    </div>
                                </p>
                                <p className='font-bold uppercase mt-5'>
                                    La cantidad de: {''}
                                    <span className='font-black'>({numLetras(subUnit.length * monto)} 00/100 m.n.)</span>
                                </p>
                                <div className="mt-1 w-[500px]">
                                    <table className="border-separate border-spacing-1 border border-solid w-full">
                                        <thead className='bg-gray-200'>
                                            <tr className="uppercase text-black">
                                                <th>Descripción</th>
                                                <th>Importe</th>
                                                <th>Unidades</th>
                                                <th>Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="uppercase">Tarjetas {mesActual} {''} {mes[0] + 1}</td>
                                                <td className="text-right">{formatter.format(monto)}</td>
                                                <td className="text-center">{subUnit.length}</td>
                                                <td className="text-right">{formatter.format(subUnit.length * monto)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='mt-10 right-0 uppercase font-bold'>
                                    <hr color='black' width="320px" />
                                </div>
                                <div className="flex">
                                    <div>
                                        <p className='mx-20 uppercase font-bold'>
                                            firma {''}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))
                : ''
            }

        </>
    )
}

export default DatosTarjeta

//202,
//207,
//214,
//217,
//220, 