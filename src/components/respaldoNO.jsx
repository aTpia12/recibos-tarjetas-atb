import { useState } from "react";
import { numLetras } from "../helpers/NumLetras";

const DatosTarjeta = ({number_partner, name, units, valores, mesActual}) => {

    const fecha = valores[0].fecha
    const mes = fecha.split('-');

    let monto = 9000;

    if(mes[1] === '02'){
        monto = 8400;
    }

    const cantUnits = units.length;

    const cantidad = cantUnits*monto;

    const moneda = numLetras(cantidad);

    const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',

      });
    
    const unit = [];
    const units2 = [];

    const unit5 = [];

    const unit7 = [];

    const unit9 = [];

    const unit21 = [];

    const unit45 = [];

    const unit108 = [];

    for (let i = 0; i < units.length; i++) {

        if(units[i].number === "201"
        || units[i].number === "202"
        || units[i].number === "204"
        || units[i].number === "205"
        || units[i].number === "206"
        || units[i].number === "207"
        || units[i].number === "209"
        || units[i].number === "211"
        || units[i].number === "212"
        || units[i].number === "213"
        || units[i].number === "214"
        || units[i].number === "215"
        || units[i].number === "216"
        || units[i].number === "217"
        || units[i].number === "218"
        || units[i].number === "219"
        || units[i].number === "220"
        || units[i].number === "221"
        || units[i].number === "222"
        )
        {
            units2.push(units[i].number+', ');
        }
        if(units[i].number === "89"
        || units[i].number === "131"
        || units[i].number === "203"
        || units[i].number === "208"
        || units[i].number === "210"
        ){
            unit5.push(units[i].number)
        }
        if(units[i].number === "906"
        ){
            unit7.push(units[i].number)
        }
        if(units[i].number === "322"
        || units[i].number === "913"
        || units[i].number === "804"
        || units[i].number === "438"
        || units[i].number === "541"
        || units[i].number === "801"
        ){
            unit9.push(units[i].number)
        }
        if(units[i].number === "37"
        || units[i].number === "666"
        ){
            unit21.push(units[i].number)
        }
        if(units[i].number === "105"
        || units[i].number === "415"
        ){
            unit45.push(units[i].number)
        }
        if(units[i].number === "108"){
            unit108.push(units[i].number)
        }
        if(units[i].number != "201"
        && units[i].number != "202"
        && units[i].number != "203"
        && units[i].number != "204"
        && units[i].number != "205"
        && units[i].number != "206"
        && units[i].number != "207"
        && units[i].number != "208"
        && units[i].number != "209"
        && units[i].number != "210"
        && units[i].number != "211"
        && units[i].number != "212"
        && units[i].number != "213"
        && units[i].number != "214"
        && units[i].number != "215"
        && units[i].number != "216"
        && units[i].number != "217"
        && units[i].number != "218"
        && units[i].number != "219"
        && units[i].number != "220"
        && units[i].number != "221"
        && units[i].number != "222"
        && units[i].number != "89"
        && units[i].number != "131"
        && units[i].number != "203"
        && units[i].number != "208"
        && units[i].number != "210"
        && units[i].number != "322"
        && units[i].number != "913"
        && units[i].number != "804"
        && units[i].number != "438"
        && units[i].number != "541"
        && units[i].number != "801"
        && units[i].number != "37"
        && units[i].number != "666"
        && units[i].number != "105"
        && units[i].number != "415"
        && units[i].number != "906"
        && units[i].number != "108"
        )
        {
            unit.push(units[i].number+', ');
        }

    }

    const cantUnits1 = unit.length;

    const cantidad1 = cantUnits1*monto;

    const moneda1 = numLetras(cantidad1);

    const costo1 = formatter.format(cantidad1);

    const centavos1 = costo1.split('.')

    const cantUnits2 = units2.length;

    const cantidad2 = cantUnits2*monto;

    const moneda2 = numLetras(cantidad2);

    const costo2 = formatter.format(cantidad2);

    const centavos2 = costo2.split('.')

    /////
      
    const costo = formatter.format(cantidad);

    const centavos = costo.split('.')

    const tri = [
        {"id" : 1 , "tete" : "1ER"},
        {"id" : 2 , "tete" : "1ER"},
        {"id" : 3 , "tete" : "1ER"},
        {"id" : 4 , "tete" : "2DO"},
        {"id" : 5 , "tete" : "2DO"},
        {"id" : 6 , "tete" : "2DO"},
        {"id" : 7 , "tete" : "3ER"},
        {"id" : 8 , "tete" : "3ER"},
        {"id" : 9 , "tete" : "3ER"},
        {"id" : 10 , "tete" : "4TO"},
        {"id" : 11 , "tete" : "4TO"},
        {"id" : 12 , "tete" : "4TO"},
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
    { cantUnits1 != 0 ?
    <div className="m-3 shadow-xl py-10 rounded-xl bg-white px-5 h-[350px]">
        <div className={unit.length > 15 ? "grid grid-cols-3 divide-x text-[8px]" : "grid grid-cols-3 divide-x text-xs"}>
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
                                        {mes[1]}
                                    </td>
                                    <td>
                                        {mes[0]}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="text-2xl">
                        {number_partner}
                    </div>
                </div>
                <div className="uppercase">
                 <span className=''>No. de unidades: </span><span className="font-black text-2xl">{cantUnits1}</span>
                </div>
                <div className="mt-1 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center text-xs">
                    Recibi de:
                </div>
                <span className='font-black uppercase text-left overflow-visible'>{name}</span>
                <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                    <div className="grid grid-cols-8 gap-1">
                        {unit.map(item => {
                            return <div>{item}</div>
                        })}
                    </div>
                    </span>
                </div>
                <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                    La cantidad de:
                </div>
                <span className='font-black  text-right'>{costo1}</span>
                <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                    Por concepto de:
                </div>
                <p className='font-black text-xs mx-7 uppercase'>Tarjetas y derramas</p>
            
            </div>
            <div className={unit.length > 15 ? "col-span-2 px-5 text-[9px]" : "col-span-2 px-5 text-xs"}>
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
                        Bueno por <span className="font-black text-2xl">{costo1}</span>
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
                        {unit.map(item => {
                            return <div>{item}</div>
                        })}
                    </div>
                    </span>
                </div>
                </p>
                <p className='font-bold uppercase mt-5'>
                    La cantidad de: {''}
                    <span className='font-black'>({moneda1} {centavos1[1] ? centavos1[1] : '00'}/100 m.n.)</span>
                </p>
                <div className="mt-1 w-full">
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
                                <td className="uppercase">Tarjetas {mesActual} {''} {mes[0]}</td>
                                <td className="text-right">{formatter.format(monto)}</td>
                                <td className="text-center">{cantUnits1}</td>
                                <td className="text-right">{costo1}</td>
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
    </div> : ''
    }
    {
       units2 != '' ?
       <div className="m-3 shadow-xl py-10 rounded-xl bg-white px-5 h-[350px]">
        <div className="grid grid-cols-3 divide-x text-[10px]">
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
                                        {mes[1]}
                                    </td>
                                    <td>
                                        {mes[0]}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="text-2xl">
                        {number_partner}
                    </div>
                </div>
                <div className="uppercase">
                 <span className=''>No. de unidades: </span><span className="font-black text-2xl">{cantUnits2}</span>
                </div>
                <div className="mt-1 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center text-xs">
                    Recibi de:
                </div>
                <span className='font-black uppercase text-left overflow-visible'>{name}</span>
                <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                    <div className="grid grid-cols-8 gap-1">
                        {units2.map(item => {
                            return <div>{item}</div>
                        })}
                    </div>
                    </span>
                </div>
                <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                    La cantidad de:
                </div>
                <span className='font-black  text-right'>{costo2}</span>
                <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                    Por concepto de:
                </div>
                <p className='font-black text-xs mx-7 uppercase'>Tarjetas y derramas</p>
            
            </div>
            <div className="col-span-2 px-5 text-xs">
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
                        Bueno por <span className="font-black text-2xl">{costo2}</span>
                        </p>
                    </div>
                    <div className="text-center ml-7 text-2xl col-auto">
                        {number_partner}
                    </div>
                </div>
                <p className='pt-3 font-bold uppercase w-3/4 '>
                    Recibi de: {''}
                    <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                    <div className="grid grid-cols-8 gap-1">
                        {units2.map(item => {
                            return <div>{item}</div>
                        })}
                    </div>
                    </span>
                </div>
                </p>
                <p className='font-bold uppercase mt-5'>
                    La cantidad de: {''}
                    <span className='font-black'>({moneda2} {centavos2[1] ? centavos2[1] : '00'}/100 m.n.)</span>
                </p>
                <div className="mt-5 w-full">
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
                                <td className="uppercase">Tarjetas {mesActual} {''} {mes[0]}</td>
                                <td className="text-right">{formatter.format(monto)}</td>
                                <td className="text-center">{cantUnits2}</td>
                                <td className="text-right">{costo2}</td>
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
    </div> : ''

    }
    {
        unit5 != '' ? 
            unit5.map(ele => {

                const cantidadEle = 1*monto;
            
                const monedaEle = numLetras(cantidadEle);
            
                const costoEle = formatter.format(cantidadEle);
            
                const centavosEle = costoEle.split('.')

                return <div className="m-3 shadow-xl py-10 rounded-xl bg-white px-5 h-[350px]">
                <div className="grid grid-cols-3 divide-x text-xs">
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
                                                {mes[1]}
                                            </td>
                                            <td>
                                                {mes[0]}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-2xl">
                                {number_partner}
                            </div>
                        </div>
                        <div className="uppercase">
                         <span className=''>No. de unidades: </span><span className="font-black text-2xl">1</span>
                        </div>
                        <div className="mt-1 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center text-xs">
                            Recibi de:
                        </div>
                        <span className='font-black uppercase text-left overflow-visible'>{name}</span>
                        <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                        <div className="grid grid-cols-8 gap-1">
                                    <div>{ele}</div>
                                  
                                </div>
                        </span>
                        </div>
                        <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                            La cantidad de:
                        </div>
                        <span className='font-black  text-right'>{costoEle}</span>
                        <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                            Por concepto de:
                        </div>
                        <p className='font-black text-xs mx-7 uppercase'>Tarjetas y derramas</p>
                    
                    </div>
                    <div className="col-span-2 px-5 text-xs">
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
                                Bueno por <span className="font-black text-2xl">{costoEle}</span>
                                </p>
                            </div>
                            <div className="text-center ml-7 text-2xl col-auto">
                                {number_partner}
                            </div>
                        </div>
                        <p className='pt-3 font-bold uppercase w-3/4 '>
                            Recibi de: {''}
                            <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                            <div className="grid grid-cols-12 gap-1">
                                    <div>{ele}</div>
                                  
                                </div>
                            </span>
                        </div>
                        </p>
                        <p className='font-bold uppercase mt-5'>
                            La cantidad de: {''}
                            <span className='font-black'>({monedaEle} {centavosEle[1] ? centavosEle[1] : '00'}/100 m.n.)</span>
                        </p>
                        <div className="mt-5 w-full">
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
                                        <td className="uppercase">Tarjetas {mesActual} {''} {mes[0]}</td>
                                        <td className="text-right">{formatter.format(monto)}</td>
                                        <td className="text-center">1</td>
                                        <td className="text-right">{costoEle}</td>
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
            })
        : ''
    }

{
        unit9 != '' ? 
            unit9.map(ele => {

                const cantidadEle = 1*monto;
            
                const monedaEle = numLetras(cantidadEle);
            
                const costoEle = formatter.format(cantidadEle);
            
                const centavosEle = costoEle.split('.')

                return <div className="m-3 shadow-xl py-10 rounded-xl bg-white px-5 h-[350px]">
                <div className="grid grid-cols-3 divide-x text-xs">
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
                                                {mes[1]}
                                            </td>
                                            <td>
                                                {mes[0]}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-2xl">
                                {number_partner}
                            </div>
                        </div>
                        <div className="uppercase">
                         <span className=''>No. de unidades: </span><span className="font-black text-2xl">1</span>
                        </div>
                        <div className="mt-1 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center text-xs">
                            Recibi de:
                        </div>
                        <span className='font-black uppercase text-left overflow-visible'>{name}</span>
                        <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                        <div className="grid grid-cols-8 gap-1">
                                    <div>{ele}</div>
                                  
                                </div>
                            </span>
                        </div>
                        <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                            La cantidad de:
                        </div>
                        <span className='font-black  text-right'>{costoEle}</span>
                        <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                            Por concepto de:
                        </div>
                        <p className='font-black text-xs mx-7 uppercase'>Tarjetas y derramas</p>
                    
                    </div>
                    <div className="col-span-2 px-5 text-xs">
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
                                Bueno por <span className="font-black text-2xl">{costoEle}</span>
                                </p>
                            </div>
                            <div className="text-center ml-7 text-2xl col-auto">
                                {number_partner}
                            </div>
                        </div>
                        <p className='pt-3 font-bold uppercase w-3/4 '>
                            Recibi de: {''}
                            <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                            <div className="grid grid-cols-12 gap-1">
                                    <div>{ele}</div>
                                  
                                </div>
                                </span>
                            </div>
                        </p>
                        <p className='font-bold uppercase mt-5'>
                            La cantidad de: {''}
                            <span className='font-black'>({monedaEle} {centavosEle[1] ? centavosEle[1] : '00'}/100 m.n.)</span>
                        </p>
                        <div className="mt-5 w-full">
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
                                        <td className="uppercase">Tarjetas {mesActual} {''} {mes[0]}</td>
                                        <td className="text-right">{formatter.format(monto)}</td>
                                        <td className="text-center">1</td>
                                        <td className="text-right">{costoEle}</td>
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
            })
        : ''
    }

{
        unit21 != '' ? 
            unit21.map(ele => {

                const cantidadEle = 1*monto;
            
                const monedaEle = numLetras(cantidadEle);
            
                const costoEle = formatter.format(cantidadEle);
            
                const centavosEle = costoEle.split('.')

                return <div className="m-3 shadow-xl py-10 rounded-xl bg-white px-5 h-[350px]">
                <div className="grid grid-cols-3 divide-x text-xs">
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
                                                {mes[1]}
                                            </td>
                                            <td>
                                                {mes[0]}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-2xl">
                                {number_partner}
                            </div>
                        </div>
                        <div className="uppercase">
                         <span className=''>No. de unidades: </span><span className="font-black text-2xl">1</span>
                        </div>
                        <div className="mt-1 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center text-xs">
                            Recibi de:
                        </div>
                        <span className='font-black uppercase text-left overflow-visible'>{name}</span>
                        <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                        <div className="grid grid-cols-8 gap-1">
                                    <div>{ele}</div>
                                  
                                </div>
                            </span>
                        </div>
                        <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                            La cantidad de:
                        </div>
                        <span className='font-black  text-right'>{costoEle}</span>
                        <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                            Por concepto de:
                        </div>
                        <p className='font-black text-xs mx-7 uppercase'>Tarjetas y derramas</p>
                    
                    </div>
                    <div className="col-span-2 px-5 text-xs">
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
                                Bueno por <span className="font-black text-2xl">{costoEle}</span>
                                </p>
                            </div>
                            <div className="text-center ml-7 text-2xl col-auto">
                                {number_partner}
                            </div>
                        </div>
                        <p className='pt-3 font-bold uppercase w-3/4 '>
                            Recibi de: {''}
                            <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                            <div className="grid grid-cols-12 gap-1">
                                    <div>{ele}</div>
                                  
                                </div>
                                </span>
                            </div>
                        </p>
                        <p className='font-bold uppercase mt-5'>
                            La cantidad de: {''}
                            <span className='font-black'>({monedaEle} {centavosEle[1] ? centavosEle[1] : '00'}/100 m.n.)</span>
                        </p>
                        <div className="mt-5 w-full">
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
                                        <td className="uppercase">Tarjetas {mesActual} {''} {mes[0]}</td>
                                        <td className="text-right">{formatter.format(monto)}</td>
                                        <td className="text-center">1</td>
                                        <td className="text-right">{costoEle}</td>
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
            })
        : ''
    }

{
        unit45 != '' ? 
            unit45.map(ele => {

                const cantidadEle = 1*monto;
            
                const monedaEle = numLetras(cantidadEle);
            
                const costoEle = formatter.format(cantidadEle);
            
                const centavosEle = costoEle.split('.')

                return <div className="m-3 shadow-xl py-10 rounded-xl bg-white px-5 h-[350px]">
                <div className="grid grid-cols-3 divide-x text-xs">
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
                                                {mes[1]}
                                            </td>
                                            <td>
                                                {mes[0]}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-2xl">
                                {number_partner}
                            </div>
                        </div>
                        <div className="uppercase">
                         <span className=''>No. de unidades: </span><span className="font-black text-2xl">1</span>
                        </div>
                        <div className="mt-1 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center text-xs">
                            Recibi de:
                        </div>
                        <span className='font-black uppercase text-left overflow-visible'>{name}</span>
                        <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                        <div className="grid grid-cols-8 gap-1">
                                    <div>{ele}</div>
                                  
                                </div>
                            </span>
                        </div>
                        <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                            La cantidad de:
                        </div>
                        <span className='font-black  text-right'>{costoEle}</span>
                        <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                            Por concepto de:
                        </div>
                        <p className='font-black text-xs mx-7 uppercase'>Tarjetas y derramas</p>
                    
                    </div>
                    <div className="col-span-2 px-5 text-xs">
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
                                Bueno por <span className="font-black text-2xl">{costoEle}</span>
                                </p>
                            </div>
                            <div className="text-center ml-7 text-2xl col-auto">
                                {number_partner}
                            </div>
                        </div>
                        <p className='pt-3 font-bold uppercase w-3/4 '>
                            Recibi de: {''}
                            <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                                <div className="grid grid-cols-12 gap-1">
                                    <div>{ele}</div>
                                  
                                </div>
                                </span>
                            </div>
                        </p>
                        <p className='font-bold uppercase mt-5'>
                            La cantidad de: {''}
                            <span className='font-black'>({monedaEle} {centavosEle[1] ? centavosEle[1] : '00'}/100 m.n.)</span>
                        </p>
                        <div className="mt-5 w-full">
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
                                        <td className="uppercase">Tarjetas {mesActual} {''} {mes[0]}</td>
                                        <td className="text-right">{formatter.format(monto)}</td>
                                        <td className="text-center">1</td>
                                        <td className="text-right">{costoEle}</td>
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
            })
        : ''
    }

    {
        unit7 != '' ? 
            unit7.map(ele => {

                const cantidadEle = 1*monto;
            
                const monedaEle = numLetras(cantidadEle);
            
                const costoEle = formatter.format(cantidadEle);
            
                const centavosEle = costoEle.split('.')

                return <div className="m-3 shadow-xl py-10 rounded-xl bg-white px-5 h-[350px]">
                <div className="grid grid-cols-3 divide-x text-xs">
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
                                                {mes[1]}
                                            </td>
                                            <td>
                                                {mes[0]}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-2xl">
                                {number_partner}
                            </div>
                        </div>
                        <div className="uppercase">
                         <span className=''>No. de unidades: </span><span className="font-black text-2xl">1</span>
                        </div>
                        <div className="mt-1 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center text-xs">
                            Recibi de:
                        </div>
                        <span className='font-black uppercase text-left overflow-visible'>{name}</span>
                        <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                        <div className="grid grid-cols-8 gap-1">
                                    <div>{ele}</div>
                                  
                                </div>
                            </span>
                        </div>
                        <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                            La cantidad de:
                        </div>
                        <span className='font-black  text-right'>{costoEle}</span>
                        <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                            Por concepto de:
                        </div>
                        <p className='font-black text-xs mx-7 uppercase'>Tarjetas y derramas</p>
                    
                    </div>
                    <div className="col-span-2 px-5 text-xs">
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
                                Bueno por <span className="font-black text-2xl">{costoEle}</span>
                                </p>
                            </div>
                            <div className="text-center ml-7 text-2xl col-auto">
                                {number_partner}
                            </div>
                        </div>
                        <p className='pt-3 font-bold uppercase w-3/4 '>
                            Recibi de: {''}
                            <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                                <div className="grid grid-cols-12 gap-1">
                                    <div>{ele}</div>
                                  
                                </div>
                                </span>
                            </div>
                        </p>
                        <p className='font-bold uppercase mt-5'>
                            La cantidad de: {''}
                            <span className='font-black'>({monedaEle} {centavosEle[1] ? centavosEle[1] : '00'}/100 m.n.)</span>
                        </p>
                        <div className="mt-5 w-full">
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
                                        <td className="uppercase">Tarjetas {mesActual} {''} {mes[0]}</td>
                                        <td className="text-right">{formatter.format(monto)}</td>
                                        <td className="text-center">1</td>
                                        <td className="text-right">{costoEle}</td>
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
            })
        : ''
    }

{
        unit108 != '' ? 
            unit108.map(ele => {

                const cantidadEle = 1*monto;
            
                const monedaEle = numLetras(cantidadEle);
            
                const costoEle = formatter.format(cantidadEle);
            
                const centavosEle = costoEle.split('.')

                return <div className="m-3 shadow-xl py-10 rounded-xl bg-white px-5 h-[350px]">
                <div className="grid grid-cols-3 divide-x text-xs">
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
                                                {mes[1]}
                                            </td>
                                            <td>
                                                {mes[0]}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-2xl">
                                {number_partner}
                            </div>
                        </div>
                        <div className="uppercase">
                         <span className=''>No. de unidades: </span><span className="font-black text-2xl">1</span>
                        </div>
                        <div className="mt-1 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center text-xs">
                            Recibi de:
                        </div>
                        <span className='font-black uppercase text-left overflow-visible'>{name}</span>
                        <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                        <div className="grid grid-cols-8 gap-1">
                                    <div>{ele}</div>
                                  
                                </div>
                            </span>
                        </div>
                        <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                            La cantidad de:
                        </div>
                        <span className='font-black  text-right'>{costoEle}</span>
                        <div className="mt-2 border-solid border-2 border-gray-600 w-3/4 font-bold uppercase text-center">
                            Por concepto de:
                        </div>
                        <p className='font-black text-xs mx-7 uppercase'>Tarjetas y derramas</p>
                    
                    </div>
                    <div className="col-span-2 px-5 text-xs">
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
                                Bueno por <span className="font-black text-2xl">{costoEle}</span>
                                </p>
                            </div>
                            <div className="text-center ml-7 text-2xl col-auto">
                                {number_partner}
                            </div>
                        </div>
                        <p className='pt-3 font-bold uppercase w-3/4 '>
                            Recibi de: {''}
                            <div className='col-span-1 font-black uppercase text-left'>C# {''} <span>
                                <div className="grid grid-cols-12 gap-1">
                                    <div>{ele}</div>
                                  
                                </div>
                                </span>
                            </div>
                        </p>
                        <p className='font-bold uppercase mt-5'>
                            La cantidad de: {''}
                            <span className='font-black'>({monedaEle} {centavosEle[1] ? centavosEle[1] : '00'}/100 m.n.)</span>
                        </p>
                        <div className="mt-5 w-full">
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
                                        <td className="uppercase">Tarjetas {mesActual} {''} {mes[0]}</td>
                                        <td className="text-right">{formatter.format(monto)}</td>
                                        <td className="text-center">1</td>
                                        <td className="text-right">{costoEle}</td>
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
            })
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