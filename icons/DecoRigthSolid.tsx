"use client"
import React, { useEffect, useState } from 'react'

export const DecoRigthSolid = () => {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Establecer el ancho inicial
        setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <svg width={windowWidth > 768 ? "169" : "56"
        } height={windowWidth > 768 ? "250" : "84"} viewBox="0 0 55 98" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M73.2901 68.1776C83.689 57.7813 97.8478 38.9371 100.849 29.5242C105.42 15.1907 99.5224 5.86129 87.3063 -0.994787C64.3845 -13.8593 27.5888 -2.71156 14.6111 10.2662C2.48928 22.388 -1.03382 31.2394 2.00517 43.344C5.04416 55.4486 7.04179 64.0332 2.40914 75.6254C-2.15479 87.0455 0.140852 93.6931 7.06743 96.1061C14.559 98.716 24.8969 98.2679 37.2875 93.086C49.9283 87.7993 62.8939 78.5713 73.2901 68.1776Z" fill="#FAE8FF" />
        </svg>


    )
}
