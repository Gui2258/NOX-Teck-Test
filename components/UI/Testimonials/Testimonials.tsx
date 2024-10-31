import React from 'react';
import { DecoBottom } from '@/icons/DecoBottom';
import { DecoTop } from '@/icons/DecoTop';
import { TestimonialCard } from './TestimonialCard';

export const Testimonials = () => {
    return (
        <div id="test" className="relative gap-[32px] px-[16px] py-[48px]  w-full bg-[#FDF4FF]">
            <div className="absolute right-0 top-0">
                <DecoTop />
            </div>
            <div className="absolute bottom-0 left-0">
                <DecoBottom />
            </div>

            {/* Contenido del componente */}
            <div className="relative z-10 gap-[32px] flex w-full flex-col items-center justify-center">
                <h1
                    className={`gradientText font-bold text-[24px] `}
                >
                    What other users say
                </h1>
                <TestimonialCard />
            </div>
        </div>
    );
};
