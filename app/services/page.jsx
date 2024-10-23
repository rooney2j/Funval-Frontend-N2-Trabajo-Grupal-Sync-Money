"use client";
import React, { useState } from "react";
import ItemServices from "./components/ItemServices";
import ServicesDetails from "./components/ServicesDetails";

const services = [
  {
    title: "Cambia Dólares",
    description: "Realiza tus operaciones de compra y venta de dólares online.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
    details: [
      "Amplia cobertura bancaria, YAPE, PLIN No cobramos comisiones",
      "Tipo de cambio preferencial para tus colaboradores",
      "Paga tu tarjetas de crédito",
      "Trabajamos con Empresas y Personas",
      "Sorteos, + cupones",
    ],
  },
  {
    title: "TRANSFERENCIA FX",
    description: "Transfiere a otro banco a una baja comisión.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
        />
      </svg>
    ),
    details: [
      "Atención personalizada",
      "Trabajamos con Empresas y Personas",
      "Paga menos comisión por tu transferencia",
    ],
  },
];

const Page = () => {
  const [currentDetails, setCurrentDetails] = useState([
    0,
    services[0].details,
  ]);
  return (
    <div>
      <h2 className="text-center font-bold text-3xl text-blueApp">
        Nuestros servicios
      </h2>
      <div className="flex">
        <div className="max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ea maiores
          odio minima doloremque. Quod sit maiores rem vel vero aliquid incidunt
          optio veniam non laboriosam accusamus, ipsum consequatur sed.
        </div>
        <div className="grid grid-cols-[1fr_4px_1fr] gap-8 ">
          <div className="flex flex-col gap-4">
            {services.map((item, index) => (
              <ItemServices
                key={index}
                title={item.title}
                icon={item.icon}
                description={item.description}
                onActive={() => {
                  setCurrentDetails([index, item.details]);
                }}
              />
            ))}
          </div>
          <div className="border-l-gray-800 border-l w-1"></div>
          <div className="">
            <ServicesDetails services={currentDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
