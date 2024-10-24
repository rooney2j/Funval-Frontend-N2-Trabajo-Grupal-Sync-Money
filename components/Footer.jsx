import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (

        <footer className='w-full h-2/12 bg-gradient-to-tr from-sky-400 via-slate-300 to-sky-900 py-5'>
            <div className='flex justify-center w-full h-full '>
                <div className='flex flex-col w-8/12'>

                    <div className='flex font-mono text-lg boder border-b-2 border-b-[#0e2e76]'>
                        <h2 className='text-[#0e2e76] font-semibold'>Siguenos</h2>
                        <h2 className='mx-auto text-[#0e2e76] font-semibold'>Legal</h2>

                    </div>

                    <div className='flex items-center w-full '>

                        <Link href={'/redsolcial'}>
                            <figure className=''>
                                <Image className='w-8 h-8' src='/images/footer/facebook.svg' width={54} height={54} alt='facebook icon' />
                            </figure>
                        </Link>

                        <Link href={'/red solcial'}>
                            <figure className='ml-1'>
                                <Image className='w-8 h-8' src='/images/footer/twitterx.svg' width={54} height={54} alt='twitterx icon' />
                            </figure>
                        </Link>

                        <Link href={'/red solcial'}>
                            <figure>
                                <Image className='h-12' src='/images/footer/instagram.svg' width={54} height={54} alt='instagram icon' />
                            </figure>
                        </Link>

                        <Link href={'/red solcial'}>
                            <figure className='mr-1'>
                                <Image className='w-7 h-7' src='/images/footer/whatsapp.png' width={54} height={54} alt='whatsapp icon' />
                            </figure>
                        </Link>

                        <Link href={'/red solcial'}>
                            <figure>
                                <Image className='w-8 h-8' src='/images/footer/linkedin.svg' width={54} height={54} alt='linkedin icon' />
                            </figure>
                        </Link>


                        <div className='flex text-xs ml-20 gap-4'>
                            <div>
                               <Link href={'/legal'}>
                               <h2>Terminos y condiciones</h2>
                               </Link>

                                <Link href={'/legal'}>
                                <h2>Politica de privacidad</h2>
                                </Link>
                            </div>
                            <div>
                                <Link href={'/legal'}>
                                <h2>Quejas y sugerencias</h2>
                                </Link>

                                <Link href={'/legal'}>
                                <h2>Soporte</h2>
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </footer>

    )
}
