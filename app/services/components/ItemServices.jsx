import React from "react";

const ItemServices = ({
  title = "",
  description = "",
  icon = null,
  onActive = null,
  active = false,
}) => {
  return (
    <div
      onMouseEnter={onActive}
      className={`flex flex-col md:flex-row md:flex md:text-left md:items-start text-center items-center gap-4 ${
        active ? "md:bg-gray-200 " : "  hidden"
      } rounded-lg p-4 gap-4`}
    >
      <div className="max-w-20 w-20 min-w-20 max-h-20 h-20 min-h-20 md:max-w-12 md:w-12 md:min-w-12 md:max-h-12 md:h-12 md:min-h-12   rounded-full flex items-center justify-center bg-blueApp  text-white">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="md:text-base text-2xl uppercase font-bold">{title}</h3>
        <p className="text-gray-500 md:text-base text-sm">{description}</p>
        <span className="font-semibold hidden md:block">Beneficios</span>
      </div>
    </div>
  );
};

export default ItemServices;
