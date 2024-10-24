import HouseIcon from '@/components/houseIcon'
import LocationIcon from '@/components/locationIcon'
import PhoneIcon from '@/components/phoneIcon'
import TextIcon from '@/components/textIcon'
import React from 'react'

export default function Contactanos() {
    return (
        <section className='h-screen w-screen overflow-x-hidden lg:overflow-hidden '>
            <div className='relative flex  w-screen h-[35%]  bg-no-repeat bg-[url("https://cambiafx.pe/themes/cambiafx/assets/img/bg-top2.png")] lg:rounded-ee-full items-center rounded-ee-lg'>
                <article className='h-1/2 flex flex-col ms-4 lg:ms-32 '>
                    <div className='flex  border-b text-white gap-x-2 pb-2 w-60  '>
                        <HouseIcon />
                        <h2 className=''>Async Money / <b>Contacto</b></h2>
                    </div>
                    <div className='flex flex-col  mt-4'>
                        <div className='flex items-center gap-x-2'>
                            <img className='h-5 w-8' src="https://cambiafx.pe/themes/cambiafx/assets/img/vineta4.png" />
                            <h2 className='text-white text-3xl font-bold '>Contactanos </h2>
                        </div>
                        <p className='mt-4 text-white'>Ponte en contacto con nosotros en caso tengas alguna <br />
                            duda o sugerencia. No olvides completar todos tus <br />
                            datos, nos contactáremos a la brevedad posible.</p>
                    </div>
                </article>

                <img className='me-4 lg:me-0 sticky translate-y-[30%] w-52 translate-x-8 lg:absolute lg:translate-y-[30%] lg:translate-x-[230%]  lg:right  lg:w-1/5 lg:h-52' src="https://cambiafx.pe/themes/cambiafx/assets/img/image10.png" alt="" />
            </div>
            <div className='h-full w-screen mt-14 flex justify-center flex-wrap lg:flex lg:flex-nowrap ms-5 lg:ms-0'>
                <div className='h-1/2 lg:h-[50%] flex flex-col  gap-y-4 items-center lg:border-black lg:border-r lg:w-2/5 w-4/5 '>
                    <img className='h-5 w-8' src="https://cambiafx.pe/themes/cambiafx/assets/img/vineta3.png" alt="" />
                    <h2 className='font-bold text-xl'>Envianos un mensaje</h2>
                    <form className='h-full w-full' action="">
                        <input placeholder='Nombre y Apellido completo' className='h-9 w-[90%] py-4 outline-none shadow-lg border-none ps-2' type="text" />
                        <div className='w-full mt-4 gap-x-2'>
                            <input placeholder='Teléfono' className='w-[45%] h-9 ps-2 outline-none shadow-lg border-none ' type="text" />
                            <input placeholder='Email' className='w-[45%] h-9 ps-2 outline-none shadow-lg border-none' type="text" />
                        </div>
                        <textarea placeholder='Mensaje' className='resize-none flex items-center h-16 w-[90%] py-4 outline-none shadow-lg border-none ps-2 mt-4' type="text" />
                        <div className='w-[90%] mt-4 ms-4 '>
                            <input type="radio" />
                            <label className='ms-2 text-black/70'  htmlFor="">He leido y acepto la <b>Politica de Privacidad</b> y <b>Terminos y Condiciones</b></label>
                        </div>
                        <button className='mt-4 w-[90%] h-12 rounded-lg bg-gradient-to-r from-sky-400  to-sky-600 flex items-center justify-center text-white font-bold'>Enviar</button>
                    </form>
                </div>

                <div className='h-full flex flex-col  gap-y-4 items-center w-4/5  lg:w-2/5 ms-5 lg:ms-0 '>
                    <img className='h-5 w-8' src="https://cambiafx.pe/themes/cambiafx/assets/img/vineta3.png" alt="" />
                    <h2 className='font-bold text-xl'>Contáctanos</h2>
                    <ul className='w-full gap-y-2 flex flex-col items-center'>
                        <li className='bg-green-400 rounded-full h-8 w-8 flex items-center justify-center text-white p-1 mt-4 lg:mt-0'>
                            <PhoneIcon/>
                        </li>
                        <h2 className='font-medium text-black/70 mb-4 lg:mb-0'>(+51) 922985423</h2>
                        <li className='bg-green-400 rounded-full h-8 w-8 flex items-center justify-center text-white p-1 mt-4 lg:mt-0'>
                            <TextIcon/>
                        </li>
                        <h2 className='font-medium text-black/70 mb-4 lg:mb-0'>hola@asyncmoney.com</h2>
                        <li className='bg-green-400 rounded-full h-8 w-8 flex items-center justify-center text-white p-1 mt-4 lg:mt-0'>
                            <LocationIcon/>
                        </li>
                        <h2 className='font-medium text-black/70 text-center'>Av. Javier Prado Este N° 560, Oficina 2302 <br/>
                        San Isidro-Lima-Perú</h2>
                    </ul>
                </div>
             
            </div>
            <div className='sticky w-full h-8 lg:-translate-y-[370px] flex justify-end pe-5'>
                <button className='h-12 w-12 flex items-center bg-violet-500 justify-center rounded-full text-white'>H</button>
            </div>
        </section>
    )
}
