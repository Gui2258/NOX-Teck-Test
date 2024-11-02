"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const DeskPng = () => {

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
        <Image src={'/assets/DeskView.png'} width={windowWidth - 100} height={830} alt="vista de usuarios" />
    )

}
