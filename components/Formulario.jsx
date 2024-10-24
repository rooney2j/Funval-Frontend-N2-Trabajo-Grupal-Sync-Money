import arrow from "@/public/images/formulario/arrow.svg"

import Image from "next/image"

export default function Formulario() {
    return (
        <div className='w-[90%] flex flex-col gap-2 border-2 rounded-md'>
            <div className="flex items-end px-3">
                <button className="p-3 rounded-full bg-slate-200">
                    <span className="font-medium">PEN</span>
                </button>

                <div className="h-10 w-10">
                    <Image
                        src={arrow}
                        alt="imagen"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="monto_origen" className="text-center">
                        <span className="text-[10px]">Monto de origen</span>
                    </label>
                    <input id="monto_origen" type="text" className="h-8 border-b-2 rounded-lg border-green-400" />
                </div>
            </div>

            <div className="flex items-end px-3">
                <button className="p-3 rounded-full bg-slate-200">
                    <span className="font-medium">US$</span>
                </button>

                <div className="h-10 w-10">
                    <Image
                        src={arrow}
                        alt="imagen"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="monto_destino" className="text-center">
                        <span className="text-[10px]">Monto de destino</span>
                    </label>
                    <input id="monto_origen" type="text" className="h-8 border-b-2 rounded-lg border-green-400" />
                </div>
            </div>

            <div className="w-full px-4">
                <button className="w-full mt-4 h-10 bg-gradient-to-r from-green-300 to-blue-300 rounded-lg">
                    <span>Convertir</span>
                </button>
            </div>

            <div className="w-full px-2 pb-4 mt-4 flex flex-col">
                <label htmlFor="resultado" className="text-center">
                    <span className="text-[10px]">Resultado</span>
                </label>
                <input id="resultado" type="text" className="w-full h-16 text-2xl rounded-lg bg-slate-100" />
            </div>
        </div>
    )
}
