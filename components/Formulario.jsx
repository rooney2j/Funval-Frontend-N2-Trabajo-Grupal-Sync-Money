"use client";

import arrow from "@/public/images/formulario/arrow.svg";

import Image from "next/image";
import OriginCountryList from "./OriginCountryList";
import DestinationCountryList from "./DestinationCountryList";
import { useCallback, useRef, useState } from "react";
import { useExchangeRate } from "@/src/hook/exchange.hook";

export default function Formulario() {
  const [monto, setMonto] = useState(0);
  const refResultado = useRef(0);
  const [originCountryListOpen, setOriginCountryListOpen] = useState(false);
  const [destinationCountryListOpen, setDestinationCountryListOpen] =
    useState(false);

  // Moneda de origen
  const [denominacionOrigen, setDenominacionOrigen] = useState("PEN");
  const [denominacionDestino, setDenominacionDestino] = useState("USD");

  const { rate } = useExchangeRate({
    from: denominacionOrigen,
    to: denominacionDestino,
  });
  const onConvertir = useCallback(() => {
    
    refResultado.current.value = (monto * rate).toFixed(2);
  }, [monto, rate]);
  
  return (
    <>
      <div className="w-[90%] flex flex-col gap-2 border-2 rounded-md relative">
        <OriginCountryList
          originCountryListOpen={originCountryListOpen}
          setOriginCountryListOpen={setOriginCountryListOpen}
          /* moneda de origen */
          denominacionOrigen={denominacionOrigen}
          setDenominacionOrigen={setDenominacionOrigen}
        />
        <DestinationCountryList
          destinationCountryListOpen={destinationCountryListOpen}
          setDestinationCountryListOpen={setDestinationCountryListOpen}
          // denominacionDestino={denominacionDestino}
          setDenominacionDestino={setDenominacionDestino}
        />
        <div className="flex items-end px-3">
          <button
            className="p-3 rounded-full bg-slate-200"
            onClick={() => setOriginCountryListOpen(!originCountryListOpen)}
          >
            <span className="font-medium">{denominacionOrigen}</span>
          </button>

          <div className="h-10 w-10">
            <Image src={arrow} alt="imagen" />
          </div>

          <div className="flex flex-col ml-11">
            <label htmlFor="monto_origen" className="text-center">
              <span className="text-[10px]">Monto de origen</span>
            </label>
            <input
              id="monto_origen"
              type="text"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              className="h-8 border-b-2 rounded-lg border-green-400"
            />
          </div>
        </div>

        <div className="flex items-end px-3">
          <button
            className="p-3 rounded-full bg-slate-200"
            onClick={() =>
              setDestinationCountryListOpen(!destinationCountryListOpen)
            }
          >
            <span className="font-medium">{denominacionDestino}</span>
          </button>
        </div>

        <div className="w-full px-4">
          <button
            onClick={onConvertir}
            className="w-full mt-4 h-10 bg-gradient-to-r from-green-300 to-blue-300 rounded-lg"
          >
            <span>Convertir</span>
          </button>
        </div>

        <div className="w-full px-2 pb-4 mt-4 flex flex-col">
          <label htmlFor="resultado" className="text-center">
            <span className="text-[10px]">Resultado</span>
          </label>
          <input
            id="resultado"
            ref={refResultado}
            type="text"
            className="w-full h-16 text-2xl rounded-lg bg-slate-100 text-right"
          />
        </div>
      </div>
    </>
  );
}
