"use client"
import React, { useEffect, useState } from 'react'

export const DecoLeftSolid = () => {

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
        <svg width={windowWidth > 768 ? "206" : "56"
        } height={windowWidth > 768 ? "191" : "84"} viewBox="0 0 90 137" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-25.8027 27.6385C-8.63156 40.6453 -5.56909 4.74327 11.6467 14.0562C59.8949 40.1561 48.7746 -10.0841 75.612 5.78692C117.517 30.5686 52.8661 131.087 37.7329 135.142C23.598 138.93 13.4774 136.024 -0.066648 123.687C-13.6107 111.35 -23.2222 102.769 -36.4772 98.9828C-49.5356 95.2532 -67.0586 88.0693 -74.5241 60.2078C-77.1866 50.2712 -83.4077 9.07225 -70.9565 1.59686C-61.0662 -4.34106 -36.7594 19.3391 -25.8027 27.6385Z" fill="#FAE8FF" />
        </svg>

    )
}
