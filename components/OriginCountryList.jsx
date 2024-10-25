"use client";
import React, { useCallback } from "react";

export default function OriginCountryList(props) {
  let originCountryListOpen = props.originCountryListOpen;
  let setOriginCountryListOpen = props.setOriginCountryListOpen;
  let denominacionOrigen = props.denominacionOrigen;
  let setDenominacionOrigen = props.setDenominacionOrigen;

  const onClickSelect = useCallback(
    (e) => {
      if (e.target.closest("button"))
        setDenominacionOrigen(e.target.closest("button").value);
    },
    [setDenominacionOrigen]
  );

  return (
    <>
      {originCountryListOpen ? (
        <ul
          className="text-[.6rem] text-[#0e2e76] font-semibold border py-2 w-24 rounded-lg shadow-lg bg-sky-100 absolute top-2 left-[-5rem]"
          onClick={onClickSelect}
        >
          <li>
            <button type="button" value={"USD"}>
              USD (USA)
            </button>
          </li>

          <li className="my-1">
            <button type="button" value={"EUR"}>
              EUR (Euro)
            </button>
          </li>

          <li>
            <button type="button" value={"COP"}>
              COP (Colombia)
            </button>
          </li>

          <li className="my-1">
            <button type="button" value={"PEN"}>
              PEN (Peru)
            </button>
          </li>

          <li>
            <button type="button" value={"CNY"}>
              CNY (China)
            </button>
          </li>

          <li className="my-1">
            <button type="button" value={"GBP"}>
              GBP (Great Britain)
            </button>
          </li>

          <li>
            <button type="button" value={"MXN"}>
              MXN (Mexico)
            </button>
          </li>

          <li className="my-1">
            <button type="button" value={"ARS"}>
              ARS (Argentina)
            </button>
          </li>

          <li>
            <button type="button" value={"BRL"}>
              BRL (Brazil)
            </button>
          </li>

          <li className="mt-1">
            <button type="button" value={"CLP"}>
              CLP (Chile)
            </button>
          </li>
        </ul>
      ) : null}
    </>
  );
}
