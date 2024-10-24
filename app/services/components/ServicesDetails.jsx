import React, { useEffect, useRef, useState } from "react";

const ServicesDetails = ({ services = [] }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
  }, []);
  return (
    <div>
      <h3 className="text-blueApp text-2xl font-bold">Beneficios</h3>
      <ul
        className={`flex flex-col gap-10 mt-8 transition-all duration-1000 ${
          active ? "w-full" : "w-[0px]"
        }`}
      >
        {services.map((item, index) => (
          <li key={index} className="">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesDetails;
