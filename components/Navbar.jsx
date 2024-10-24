'use client'

import Link from "next/link"
import Image from "next/image"

import { useState } from "react"

export default function Navbar() {
    const nombre_carpeta_navbar = '1.navbar';

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="py-3 px-3 md:px-0 w-screen flex justify-between md:justify-center text-sm bg-gradient-to-r from-white to-blue-50">
                <div className="flex items-center gap-9">
                    <div className="flex items-center h-10">
                        <Image
                            src={`/images/${nombre_carpeta_navbar}/logo-img.png`}
                            width={500}
                            height={500}
                            alt="Logo"
                            className="h-full w-full object-contain"
                        />

                        <Image
                            src={`/images/${nombre_carpeta_navbar}/logo-letters.png`}
                            width={500}
                            height={500}
                            alt="Logo"
                            className="h-full w-full object-contain"
                        />
                    </div>

                    {/* Menú */}
                    <ul
                        className={`${isOpen && "hidden"} hidden md:flex space-x-8`}
                    >
                        <li className="flex items-center gap-1">
                            <Link href="/" className="hover:text-blue-500">Home</Link>
                        </li>

                        <li className="flex items-center gap-1">
                            <Link href="/about" className="hover:text-blue-500">Quiénes somos</Link>
                        </li>

                        <li className="flex items-center gap-1">
                            <Link href="/services" className="hover:text-blue-500">Servicios</Link>
                        </li>

                        <li className="flex items-center gap-1">
                            <Link href="/contactanos" className="hover:text-blue-500">Contacto</Link>
                        </li>

                        <li className="flex items-center gap-1">
                            <Link href="/team" className="hover:text-blue-500">Equipo</Link>
                        </li>
                    </ul>
                </div>

                {/* Botón para el menú hamburguesa */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="focus:outline-none md:hidden"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </button>
            </nav>

            {/* Menú para pantallas pequeñas */}
            {isOpen && (
                <ul className="pl-[40%] mt-4 space-y-2 md:hidden">
                    <li className="flex items-center gap-1">
                        <Link href="/" className="hover:text-blue-500">Home</Link>
                    </li>

                    <li className="flex items-center gap-1">
                        <Link href="/about" className="hover:text-blue-500">Quiénes somos</Link>
                    </li>

                    <li className="flex items-center gap-1">
                        <Link href="/services" className="hover:text-blue-500">Servicios</Link>
                    </li>

                    <li className="flex items-center gap-1">
                        <Link href="/contactanos" className="hover:text-blue-500">Contacto</Link>
                    </li>

                    <li className="flex items-center gap-1">
                        <Link href="/team" className="hover:text-blue-500">Equipo</Link>
                    </li>
                </ul>
            )}
        </>
    )
}