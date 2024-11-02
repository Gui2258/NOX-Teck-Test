import React from 'react';
import { DecoRigthBorder } from '@/icons/DecoRIgthBorder';
import { DecoRigthSolid } from '@/icons/DecoRigthSolid';
import { DecoLeftSolid } from '@/icons/DecoLeftSolid';
import { DecoLeftBorder } from '@/icons/DecoLeftBorder';
import { TestimonialSlider } from './TestimonialSlider';

export const Testimonials = () => {
    return (
        <div id="test" className="relative gap-[32px] px-[16px] py-[48px]  w-full bg-[#FDF4FF]">
            <div className="absolute right-0 top-0 z-10">
                <DecoRigthBorder />
            </div>
            <div className="absolute right-0 top-0">
                <DecoRigthSolid />
            </div>
            <div className="absolute bottom-0 left-0">
                <DecoLeftSolid />
            </div>
            <div className="absolute bottom-0 left-0">
                <DecoLeftBorder />
            </div>

            {/* Contenido del componente */}
            <div className="relative z-10 gap-[32px] flex w-full flex-col items-center justify-center">
                <h1
                    className={`gradientText font-bold text-[24px] md:text-[56px] `}
                >
                    What other users say
                </h1>
                <TestimonialSlider />
                {/* <TestimonialCard /> */}
            </div>
        </div>
    );
};
