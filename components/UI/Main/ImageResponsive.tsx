"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';


export const ImageResponsive = () => {

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

    // Ajustar el ancho de la imagen según el tamaño de la pantalla
    const imageWidth = windowWidth >= 768 ? 1280 : 361; // 768px es el breakpoint md
    const imageHeigth = windowWidth >= 768 ? 465 : 222; // 768px es el breakpoint md
    const src = windowWidth >= 768 ? '/assets/mainImageW.png' : '/assets/mainImage.png'; // 768px es el breakpoint md
    return (
        <div className='mt-2   '>
            <Image
                src={src}
                width={imageWidth}
                height={imageHeigth}
                alt="Customer Photo"
                className='rounded-[20px]  border-2 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]'
            />
        </div>
    )
}
