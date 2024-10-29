import { DecoBottom } from '@/icons/DecoBottom';
import { DecoTop } from '@/icons/DecoTop';
import React from 'react';

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
            <div className="relative z-10">
                {/* Aquí va el contenido principal */}
            </div>
        </div>
    );
};
