import React from 'react'

export default function 

() {
  return (
    <div className="w-full h-screen relative overflow-hidden"> 
      <img src="/bg-top2.png" className="opacity-85" alt="" />
       <div className="w-full h-[70%] absolute left-5 right-5 md:left-20 top-20"> 
          <div className="flex flex-row w-full h-1/2 absolute ml-7">
              <img src="/Logo.png" className="w-14 h-14 object-cover Left:2/4 -translate-x-2/4 -translate-y-1/4"/>
              <img src="/Nombre.png"  className="ml-10 w-24 h-14 object-cover left:2/4 -translate-x-2/4 -translate-y-1/4 "/>
              <img src="/images/celular.png" className="w-[50%] md:w-[20%] ml-5 mr-10 md:mr-0 md:ml-[30%] h-[450px]" alt="" />
          </div>
          <div className="flex flex-col Left:2/4 mt-20 font-mono">
            <h2 className="w-[38%] font-bold text-[#112e78] md:ml-4 text-xl mb-7 md:mb-5">COMPRA Y VENTA DE TODO TIPO MONEDAS</h2>
            <label className="w-[38%] md:w-[33%] font-semibold text-wrap text-justify text-[#112e78]"> Tenemos un sólo propósito: Que puedas realizar tus operaciones financieras desde un sólo lugar, con mejores  condiciones que los bancos y la calle, priorizando tu seguridad y el tiempo que te toma hacerlas.             
            </label>           
          </div>
        </div>
        <div className="mt-24 w-full absolute top-[55%] h-2/6 overflow-auto md:overflow-hidden bg-orange-300">
          <div className="flex flex-row w-full items-center">
              <div className="w-[35%] md:w-[50%] h-[250px] felx flex-col md:flex-row  justify-center items-center">
                  <img src="/images/logo-presente-indecopi1g.png" className="w-[70%] md:w-[35%] md:ml-40 mt-5 ml-7 mb-7  object-cover "/>
                  <img src="/images/logo-presente-ccl1g.png"  className="w-[70%] md:w-[35%] ml-7 md:ml-40 mb-7 object-cover "/>
                  <img src="/images/logo-presente-up1g.png" className="w-[70%] md:w-[35%]  ml-7 md:ml-40  mb-2" alt="" />
              </div>
              <div className=" w-[70%]  md:w-[60%] flex flex-col justify-center items-center font-mono">
                  <label className="text-2xl font-bold mb-2 text-[#112e78] mr-5">Acerca de nosotros</label>
                  <label className="text-base font-semibold mb-3 text-justify mr-5 text-[#112e78]"> Sync Money es una plataforma de servicios financieros, donde puedes comprar y vender todo de moneda y al mejor tipo de cambio.</label>
                  <label  className="text-base font-semibold mb-2 text-justify mr-5 text-[#112e78]">Somos una empresa constituida en el Perú, inscrita en la SUNARP, registrada en SUNAT con RUC 11111111111 y registrados como casa de cambio ante la Superintendencia de Banca, Seguros y AFP con resolución 01111 – 2024 para realizar el cambio de divisas.
                  </label> 
              </div> 
            </div>   
         </div>
    </div>
  )
}
