import React from 'react'

export default function OriginCountryList(props) {
    let originCountryListOpen = props.originCountryListOpen
    let setOriginCountryListOpen = props.setOriginCountryListOpen
    let denominacionOrigen = props.denominacionOrigen
    let setDenominacionOrigen = props.setDenominacionOrigen

    return (
        <>
            {
                originCountryListOpen ? (

                    <ul className='text-[.6rem] text-[#0e2e76] font-semibold border py-2 w-24 rounded-lg shadow-lg bg-sky-100 absolute top-0 left-0'>
                        <li>
                            <button type="button">USD (USA)</button>
                        </li>

                        <li className='my-1'>
                            <button type="button">EUR (Euro)</button>
                        </li>

                        <li>
                            <button type="button">COP (Colombia)</button>
                        </li>

                        <li className='my-1'>
                            <button type="button">PEN (Peru)</button>
                        </li>

                        <li>
                            <button type="button">CNY (China)</button>
                        </li>

                        <li className='my-1'>
                            <button type="button">GBP (Great Britain)</button>
                        </li>

                        <li>
                            <button type="button">MXN (Mexico)</button>
                        </li>

                        <li className='my-1'>
                            <button type="button">ARS (Argentina)</button>
                        </li>

                        <li>
                            <button type="button">BRL (Brazil)</button>
                        </li>

                        <li className='mt-1'>
                            <button type="button">CLP (Chile)</button>
                        </li>
                    </ul>
                ) : null
            }
        </>
    )
}
