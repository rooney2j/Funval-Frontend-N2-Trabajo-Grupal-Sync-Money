import React from "react";

const ItemServices = ({
  title = "",
  description = "",
  icon = null,
  onActive = null,
}) => {
  return (
    <div
      onMouseEnter={onActive}
      className="flex border-2 border-gray-200 bg-gray-200 rounded-lg p-4 gap-4"
    >
      <div className="max-w-12 w-12 min-w-12 max-h-12 h-12 min-h-12   rounded-full flex items-center justify-center bg-blueApp  text-white">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-1xl uppercase font-bold">{title}</h3>
        <p className="text-gray-500">{description}</p>
        <span className="font-semibold">Beneficios</span>
      </div>
    </div>
  );
};

export default ItemServices;
