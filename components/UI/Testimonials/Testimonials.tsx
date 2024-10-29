import { roboto } from '@/app/layout';
import { DecoBottom } from '@/icons/DecoBottom';
import { DecoTop } from '@/icons/DecoTop';
import React from 'react';
import { TestimonialCard } from './TestimonialCard';

export const Testimonials = () => {
    return (
        <div id="test" className="relative h-80 w-full bg-rose-50">
            <div className="absolute right-0 top-0">
                <DecoTop />
            </div>
            <div className="absolute bottom-0 left-0">
                <DecoBottom />
            </div>

            {/* Contenido del componente */}
            <div className="relative z-10 flex w-full flex-col items-center justify-center">
                <h1
                    className={`gradientText mt-10 text-xl ${roboto.className}`}
                >
                    What other users say
                </h1>
                <TestimonialCard />
            </div>
        </div>
    );
};
