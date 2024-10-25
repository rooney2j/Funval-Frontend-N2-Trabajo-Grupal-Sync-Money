import React from 'react'
import ThumbsUp from './thumbsUp'
import ClipIcon from './clipIcon'
import HappyFace from './HappyFace'

export default function Chat() {
  return (
    <div className='absolute bottom-16 right-0  w-72 h-96 mb-6 me-6 border-black/60 border rounded-lg '>

        <header className='h-1/4 w-full bg-violet-500 pt-4'>
          <h2 className='text-white font-medium text-center'>Horario Lun-Vie 9:00am - 7:00pm <br/> sáb 10:00am - 1:00pm</h2>
        </header>

        <section className='h-3/5  '>
        <ul className='h-full p-4 flex flex-wrap overflow-y-auto flex-col'>
         <li className='rounded-full h-9 w-full flex '>
            <img src="https://tawk.link/avatar/female-35.svg" alt="" />
            <div className='w-60 ms-2 h-20  bg-gradient-to-r from-violet-500 to-sky-500 rounded-lg text-white font-medium'>
                <h2 className='ps-2 h-full w-full'>Cotiza con nosotros <br/> y obten tu tipo de <br/> cambio preferencial</h2>
            </div>
           
         </li>
         
         
         </ul>
        </section>
        <footer className='h-1/5 w-full flex items-center justify-center '>
         <input placeholder='Escribe un mensaje' className='border border-gray-400 rounded-lg ps-2 outline-none w-3/5 h-8' type="text" />
         <div className='flex items-center  text-slate-900 ms-2 gap-x-2 cursor-pointer'>
           <ThumbsUp/>
           <ClipIcon/>
           <HappyFace/>
         </div>
        </footer>
    </div>
  )
}
