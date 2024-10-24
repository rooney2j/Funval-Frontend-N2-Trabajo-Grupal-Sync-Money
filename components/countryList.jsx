import React from 'react'

export default function CountryList() {
    return (
        <ul className='text-[.6rem] text-[#0e2e76] font-semibold border py-2 w-24 rounded-lg shadow-lg bg-sky-100'>
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
                <button type="button">EN (Peru)</button>
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
    )
}
