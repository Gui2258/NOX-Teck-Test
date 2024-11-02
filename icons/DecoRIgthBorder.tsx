"use client"
import React, { useEffect, useState } from 'react'

export const DecoRigthBorder = () => {

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
        < svg width={windowWidth > 768 ? "169" : "56"
        } height={windowWidth > 768 ? "207" : "84"} viewBox="0 0 56 84" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M74.29 53.5211C84.6889 43.1248 98.8476 24.2806 101.849 14.8677C106.42 0.534222 100.522 -8.7952 88.3062 -15.6513C65.3844 -28.5158 28.5887 -17.3681 15.6109 -4.39028C3.48915 7.73151 -0.0339473 16.5829 3.00504 28.6875C6.04403 40.7921 8.04167 49.3767 3.40902 60.9689C-1.15491 72.3891 1.14073 79.0366 8.06731 81.4496C15.5589 84.0595 25.8968 83.6114 38.2873 78.4295C50.9282 73.1429 63.8938 63.9149 74.29 53.5211Z" stroke="#C026D3" />
        </svg >

    )
}
