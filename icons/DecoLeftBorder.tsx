"use client"
import React, { useEffect, useState } from 'react'

export const DecoLeftBorder = () => {
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
        <svg width={windowWidth > 768 ? "222" : "56"
        } height={windowWidth > 768 ? "164" : "84"} viewBox="0 0 98 139" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-18.6928 28.4701C-1.52164 41.4768 1.54084 5.57481 18.7566 14.8877C67.0049 40.9876 55.8845 -9.25252 82.7219 6.61846C124.627 31.4002 59.976 131.919 44.8429 135.974C30.7079 139.761 20.5873 136.855 7.04327 124.518C-6.5008 112.182 -16.1122 103.6 -29.3673 99.8144C-42.4257 96.0847 -59.9487 88.9008 -67.4142 61.0393C-70.0767 51.1027 -76.2978 9.90379 -63.8466 2.42841C-53.9562 -3.50951 -29.6495 20.1706 -18.6928 28.4701Z" stroke="#C026D3" />
        </svg>

    )
}

