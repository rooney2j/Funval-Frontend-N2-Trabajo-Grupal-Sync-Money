"use client";
import React, { useCallback } from "react";

export default function CountryList(props) {
  let destinationCountryListOpen = props.destinationCountryListOpen;
  let setDestinationCountryListOpen = props.setDestinationCountryListOpen;
  let setDenominacionDestino = props.setDenominacionDestino;
  const onClickSelect = useCallback(
    (e) => {
      if (e.target.closest("button"))
        setDenominacionDestino(e.target.closest("button").value);
    },
    [setDenominacionDestino]
  );
  return (
    <>
      {destinationCountryListOpen ? (
        <ul
          onClick={onClickSelect}
          className="text-[.6rem] text-[#0e2e76] font-semibold border py-2 w-24 rounded-lg shadow-lg bg-red-200 absolute  bottom-0  left-[-5rem]"
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
