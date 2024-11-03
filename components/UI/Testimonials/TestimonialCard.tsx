import { TestimonialsResponse } from '@/components/types';
import React from 'react';
import { TestimonalsUser } from './TestimonalsUser';

interface TestimonilaCardProps {
    data: TestimonialsResponse
}


export const TestimonialCard: React.FC<TestimonilaCardProps> = ({ data }) => {
    return (
        <div id='testimonialCard' className="flex flex-col items-center gap-[16px] md:gap-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.07),0px_10px_15px_-3px_rgba(0,0,0,0.1)] bg-white px-[10px] sm:px-[16px] py-[24px] md:max-w-[758px] hover:scale-[1.02]">
            <div className="flex flex-col md:gap-[8px] items-center min-h-[200px]">
                <h2 className="text-[24px] md:text-[32px] font-bold text-center">{data.title}</h2>
                <p className="text-center text-[16px] md:text-[24px] font-normal text-[#0F172A]">
                    {data.body}
                </p>
            </div>
            <TestimonalsUser id={data.userId} />
        </div>
    );
};

